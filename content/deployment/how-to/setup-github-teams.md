---
title: Setup GitHub teams
weight: 2
---

# How to set up GitHub teams for a collection

This guide explains how to configure GitHub teams and permissions for a new collection in the Open Terms Archive organization. For third-party collections outside the organization, you can handle permissions according to your own needs.

## Prerequisites

- Admin access to the OpenTermsArchive GitHub organization
- The collection name and icon
- List of team members to add
- The three collection repositories (declarations, snapshots, versions) already created

## Steps

1. Create the collection team:
   1. Go to [GitHub's new team page](https://github.com/orgs/OpenTermsArchive/new-team)
   2. Enter the collection name as the team name
   3. Upload the collection icon from the website as the team avatar
   4. Set the description to: "Maintainers of the `<collection_name>` collection"
   5. Click "Create team"

2. Add team members:
   1. Navigate to the team's "Members" tab
   2. Click "Add member"
   3. Search and select each member to add
   4. Confirm their addition

3. Configure repository access for the collection team:
   1. Go to the team's "Repositories" tab
   2. Add the declarations repository with "Maintain" access
   3. Add the snapshots repository with "Triage" access
   4. Add the versions repository with "Triage" access

   > Note: Snapshots and versions repositories are limited to "Triage" access to prevent data corruption

4. Configure bot access:
   1. Navigate to the Bots team
   2. Go to the "Repositories" tab
   3. Add all three repositories (declarations, snapshots, versions) with "Write" access

## Verification

After completing these steps, verify that:
- The team appears in the organization's teams list
- Team members can access all repositories with appropriate permissions
- The Bots team has write access to all repositories
