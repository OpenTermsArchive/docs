---
title: Creating a collection
weight: 3
---

# Creating a collection

You are considering creating a new collection to track terms with Open Terms Archive? Amazing!

## Define metadata

First of all, define the [metadata]({{< relref "collections/metadata" >}}) of the collection you would like to create.

## Check existing collections

Now that you have a clear idea what you would like to track, double-check that there are no [existing federated collections](https://opentermsarchive.org/#collections) that you could contribute to. If you have a doubt about whether some terms you want to track would fit a collection, reach out to the collection maintainers.

If no existing collection could be a good host for the terms you would like to track, then it is relevant to create your own.

## Inform the community

Starting a new collection is an exciting endeavour, and would strongly benefit from the support of the community who already maintains existing collections. It is strongly recommended to share your intention to create a new collection as early as possible in the process, to get support and identify potential partners.

You can inform the community by posting on the instant messaging system, or [sending an email](mailto:contact@opentermsarchive.org) to the core team.

## Define governance

Setting up and maintaining a collection over time needs fulfilling certain tasks on a regular basis. These tasks are handled through roles. To make sure that all these roles are covered, define the [governance]({{< relref "collections/governance" >}}) of your collection.

At any time, feel free to ask for help or partners in the community.

## Create repositories

Collections rely on three git repositories being set up to hold the data.

The instructions below assume the usage of GitHub to host repositories. If you don't use GitHub, try to set up the equivalent metadata in your git hosting platform. Contributions to the documentation to make it independent from GitHub are very welcome!

### Declarations

Create the collection declarations repository by using the [`demo-declarations`](https://github.com/OpenTermsArchive/demo-declarations) repository as template.

- Go to the [`demo-declarations` repository](https://github.com/OpenTermsArchive/demo-declarations)
- Click on the “Use this template” dropdown and select “Create a new repository”
- Set the repository name to `<collection_id>-declarations`. For example: `pga-declarations`.
- When redirected to the newly generated repository, wait a minute or two for the automatic setup to run. You can check the status of the `first-time-setup` GitHub action to make sure that everything ran fine.

#### Fill the “About” section

- Click on the little cogwheel icon next to the “About” block.
- Set the description to “Declarations for `<collection_name>`. Maintained by `<maintainer>`.”
- Set website to `https://opentermsarchive.org`, or any other relevant dedicated website.
- Add the following tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`.
- Uncheck “Releases”, “Packages” and “Deployments”.

#### Define repository settings

These settings ease the whole contribution process.

- In “General → Features”
  - Disable “Wikis”.
  - Disable “Projects”.
- In “General → Pull Requests”
  - Check only the “Allow squash merging” option, and set it to “Default to pull request title and commit details”.
  - Enable “Allow auto-merge”.
  - Enable “Automatically delete head branches”.
- In “Branches”
  - Add a branch protection rule for `main`.
    - Check “Require a pull request before merging”, check "Require approvals" and set “Required number of approvals before merging” to 1.
    - Check “Require status checks to pass before merging” and add `validate_modified_declarations` and `validate_schema` as required status checks.
- In “Actions → General → Actions permissions”
  - Select “Allow all actions and reusable workflows”.

#### Remove default labels

Issues labels will be added by the engine as problems are encountered when tracking. The default labels offered by GitHub, such as `question` or `wontfix`, are relevant for software development but less so for the process prescribed by Open Terms Archive.

- Remove all default labels.

#### Update README

- Update the README file with proper metadata: topic, maintainers, jurisdictions, languages…

### Snapshots

Create the snapshots repository by using the [`demo-snapshots` repository](https://github.com/OpenTermsArchive/demo-snapshots) as template:

- Go to the [`demo-snapshots` repository](https://github.com/OpenTermsArchive/demo-snapshots)
- Click on the “Use this template” dropdown and select “Create a new repository”
- Set the repository name to `<collection_id>-snapshots`.
- When redirected to the newly generated repository, wait a minute or two for the automatic setup to run. You can check the status of the `first-time-setup` GitHub action to make sure that everything ran fine.

#### Fill the “About” section

- Set the description: “Documents snapshots for `<collection_name>`. Maintained by `<maintainer>`.”
- Set website to `https://opentermsarchive.org`.
- Add the following tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`.
- Uncheck “Releases”, “Packages” and “Deployments”.

#### Define repository settings

These settings aim at minimising the otherwise overwhelming amount of information and click targets.

- In “General → Features”
  - Uncheck “Wikis”.
  - Uncheck “Issues”.
  - Uncheck “Discussions”.
  - Uncheck “Projects”.
- In “Actions → General → Actions permissions”
  - Select “Disable actions”.

### Versions

Create the versions repository by using the [`demo-versions` repository](https://github.com/OpenTermsArchive/demo-versions) as template:

- Go to the [`demo-versions` repository](https://github.com/OpenTermsArchive/demo-versions)
- Click on the “Use this template” dropdown and select “Create a new repository”
- Set the repository name to `<collection_id>-versions`.
- When redirected to the newly generated repository, wait a minute or two for the automatic setup to run. You can check the status of the `first-time-setup` GitHub action to make sure that everything ran fine.

#### Fill the “About” section

- Set the description: “Terms versions for `<collection_name>`. Maintained by `<maintainer>`.”
- Set website to `{{< ref "terms/how-to-navigate-history" >}}`
- Add the following tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`.
- Uncheck “Packages”.
- Uncheck “Deployments”.

#### Define repository settings

These settings aim at minimising the otherwise overwhelming amount of information and click targets.

- In “General → Features”
  - Uncheck “Wikis”.
  - Uncheck “Issues”.
  - Uncheck “Discussions”.
  - Uncheck “Projects”.
- In “Actions → General → Actions permissions”
  - Select “Disable actions”.

#### Update README

- Update the README file with proper metadata.

## Set up GitHub teams

For collections to be included in the Open Terms Archive organisation only. For third parties, handle rights however you see fit.

- [Create a new collection team](https://github.com/orgs/OpenTermsArchive/new-team)
- Give it the name of the collection
- Set as avatar the collection icon from the website
- Set as description: “Maintainers of the `<collection_name>` collection”
- Add selected members to the team
- Add the declarations repository to the collection team, with “Maintain” access rights
- Add the snapshots repository to the collection team, with “Triage” access rights (giving them more would enable them to corrupt data)
- Add the versions repository to the collection team, with “Triage” access rights (giving them more would enable them to corrupt data)
- Add the declarations, snapshots and versions repositories to the Bots team with “Write” access

## Set up deployment

### Check server configuration

Before proceeding with deployment, ensure that the server meets the following requirements:

- Verify that the server provides an Ed25519 fingerprint for its SSH host key:
  
  - Retrieve the Ed25519 SSH host key from the server `ssh-keyscan -t ed25519 <server_address>`
  - If the server has an Ed25519 SSH host key defined, the output will display the corresponding fingerprint. It will look something like this:

  ```shell
    <server_address> ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJM6fCKWkiKv+uysoHsklIAuUOH6Dpc3crzHxk7GwrD
  ```
  
  - If no output is displayed or if the output does not include an Ed25519 SSH host key fingerprint, it indicates that the server does not have an Ed25519 SSH host key defined. Here's an example of the output when no Ed25519 SSH host key is defined:

  ```shell
    # <server_address> SSH-2.0-OpenSSH_8.2p1 Ubuntu-4ubuntu0.3
    <server_address> ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDqruXk1P6vIVvN2i6ffLO6TlYCcC6lqF3oBYT7sC+nfIb5C9HYsUFWptSxohOy41wV3AbSzjHqEjxCt9MeJ4HXrLItti8Qr3fRBYgs45+L44bMZ9sA/EO+YiXQU9cQJb2qjK5EYQyFyEnGUMbh+zzRiCRQTI0A2nlnJ9zWQJr/4jIrlNJ6N0lV1GQzN/iIpCJto6ZmhbEgW5W3H+zB5qj72uKoyLlm8Lh+AF5ljtTnOuXgrh2nN6EN1hjRf52VtQZ93guIBkn5+riZ3gYYp3fl4sYbIAZRRs5rOcyFk9d/jo+kBw/Pxht4KABVHJHMPQ9cI2Fn2VbEOvZ+RrWLXc5Am3qwbUWpqYmp7n7wwdTrkYeCBMsXk7xQl5TJh+5Rkr6k0YRkcbvP+J+I1TJwob1DOyWBpRA3v9LYimEmy9eheQuKYzH5sQ/0r/7ZwhBL5/lB5kpv3kmwA7DZy1J5UbgChtSey3Du0N+6p/vgfybIgcZD5Csz8+dF3c+gZBCfRd4XpKgLoxLPZO69tM8/3z/3W0gOfXgEw6QKwJ6KoFXeBdRG9c/CCsR8dF3iIeZYWZvj+8nC/Y7hF6Dedr/6CHc0O4xwqE0GQzF3YUZI7HcqjxIIFsIsG+loUGWYB7a0HHn0FrAq79Q==
    <server_address> ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBLe8sKzXq4KReWp0Dz1lC8AKOcYNtPuk7GOqJRSVGkG1xRhP94gReTp7S1WnF6LgFt3vlC2k62BkSoXgryY3+8=
  ```

  - If the server does not have an Ed25519 SSH host key defined, once logged in on your server, you can generate one: `sudo ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key`
  - Restart the SSH service to apply the changes: `sudo systemctl restart ssh`

- Make sure that a non-root user has been set up on the server, if not you can create by following:

  - Once logged in on your server, create a new user: `adduser <user>`. Follow the prompts to set a password for the new user and provide any additional information if required.
  - Grant sudo privileges: `usermod -aG sudo <user>`.

- Grant `sudo` rights to the designated user without requiring a password prompt. To achieve this:

  - Open the file `/etc/sudoers` for editing.
  - Navigate to the section titled `# Allow members of group sudo to execute any command`.
  - Add the following line at the end of this section:
  
    ```shell
    <user>  ALL=(ALL) NOPASSWD:ALL
    ```

### Define the inventory

On your local machine:

- Clone the `<collection_id>-declarations` repository
- Update the following entries in the inventory file `deployment/inventory.yml`:
  - `<host>` (example: `162.19.74.224`)
  - `ansible_user: <username>` (example: `debian`)
  - `ed25519_fingerprint: <server_ssh_fingerprint>` obtained with `ssh-keyscan -t ed25519 <host>` (example: `AAAAC3NzaC1lZDI1ETE5AAAAIJkjE2KIbUcoClK+lKLR5ZvmdXMD/eXWghHdenFeJz4c`)

### Add fingerprint to GitHub <collection_name>-declarations settings

- Log in on GitHub with a user account that has admin privileges for the `<collection_name>-declarations` repository
- Go to `https://github.com/OpenTermsArchive/<collection_name>-declarations/settings/secrets/actions`
- Create the `SERVER_FINGERPRINT` [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) by using the previously obtained ed25519 fingerprint

### Set up a SSH deployment key

This key will enable automated deployment via GitHub Actions.

#### Create the SSH key

- Connect to the server: `ssh <username>@<host>`
- Create a new deployment SSH key: `ssh-keygen -t ed25519 -q -N "" -f ~/.ssh/ota-deploy`
- Add the public key to `authorized_keys`: `cat ~/.ssh/ota-deploy.pub >> ~/.ssh/authorized_keys`

#### Add key to GitHub <collection_name>-declarations repository secrets

- Log in on GitHub using a user account with admin privileges for the `<collection_name>-declarations` repository
- Go to `https://github.com/OpenTermsArchive/<collection_name>-declarations/settings/secrets/actions`
- Create the `SERVER_SSH_KEY` secret with the previously generated deployment private key

#### Back key up

On your local machine:

- Clone the [`engine.wiki`](https://github.com/OpenTermsArchive/engine/wiki)
- Open the shared passwords database `database.kdbx` with [KeePassXC](https://keepassxc.org)
- Create the `Collection: <collection_name>` folder
- Inside this folder, add an entry with the title `Deployment SSH key`
- Attach public `ota-deploy.pub` and private `ota-deploy` key files to the entry
- Save, commit and push

### Allow OTA-Bot to create issues and publish dataset on GitHub

#### Create a fine-grained repo-scoped token

- Log in on GitHub as OTA-Bot user
- Go to <https://github.com/settings/personal-access-tokens/new>
- Set the “Token name”: “Issue/Release on `<collection_name>` collection”
- Leave blank “Description”
- Set the expiry date to the maximum possible (one year later at the time of writing)
- In “Resource owner”, select the “OpenTermsArchive“ organization
- Leave blank the following text area: `Describe why your personal access token needs access to the OpenTermsArchive organization.`
- In “Repository access”, select “Only select repositories”
- In “Select repositories”, Select “`<collection_name>`-declarations” and `<collection_name>`-versions”
- In “Permissions” → “Repository permissions”, select “Contents — Access: Read and write”
- In “Permissions” → “Repository permissions”, select “Issues — Access: Read and write”
- Validate with “Generate token and request access”

#### Backup the token

On your local machine:

- Open the shared passwords database `database.kdbx` with [KeePassXC](https://keepassxc.org)
- Inside the `Collection: <collection_name>` folder, add an entry with the title `GitHub Token`
- Copy the previously generated token in the `Password` field
- Save, commit and push

#### Validate the token

- Log in on GitHub using a user account with admin privileges for the OpenTermsArchive organization
- Go to <https://github.com/organizations/OpenTermsArchive/settings/personal-access-token-requests>
- Select the pending request
- Approve it

### Add secrets

#### Generate vault key

On your local machine:

- Open the shared passwords database `database.kdbx` with [KeePassXC](https://keepassxc.org)
- Inside the `Collection: <collection_name>` folder, add an entry with the title `Vault key`
- In the password field, click on the icon on the right to generate a new password
- Generate a new password that does not contain any quote or backtick
- Save, commit and push

#### Create vault key file

On your local machine:

- Go to the `<collection_id>-declarations` repository
- Go to `deployment` folder
- Create a `vault.key` file
- Copy the previously generated password inside

#### Add vault key to GitHub <collection_name>-declarations settings

- Log in on GitHub using a user account with admin privileges for the `<collection_name>-declarations` repository
- Go to `https://github.com/OpenTermsArchive/<collection_name>-declarations/settings/secrets/actions`
- Create the `ANSIBLE_VAULT_KEY` [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) by using the previously generated vault key

#### Encrypt token and update deployment

On your local machine:

- Go to the `<collection_id>-declarations` repository
- Go to `deployment` folder
- Paste the token in a `.env` file under the name `OTA_ENGINE_GITHUB_TOKEN`
- Encrypt `.env`: `ansible-vault encrypt .env`

### Set up an OTA-Bot SSH key specific to this collection

#### Create the SSH key

- Create a new SSH key: `ssh-keygen -t ed25519 -C bot@opentermsarchive.org -P "" -f ./<collection_name>-key`
- Copy the generated private key file

#### Encrypt private key and update deployment

On your local machine:

- Go to the `<collection_id>-declarations` repository
- Go to `deployment` folder
- Paste the private key file
- Rename it into `github-bot-private-key`
- Encrypt key `github-bot-private-key`: `ansible-vault encrypt github-bot-private-key`

#### Back key up

On your local machine:

- Inside the [`engine.wiki`](https://github.com/OpenTermsArchive/engine/wiki)
- Open the shared passwords database `database.kdbx` with [KeePassXC](https://keepassxc.org)
- Inside the `Collection: <collection_name>` folder, add an entry with the title `OTA-Bot GitHub SSH key`
- Attach public `<collection_name>-key.pub` and private `<collection_name>-key` key files to the entry
- Save, commit and push

#### Attach the key to OTA-Bot GitHub user

- Log in on GitHub as OTA-Bot user
- Go to <https://github.com/settings/ssh/new>
- Set the “Title”: “`<collection_name>` collection”
- Paste the public key in “Key”
- Validate with “Add SSH Key”

### Enable sending error reports over email

#### Create an SMTP key

Create an SMTP key to allow sending error notifications by email.

- Log in on Brevo as Open Terms Archive admin user
- Go to <https://app.brevo.com/settings/keys/smtp>
- “Generate a new SMTP key”
- Set the SMTP key name “Name your SMTP key”: `<collection_name>` collection”
- Validate with “Generate”

#### Backup key

On your local machine:

- Inside the [`engine.wiki`](https://github.com/OpenTermsArchive/engine/wiki)
- Open the shared passwords database `database.kdbx` with [KeePassXC](https://keepassxc.org)
- Inside the `Collection: <collection_name>` folder, add an entry with the title `SMTP Key`
- Copy the previously generated key in the `Password` field
- Save, commit and push

#### Encrypt key and update deployment

On your local machine:

- Go to the `<collection_id>-declarations` repository
- Go to `deployment` folder
- Decrypt `.env` if necessary: `ansible-vault decrypt .env`
- Paste the key in a `.env` file under the name `OTA_ENGINE_SMTP_PASSWORD`
- Encrypt `.env`: `ansible-vault encrypt .env`

## Test

### Via GitHub Actions

- Check that the `deploy` action ran properly on the declarations repository.

### Locally

To test deployment from your local machine, your SSH keys must be authorized to connect to the server.

- `cd <path/to/><collection_id>-declarations/deployment`
- `ansible-galaxy collection install -r requirements.yml`
- `ansible-playbook opentermsarchive.deployment.deploy`
