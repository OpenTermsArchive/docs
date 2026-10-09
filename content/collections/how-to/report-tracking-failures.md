---
title: Report tracking failures
weight: 7
---

# How to report tracking failures as issues

The [issue reporter](https://github.com/OpenTermsArchive/issue-reporter) module reports the tracking failures of a collection as issues on the software forge hosting its declarations, on GitHub or GitLab, so that contributors can restore the tracking of the terms concerned. It reads the tracking results that the engine records and exposes through the [Collection API]({{< relref "api/collection" >}}), and keeps the issues in sync with them. To understand how issues are opened, labelled and closed, see the [reporting explanation]({{< relref "collections/explanation/reporting" >}}).

## Prerequisites

Before starting, ensure you have:

- An engine of version 16.4.0 or later, with [tracking results]({{< relref "collections/reference/configuration#tracking-results" >}}) enabled, which is the default, and its Collection API running
- A GitHub or GitLab account allowed to manage the issues and labels of the declarations repository, and a token of this account with read and write permissions on issues

## Install the module

1. Add the module to the dependencies of the collection, at its root, next to the engine:

   ```shell
   npm install @opentermsarchive/issue-reporter
   ```

2. Add the following scripts to the `package.json` of the collection:

   ```json
   {
     "scripts": {
       "issue-reporter": "ota-issue-reporter sync",
       "issue-reporter:schedule": "npm run issue-reporter -- --schedule"
     }
   }
   ```

3. Configure the module in the `config/production.json` of the collection, next to the engine configuration. All options are detailed in the [configuration reference]({{< relref "collections/reference/configuration#issue-reporter" >}}):

   ```json
   {
     "@opentermsarchive/issue-reporter": {
       "type": "github",
       "repositories": {
         "declarations": "OpenTermsArchive/demo-declarations",
         "versions": "OpenTermsArchive/demo-versions",
         "snapshots": "OpenTermsArchive/demo-snapshots"
       },
       "collectionApi": {
         "url": "http://127.0.0.1:3000/collection-api/v1"
       }
     }
   }
   ```

4. Provide the token of the forge in the `.env` file of the collection, as `OTA_ISSUE_REPORTER_GITHUB_TOKEN` or `OTA_ISSUE_REPORTER_GITLAB_TOKEN` depending on the configured type, see the [environment variables reference]({{< relref "collections/reference/environment-variables#issue-reporter" >}}).

5. Add the module to the `pm2.config.cjs` of the collection so that it runs alongside the engine:

   ```js
   {
     name: 'ota-issue-reporter',
     script: 'npm',
     args: 'run issue-reporter:schedule',
     min_uptime: '10s',
     max_restarts: 10,
     restart_delay: 60 * 60 * 1000, // likely related to a forge availability problem that will take some time to be fixed
     exponential_backoff_restart_delay: true,
     log_date_format: "YYYY-MM-DDTHH:mm:ssZ"
   }
   ```

The issues can also be synchronized once, without scheduling, with `npm run issue-reporter`. The available commands are detailed in the [command line interface reference]({{< relref "api/cli#reporting-tracking-failures" >}}).

## Migrate from the engine reporter

Up to engine v16 included, the reporter was part of the engine and configured under the `@opentermsarchive/engine.reporter` key. To migrate a collection:

1. Install the module as described above.
2. Move the `type`, `repositories`, `baseURL` and `apiBaseURL` entries from `@opentermsarchive/engine.reporter` to `@opentermsarchive/issue-reporter`, and add the `collectionApi.url` entry. If the configuration uses the legacy `githubIssues` entry, replace it with `"type": "github"` next to the same `repositories`, as the module does not infer the type of the forge.
3. Provide the token of the forge to the module in the `.env` file:
   - On GitHub, add `OTA_ISSUE_REPORTER_GITHUB_TOKEN`, with the same token as `OTA_ENGINE_GITHUB_TOKEN` or a dedicated one. Keep `OTA_ENGINE_GITHUB_TOKEN` if the engine publishes datasets to GitHub releases, as it still uses it to do so.
   - On GitLab, rename `OTA_ENGINE_GITLAB_TOKEN` to `OTA_ISSUE_REPORTER_GITLAB_TOKEN`, as the engine no longer uses it. The engine publishes datasets to GitLab releases with `OTA_ENGINE_GITLAB_RELEASES_TOKEN`.

The issues are identified by their title, which did not change, so the module takes over the issues opened by the engine.
