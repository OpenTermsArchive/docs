---
title: Deploy a collection
weight: 1
---

# How to deploy a collection

This guide will help you deploy an Open Terms Archive collection to a server. The deployment is automated using [Ansible](https://docs.ansible.com/ansible/latest/index.html) and will set up the Open Terms Archive engine and configure it to track your collection's terms.

## Prerequisites

Before starting, ensure you have:

- A basic understanding of the [deployment architecture]({{< relref "deployment/reference/architecture" >}})
- A server with admin access
- All collections repositories created, if not, see the [guide to create repositories]({{< relref "collections/how-to/create-repositories" >}})
- At least one declaration added to your collection
- A GitHub user account to automate actions such as committing entries in versions and snapshots repositories, reporting issues when tracking fails, publishing releases…
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) installed on your local machine

## 1. Configure the server

First, ensure your server provides unsupervised access:

1. Check the SSH host key and get the SSH fingerprint by running the following command on your local machine:

   ```shell
   ssh-keyscan -t ed25519 <server_address> | grep -v '^#' | cut -d' ' -f3
   ```

   You should get an output that should be saved for later use as `<server_ssh_fingerprint>`. It will look like this:

   ```shell
   AAAAC3NzaC1lZDI1NTE5AAAAIGvJ9Al5cU7WwQ9a2m5oRmd3XjTzGQ1nBNiYFLm0TtB5
   ```

   If no Ed25519 key appears, generate one by running the following commands on the server:

   ```shell
   sudo ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key
   sudo systemctl restart ssh
   ```

   > **Note**: A server fingerprint is a unique identifier for your server's SSH key. It helps verify that you're connecting to the correct server and not a malicious one. The fingerprint is a hash of the server's public key and is used to prevent man-in-the-middle attacks. You'll need this fingerprint in the next steps for secure deployment.

2. Connect to the server and create a dedicated user account specifically for deployment purposes, by running the following commands:

   ```shell
   adduser --disabled-password  <deployment_user>
   usermod --append --groups=sudo <deployment_user>
   ```

   > **Note**: The `--disabled-password` option creates a user account that cannot log in with a password unless one is explicitly set later. This is a security measure since the deployment process will use SSH keys for authentication instead of passwords.

   > **Note**: The `adduser` command might not be installed by default on your system. It can be installed with `sudo apt-get install adduser`.

3. Create and configure the SSH directory for the deployment user by running these commands on the server:

   ```shell
   sudo mkdir /home/<deployment_user>/.ssh
   sudo chmod 700 /home/<deployment_user>/.ssh
   sudo chown <deployment_user>:<deployment_user> /home/<deployment_user>/.ssh
   ```

4. Configure passwordless sudo access for this deployment user, by adding the following line to the `/etc/sudoers` file on the server:

   ```shell
   <deployment_user> ALL=(ALL) NOPASSWD:ALL
   ```

   > **Note**: While passwordless sudo access does reduce security compared to requiring a password, it is required for full automation in deployment workflows with Ansible. The deployment process requires system-level operations (like installing packages and configuring services) that must be executed without manual intervention. To mitigate security risks, this configuration is limited to a dedicated deployment user that should only be used for deployment purposes, and the server must be properly secured with SSH key authentication.

## 2. Set up the deployment configuration

1. Clone the collection declarations repository that you want to deploy and navigate to the collection folder:

   ```shell
   git clone https://github.com/<organization>/<collection_id>-declarations.git
   cd <collection_id>-declarations
   ```

2. Configure the inventory file `deployment/inventory.yml` with your server's IP address, deployment user, server fingerprint and the repository URL:

   ```yaml
   <server_ip>:
      ansible_user: <deployment_user>
      ed25519_fingerprint: <server_ssh_fingerprint>
      ota_source_repository: https://github.com/<organization>/<collection_id>-declarations.git
   ```

