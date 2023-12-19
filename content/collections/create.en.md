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
- Set website to `https://docs.opentermsarchive.org/navigate-history/`
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

### On the server

- Connect to the server with `ssh <username>@<host>` (usual usernames: `debian`, `ubuntu`…)
- Create a new SSH key: `ssh-keygen -q -N "" -f ~/.ssh/ota-deploy`
- Add the public key to `authorized_keys`: `cat ~/.ssh/ota-deploy.pub >> ~/.ssh/authorized_keys`
- Add the private key to the SSH authentication agent: `ssh-add ~/.ssh/ota-deploy` (start the SSH agent before if necessary with `eval ${ssh-agent -s}`)
- Copy the public and private keys and back them up in the shared passwords repository

Note: user must have the right to `sudo`.

### On GitHub declarations repository settings

Create the following [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository):

- `SERVER_FINGERPRINT`: obtained with `ssh-keyscan -t ed25519 <host>`, example `AAAAC3NzaC1lZDI1NTE5AAAAIPdUmZPDKAQLEI8dhsW6EsIHdMzLXbQOVdi2OFVfzF8e`
- `SERVER_SSH_KEY`: use the previously generated server private key

### On declarations repository

Fill `deployment/inventory.yml`:

- `<host>` (example: `162.19.74.224`)
- `ansible_user: <username>` (example: `debian`)
- `ed25519_fingerprint: <server_ssh_fingerprint>`

## Test

### Via GitHub Actions

- Check that the `deploy` action ran properly on the declarations repository.

### Locally

To test deployment from your local machine, your SSH keys must be authorized to connect to the server.

- `cd <path/to/><collection_id>-declarations/deployment`
- `ansible-playbook opentermsarchive.deployment.deploy`
