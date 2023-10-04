---
title: "Creating a collection"
weight: 2
---

# Creating a collection

## Define the necessary metadata

First of all, it is strongly recommended to define the scope and metadata of the collection:
- Concise description of the collection topic (examples: `Largest global social media`, `Most used social media in France`, `Dating apps`, `Platforms providing services to businesses`…)
- Collection name (3 words maximum, examples: `Platform Governance Archive`, `France Élections`, `Dating`, `P2B Compliance Assessment`…)
- Collection ID (examples: `pga`, `France-elections`, `dating`, `p2b-compliance`…)
- Terms language (examples: `English`, `French`, `English`, `All EU languages`…)
- Service jurisdiction (examples: `EU`, `France`, `EEA`, `EU`…)
- Collection maintainer entity (name, logo, url)

## Create repositories

### Collection definition

Create the collection definition repository by using the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations) as template:
- Go to the [demo collection repository homepage](https://github.com/OpenTermsArchive/demo-declarations)
- Click on the "Use this template" dropdown
- Select "Create a new repository"
- In the opened page, fill the repository name, it is strongly recommended to use the collection ID
- When redirected to the newly generated repositroy, please wait until the automatic setup is done (it should be done in less than a minute).

#### Fill the about section

- Set the description: “Declarations for `<collection_name>`. Maintained by `<maintainer>`.”
- Set website: https://opentermsarchive.org
- Add the following tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`.
- Uncheck “Releases”, “Packages” and “Environments”.

#### Define repository settings

These settings ease the whole contribution process.

- In the `Pull Requests` section: check only the “Allow squash merging” option, and set it to “Default to pull request title and commit details”.
- Enable “Allow auto-merge”.
- Enable “Automatically delete head branches”.
- In the `Branches` section: add a branch protection rule for `main`, check “Require status checks to pass before merging” and add `validate_modified_declarations` and `validate_schema` as required status checks.
- In the `Actions` section, in the `General` submenu: select "Allow all actions and reusable workflows".

#### Update readme

- Update readme with proper metadata: topic, maintainers, jurisdictions, languages…

#### Update deployment inventory

- Open the `deployment/inventory.yml` and set server information: ip, user, fingerprint…

### Snapshots

Create the snapshot repository by using the [Demo snapshots](https://github.com/OpenTermsArchive/demo-snapshots) as template:
- Go to the [demo snapshots repository homepage](https://github.com/OpenTermsArchive/demo-snapshots)
- Click on the "Use this template" dropdown
- Select "Create a new repository"
- In the opened page, fill the repository name, it is strongly recommended to use the `<collection_id>-snapshots`.
- When redirected to the newly generated repositroy, please wait until the automatic setup is done (it should be done in less than a minute).
- Give write rights on the repo to the maintenance team.

#### Fill the about section

- Set the description: “Documents snapshots for `<collection_name>`. Maintained by `<maintainer>`.”
- Set website: https://opentermsarchive.org
- Add the following tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`.
- Uncheck “Releases”, “Packages” and “Environments”.

#### Define repository settings

These settings aim at minimising the otherwise overwhelming amount of information and click targets.

- Features: uncheck “Wikis” and “Projects”.
- In the `Actions` section, in the `General` submenu: select "Disable actions".

### Versions

Create the snapshot repository by using the [Demo versions](https://github.com/OpenTermsArchive/demo-versions) as template:
- Go to the [demo versions repository homepage](https://github.com/OpenTermsArchive/demo-versions)
- Click on the "Use this template" dropdown
- Select "Create a new repository"
- In the opened page, fill the repository name, it is strongly recommended to use the `<collection_id>-versions`.
- When redirected to the newly generated repositroy, please wait until the automatic setup is done (it should be done in less than a minute).
- Give write rights on the repo to the maintenance team.

#### Fill the about section

- Set the description: “Documents versions for `<collection_name>`. Maintained by `<maintainer>`.”
- Set website: https://docs.opentermsarchive.org/navigate-history/
- Add the following tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`.
- Uncheck “Packages” and “Environments”.

#### Define repository settings

These settings aim at minimising the otherwise overwhelming amount of information and click targets.

- Features: uncheck “Wikis” and “Projects”.
- In the `Actions` section, in the `General` submenu: select "Disable actions".

## Set up the GitHub maintenance team

For collections to be included in the Open Terms Archive organisation only. For third parties, handle rights however you see fit.

- [Create a new team](https://github.com/orgs/OpenTermsArchive/new-team)
- Give it the name of the collection
- Set as avatar the collection icon from the website
- Set as description: “Maintainers of the <collection_name> collection”
- Add selected members to the team
- Add the declarations repository to the collection team, with “Maintain” access rights
- Add the snapshots repository to the collection team, with “Triage” access rights (giving them more would enable them to corrupt data)
- Add the versions repository to the collection team, with “Triage” access rights (giving them more would enable them to corrupt data)
- Add the declarations, snapshots and versions repositories to the Bots team with “Write” access

- - -

## Setup deployment

### On the server

- Connect to the server with `ssh <username>@<host>` (example usernames: `debian`, `ubuntu`…)
- Create a new SSH key: `ssh-keygen -q -N "" -f ~/.ssh/ota-deploy`
- Add public key to authorized_keys `cat ~/.ssh/ota-deploy.pub >> ~/.ssh/authorized_keys`
	- Display the public key `cat ~/.ssh/ota-deploy.pub` and keep it temporarily for the next steps
- Add private key to the SSH authentication agent `ssh-add ~/.ssh/ota-deploy` (start the ssh agent before if necessary `eval \`ssh-agent -s\``)
	- Display the private key `cat ~/.ssh/ota-deploy` and keep it temporarily for the next steps

Note: user must have the right to `sudo`.

### On GitHub declarations repository settings

Create the following [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository):

- `SERVER_FINGERPRINT`: obtained with `ssh-keyscan -t ed25519 <host>`
- `SERVER_SSH_KEY`: use the previously generated server private key

### On declarations repository

Fill `deployment/inventory.yml`:

- `<host>` (example: `162.19.74.224`)
- `ansible_user: <username>` (example: `debian`)
- `ed25519_fingerprint: <server_ssh_fingerprint>` (example: `AAAAC3NzaC1lZDI1NTE5AAAAIJkjE1KIbUcoClK+iKLR5ZvmdXMD/eXWghHdenFeJz4c` obtained with `ssh-keyscan -t ed25519 <host>`)

- - -

## Test

### Via GitHub Actions

- Check that the `deploy` action ran properly on the declarations repository.

### Locally

_To test deployment from your local machine, your SSH keys must be authorized to connect to the server._

- `cd <path/to/><collection_id>-declarations/deployment`
- `ansible-playbook opentermsarchive.deployment.deploy`