3. Add the server fingerprint to GitHub, to allow the deployment workflow to uniquely identify the server:
   - Go to `https://github.com/<organization>/<collection_id>-declarations/settings/secrets/actions/new`
   - Create a new secret named `SERVER_FINGERPRINT` with your Ed25519 fingerprint

## 3. Configure SSH deployment keys

1. On the server, generate a deployment key, which will be used by the continuous deployment workflow to connect to the server to deploy the collection:

   ```shell
   ssh-keygen -t ed25519 -N "" -f /home/<deployment_user>/.ssh/ota-deploy
   cat /home/<deployment_user>/.ssh/ota-deploy.pub >> /home/<deployment_user>/.ssh/authorized_keys
   ```

2. Add the private key to GitHub, to allow the deployment workflow to connect to the server:
   - Go to `https://github.com/<organization>/<collection_id>-declarations/settings/secrets/actions/new`
   - Create a new secret named `SERVER_SSH_KEY` with the private key content

{{< showIfParam "ota" >}}
3. Back up the keys in the shared password database by creating an entry titled "Deployment SSH Key" in the collection folder and storing both public and private keys in this entry
{{< /showIfParam >}}

## 4. Set up GitHub permissions

1. Log in as the user account dedicated to bot-related actions in GitHub

2. Create a fine-grained GitHub token:
   - Go to [https://github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new)
   - Select an option for the "Resource owner", it can be the organization or the user account
   - Set the expiration date to "No expiration"
   - If the resource owner is an organization, in "Repository access", select "Only select repositories" and select the `<collection_id>-declarations` and `<collection_id>-versions` repositories
   - If the resource owner is a user account, in "Repository access", select "All repositories"
   - In "Permissions", select "Repository permissions" and grant "Contents" and "Issues" "Read and write" permissions
   - Click on "Generate token"

3. If the resource owner is an organization, have an organization admin approve the token request. This step is not needed if the resource owner is a user account.

4. Keep this token for later use as `<github_token>`

{{< showIfParam "ota" >}}
5. Back up the token in the shared password database by creating an entry titled "GitHub Token" in the collection folder and storing the token in this entry
{{< /showIfParam >}}

## 5. Configure and encrypt secrets

This section uses [Ansible Vault](https://docs.ansible.com/ansible/latest/vault_guide/index.html), a feature of Ansible that allows you to encrypt sensitive data like passwords and keys. The encrypted files can be safely committed to version control while keeping the actual secrets secure. The vault key you'll create will be used to encrypt and decrypt these secrets.

1. Generate and store a vault key:
   - Generate a secure password without quotes/backticks
   - Inside the collection folder, create a file named `deployment/vault.key` and paste the generated password into it.
   - Go to `https://github.com/<organization>/<collection_id>-declarations/settings/secrets/actions`
   - Create a new secret named `ANSIBLE_VAULT_KEY` and paste the same password into it.

   > **Note**: The same vault key is used in two places:
   > - Locally as `vault.key` to encrypt/decrypt files during development
   > - In GitHub Actions as `ANSIBLE_VAULT_KEY` to decrypt files during automated deployment

2. Store the GitHub token, generated in the previous section, in `deployment/.env`:

   ```shell
   OTA_ENGINE_GITHUB_TOKEN=<github_token>
   ```

3. Encrypt the `.env` file by running the following command inside the `deployment` folder of the collection:

   ```shell
   ansible-vault encrypt .env
   ```

   > **Note**: Running the command from the `deployment` folder will ensure that the `vault.key` file is used as vault key, since this folder contains an `ansible.cfg` file that explicitly configures this behavior.
   >
   > To decrypt an encrypted file, use:
   >
   > ```shell
   > ansible-vault decrypt deployment/.env
   > ```
   >
   > After making changes, re-encrypt it:
   >
   > ```shell
   > ansible-vault encrypt deployment/.env
   > ```

4. Commit the changes to the repository

{{< showIfParam "ota" >}}
5. Back up the vault key in the shared password database by creating an entry titled "Vault Key" in the collection folder and storing the vault key in this entry
{{< /showIfParam >}}

## 6. Set up collection-specific SSH key

1. On your local machine, generate a new key, which will be used by the Open Terms Archive engine to perform actions on GitHub as the bot user:

   ```shell
   ssh-keygen -t ed25519 -C bot@opentermsarchive.org -N "" -f ./<collection_name>-key
   ```

2. Store the private key by replacing the whole content of `deployment/github-bot-private-key` with the content of the private key file you just generated (`./<collection_name>-key`). Make sure to include the entire key, including the "-----BEGIN OPENSSH PRIVATE KEY-----" and "-----END OPENSSH PRIVATE KEY-----" lines, with the newline at the end of the file. It should look like this:

   ```shell
   -----BEGIN OPENSSH PRIVATE KEY-----
   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAlwAAAAdzc2gt
   ZWQyNTUxOQAAACDXr7PSaRM0YeIrCZ3NEyyMy7nzzvTWQ78EoUmsRt6W0wAAAJiKDTHV
   ig0x1QAAAAdzc2gtZWQyNTUxOQAAACDXr7PSaRM0YeIrCZ3NEyyMy7nzzvTWQ78EoUms
   Rt6W0wAAAECrEN7xyX4h8r5wP0Adtz3WqIS8Su8D6UnyCm9tZyNNdavi89JpEzRh4isJ
   nc0TLIzLufPO9NZDvwShSayG3pbTAAAAE2Zha2VAdGVzdC5sb2NhbAECAwQFBgc=
   -----END OPENSSH PRIVATE KEY-----

   ```

3. Encrypt the private key file by running the following command inside the `deployment` folder of the collection:

   ```shell
   ansible-vault encrypt github-bot-private-key
   ```

4. Commit the changes to the repository

5. Add the public key to bot user's GitHub account:
   - Still logged in as the user account dedicated to bot-related actions in GitHub
   - Go to [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new)
   - Add the public key with title "<collection_name> collection"

{{< showIfParam "ota" >}}
6. Back up the key in the shared password database by creating an entry titled "OTA-Bot GitHub SSH key" in the collection folder and storing both public and private keys in this entry
{{< /showIfParam >}}

## 7. Configure email notifications

This section describes how to configure the engine to use a specific SMTP server to send email notifications when it encounters errors during the tracking process. This helps you stay informed about issues that need attention and allows you to restart the tracking process if needed.

1. Get the SMTP credentials (host, username, password) from your email provider

2. Update collection SMTP configuration within the `logger` key of `@opentermsarchive/engine` in the `config/production.json` file:

   ```json
      "logger": {
         "smtp": {
            "host": "<smtp_host>",
            "username": "<smtp_username>"
         },
      },
   ```

3. Store the password in `deployment/.env`:

   ```shell
   OTA_ENGINE_SMTP_PASSWORD=your_smtp_key
   ```

   > **Note**: To decrypt the file encrypted in a previous step in order to add the password, run `ansible-vault decrypt .env`

4. Encrypt the `.env` file:

   ```shell
   ansible-vault encrypt .env
   ```

{{< showIfParam "ota" >}}
5. Create a new SMTP key in Brevo and name it "<collection_name> collection"
6. Back up the key in the shared password database by creating an entry titled "SMTP Key" in the collection folder and storing the credentials in this entry
{{< /showIfParam >}}

## 8. Test the deployment

1. Via GitHub Actions:
   - Check that the `deploy` action completes successfully

2. Via local deployment:

   ```shell
   cd <collection_id>-declarations/deployment
   ansible-galaxy collection install --requirements-file requirements.yml
   ansible-playbook opentermsarchive.deployment.deploy
   ```

   > **Note**: The local deployment will only work if your personal SSH key is authorized to connect to the deployment user on the server. If you haven't done this yet, follow these steps:
   > 1. On your local machine, copy your public SSH key
   > 2. Connect to the server and paste the key at the end of the `/home/<deployment_user>/.ssh/authorized_keys` file

If all steps complete successfully, your collection should now be properly deployed and running.
