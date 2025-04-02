---
title: Deploy a collection
weight: 1
---

# How to deploy a collection

This guide will help you deploy an Open Terms Archive collection to a server.

## 1. Configure the server

First, ensure your server provides unsupervised access:

1. Check the SSH host key:
   ```shell
   ssh-keyscan --type=ed25519 <server_address>
   ```
   If no Ed25519 key appears, generate one on the server:
   ```shell
   sudo ssh-keygen --type=ed25519 --file=/etc/ssh/ssh_host_ed25519_key
   sudo systemctl restart ssh
   ```

2. Create a non-root user if needed:
   ```shell
   adduser <user>
   usermod --append --groups=sudo <user>
   ```

3. Grant passwordless sudo access:
   ```shell
   # Add to /etc/sudoers:
   <user> ALL=(ALL) NOPASSWD:ALL
   ```

## 2. Set up the deployment configuration

1. Clone the collection declarations repository:
   ```shell
   git clone https://github.com/OpenTermsArchive/<collection_id>-declarations.git
   ```

2. Configure the inventory file `deployment/inventory.yml`:
   ```yaml
   <host>: "your.server.ip"
   ansible_user: "your_username"
   ed25519_fingerprint: "your_ssh_fingerprint"
   ```

3. Add the server fingerprint to GitHub:
   - Go to `https://github.com/OpenTermsArchive/<collection_name>-declarations/settings/secrets/actions`
   - Create a new secret named `SERVER_FINGERPRINT` with your Ed25519 fingerprint

## 3. Configure SSH deployment keys

1. On the server, generate a deployment key:
   ```shell
   ssh-keygen --type=ed25519 --quiet --passphrase="" --file=~/.ssh/ota-deploy
   cat ~/.ssh/ota-deploy.pub >> ~/.ssh/authorized_keys
   ```

2. Add the private key to GitHub:
   - Go to the repository secrets
   - Create `SERVER_SSH_KEY` with the private key content

3. Back up the keys:
   - Store both public and private keys in the shared password database
   - Create an entry titled "Deployment SSH key" in the collection folder

## 4. Set up GitHub permissions

1. Create a fine-grained GitHub token:
   - Log in as OTA-Bot
   - Create a new token at github.com/settings/personal-access-tokens/new
   - Set repository access for both declarations and versions repos
   - Grant "Contents" and "Issues" write permissions

2. Back up the token:
   - Store it in the shared password database under "GitHub Token"

3. Get the token approved:
   - Have an organization admin approve the token request

## 5. Configure secrets

1. Generate and store a vault key:
   - Generate a secure password without quotes/backticks
   - Store it in the password database
   - Create `deployment/vault.key` with the password
   - Add it as `ANSIBLE_VAULT_KEY` in GitHub secrets

2. Store GitHub token:
   ```
   # In deployment/.env:
   OTA_ENGINE_GITHUB_TOKEN=your_token
   ```

3. Encrypt the `.env` file:
   ```shell
   ansible-vault encrypt .env
   ```

## 6. Set up collection-specific SSH key

1. Generate a new key:
   ```shell
   ssh-keygen --type=ed25519 --comment=bot@opentermsarchive.org --passphrase="" --file=./<collection_name>-key
   ```

2. Encrypt and store the private key:
   ```shell
   # Copy private key to deployment/github-bot-private-key
   ansible-vault encrypt github-bot-private-key
   ```

3. Add the public key to OTA-Bot's GitHub account:
   - Go to github.com/settings/ssh/new
   - Add the public key with title "<collection_name> collection"

## 7. Configure email notifications

1. Generate SMTP credentials:
   - Create a new SMTP key in Brevo
   - Name it "<collection_name> collection"

2. Store the credentials:
   ```shell
   # In deployment/.env:
   OTA_ENGINE_SMTP_PASSWORD=your_smtp_key
   ```

3. Encrypt the `.env` file:
   ```shell
   ansible-vault encrypt .env
   ```

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
