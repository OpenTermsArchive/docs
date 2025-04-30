---
title: Deploy a collection
weight: 1
---

# How to deploy a collection

This guide will help you deploy an Open Terms Archive collection to a server. The deployment is automated using [Ansible](https://docs.ansible.com/ansible/latest/index.html) and will set up the Open Terms Archive engine and configure it to track your collection's terms.

## System Overview

Before diving into the deployment steps, here's a quick reminder of the high-level overview of how Open Terms Archive works. 

Each collection uses three repositories, `declarations` which contains the terms to track, the engine and deployment configuration, `versions` and `snapshots` which are automatically managed repositories storing versions and snapshots history.

The deployment process is automated through GitHub Actions. Ansible configures the server and sets up the Open Terms Archive engine. On the server, [PM2](https://pm2.keymetrics.io) is used to start and control the engine.

When deployed, the engine runs continuously on the server, periodically checking for changes in the tracked terms. When changes are detected, it automatically commits them to the versions and snapshots repositories. When issues occur, email notifications are sent.

## Prerequisites

Before starting, ensure you have:

- A server with admin access
- All collections repositories created, if not, see the [guide to create repositories]({{< relref "collections/how-to/create-repositories" >}})
- At least one declaration added to your collection
- A GitHub user account dedicated to bot-related actions (commit entries in versions and snapshots repositories, report issues when tracking fails, publish releases, …)
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) installed on your local machine

> **Note**: This guide is intended for both Open Terms Archive organization members and external contributors. Some steps marked with "_Specific to Open Terms Archive organization members_" are only relevant for organization members as they involve access to the organization's shared password database. External contributors should adapt these steps to their own security practices while following the same deployment principles.

## 1. Configure the server

First, ensure your server provides unsupervised access:

1. Check the SSH host key and get the SSH fingerprint by running the following command on your local machine:

   ```shell
   ssh-keyscan -t ed25519 <server_address>
   ```

   If no Ed25519 key appears, generate one by running the following commands on the server:

   ```shell
   sudo ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key
   sudo systemctl restart ssh
   ```

   > **Note**: A server fingerprint is a unique identifier for your server's SSH key. It helps verify that you're connecting to the correct server and not a malicious one. The fingerprint is a hash of the server's public key and is used to prevent man-in-the-middle attacks. You'll need this fingerprint in the next steps for secure deployment.

2. Create a dedicated user account specifically for deployment purposes, by running the following commands on the server:

   ```shell
   adduser <deployment_user>
   usermod --append --groups=sudo <deployment_user>
   ```

   > **Note**: The `adduser` command might not be installed by default on your system. It can be installed with `sudo apt-get install adduser`.

3. Configure passwordless sudo access for this user, by running the adding the following line to the `/etc/sudoers` file on the server:

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
   - Go to `https://github.com/<organization>/<collection_id>-declarations/settings/secrets/actions`
   - Create a new secret named `SERVER_FINGERPRINT` with your Ed25519 fingerprint

## 3. Configure SSH deployment keys

1. On the server, generate a deployment key, which will be used by the continuous deployment workflow to connect to the server to deploy the collection:

   ```shell
   ssh-keygen -t ed25519 -N "" -f ~/.ssh/ota-deploy
   cat ~/.ssh/ota-deploy.pub >> ~/.ssh/authorized_keys
   ```

2. Add the private key to GitHub, to allow the deployment workflow to connect to the server:
   - Go to `https://github.com/<organization>/<collection_id>-declarations/settings/secrets/actions`
   - Create a new secret named `SERVER_SSH_KEY` with the private key content

3. > _Specific to Open Terms Archive organization members_
   >
   > Back up the keys in the shared password database by creating an entry titled "Deployment SSH Key" in the collection folder and storing both public and private keys in this entry

## 4. Set up GitHub permissions

1. Log in as the user account dedicated to bot-related actions in GitHub

2. Create a fine-grained GitHub token:
   - Create a new token at github.com/settings/personal-access-tokens/new
   - Set repository access for both declarations and versions repositories
   - Grant "Contents" and "Issues" write permissions

3. If relevant, get the token approved by having an organization admin approve the token request

4. Keep this token for the next steps

5. > _Specific to Open Terms Archive organization members_
   >
   > Back up the token in the shared password database by creating an entry titled "GitHub Token" in the collection folder and storing the token in this entry

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
   OTA_ENGINE_GITHUB_TOKEN=your_token
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

5. > _Specific to Open Terms Archive organization members_
   >
   > Back up the vault key in the shared password database by creating an entry titled "Vault Key" in the collection folder and storing the vault key in this entry

## 6. Set up collection-specific SSH key

1. Generate a new key, which will be used by the Open Terms Archive engine to perform actions on GitHub as the bot user:

   ```shell
   ssh-keygen -t ed25519 -C bot@opentermsarchive.org -N "" -f ./<collection_name>-key
   ```

2. Store the private key in `deployment/github-bot-private-key`

3. Encrypt the private key file by running the following command inside the `deployment` folder of the collection:

   ```shell
   ansible-vault encrypt github-bot-private-key
   ```

4. Commit the changes to the repository

5. Add the public key to bot user's GitHub account:
   - Go to github.com/settings/ssh/new
   - Add the public key with title "<collection_name> collection"

6. > _Specific to Open Terms Archive organization members_
   >
   > Back up the key in the shared password database by creating an entry titled "OTA-Bot GitHub SSH key" in the collection folder and storing both public and private keys in this entry

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

5. > _Specific to Open Terms Archive organization members_
   > Create a new SMTP key in Brevo and name it "<collection_name> collection"
   > Back up the key in the shared password database by creating an entry titled "SMTP Key" in the collection folder and storing the credentials in this entry

## 8. Test the deployment

1. Via GitHub Actions:
   - Check that the `deploy` action completes successfully

2. Via local deployment:

   ```shell
   cd <collection_id>-declarations/deployment
   ansible-galaxy collection install --requirements-file requirements.yml
   ansible-playbook opentermsarchive.deployment.deploy
   ```

If all steps complete successfully, your collection should now be properly deployed and running.
