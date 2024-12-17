---
title: Create repositories
weight: 1
---

# How to create collection repositories

Collections in Open Terms Archive rely on three Git repositories to hold the data:
- Declarations repository: stores the declarations that define terms to track
- Snapshots repository: stores raw snapshots of tracked documents
- Versions repository: stores processed versions of tracked documents

This guide assumes you use GitHub. For other Git platforms, adapt these steps accordingly.

## Prerequisites

Before starting, ensure you have:
- A GitHub account with permissions to create repositories
- Your collection ID and name defined
- Your collection metadata prepared

## Create declarations repository

### Create from template

1. Go to the [`demo-declarations`](https://github.com/OpenTermsArchive/demo-declarations) repository
2. Click "Use this template" dropdown and select "Create a new repository"
3. Name it `<collection_id>-declarations` (e.g. `pga-declarations`)
4. Wait 1-2 minutes for automatic setup to complete (check `first-time-setup` action status)

### Configure repository settings

1. Set up the "About" section:
   - Click the cogwheel icon next to "About"
   - Add description: "Declarations for `<collection_name>`. Maintained by `<maintainer>`."
   - Set website: `https://opentermsarchive.org`
   - Add tags: `terms-of-service`, `terms-of-service-agreements`, `terms-and-conditions`, `open-terms-archive`
   - Uncheck "Releases", "Packages" and "Deployments"

2. Configure features:
   - In "General → Features":
     - Disable "Wikis" and "Projects"
   - In "General → Pull Requests":
     - Enable only "Allow squash merging" with "Default to pull request title and commit details"
     - Enable "Allow auto-merge"
     - Enable "Automatically delete head branches"
   - In "Branches":
     - Add branch protection for `main`
     - Require pull request with 1 approval
     - Require status checks: `validate_modified_declarations` and `validate_schema`
   - In "Actions":
     - Allow all actions and reusable workflows

3. Remove all default labels

4. Update content:
   - Update README with collection metadata
   - Update `metadata.yml` with collection metadata

## Create snapshots repository

### Create from template

1. Go to [`demo-snapshots`](https://github.com/OpenTermsArchive/demo-snapshots)
2. Click "Use this template" and select "Create a new repository"
3. Name it `<collection_id>-snapshots`
4. Wait for automatic setup to complete

### Configure repository

1. Set up "About" section:
   - Add description: "Documents snapshots for `<collection_name>`. Maintained by `<maintainer>`."
   - Set website: `https://opentermsarchive.org`
   - Add standard tags
   - Uncheck "Releases", "Packages" and "Deployments"

2. Configure features:
   - Disable Wikis, Issues, Discussions, and Projects
   - Disable GitHub Actions

## Create versions repository

### Create from template

1. Go to [`demo-versions`](https://github.com/OpenTermsArchive/demo-versions)
2. Click "Use this template" and select "Create a new repository"
3. Name it `<collection_id>-versions`
4. Wait for automatic setup to complete

### Configure repository

1. Set up "About" section:
   - Add description: "Terms versions for `<collection_name>`. Maintained by `<maintainer>`."
   - Set website to terms navigation documentation
   - Add standard tags
   - Uncheck "Packages" and "Deployments"

2. Configure features:
   - Disable Wikis, Issues, Discussions, and Projects
   - Disable GitHub Actions

3. Update README with collection metadata

## Set up GitHub teams

For collections within the Open Terms Archive organization:

1. [Create a new collection team](https://github.com/orgs/OpenTermsArchive/new-team)
2. Configure team:
   - Name it after the collection
   - Set collection icon as avatar
   - Description: "Maintainers of the `<collection_name>` collection"
3. Set repository access:
   - Declarations repository: "Maintain" access
   - Snapshots repository: "Triage" access
   - Versions repository: "Triage" access
4. Add team members
5. Add repositories to Bots team with "Write" access

## Verify setup

1. Check that all repositories were created successfully
2. Verify repository settings are correctly configured
3. Ensure team permissions are properly set
4. Test basic operations (e.g., creating an issue, making a PR)
