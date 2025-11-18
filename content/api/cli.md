---
title: Command line interface
weight: 1
---

# Command line interface

Once the engine module is installed as a dependency within another module, the `ota` command with the following subcommands is available.

In these commands:

- `<service_id>` is the case sensitive name of the service declaration file without the extension. For example, for `Twitter.json`, the service ID is `Twitter`.
- `<terms_type>` is the property name used under the `terms` property in the declaration to declare a terms. For example, in the getting started declaration, the terms type declared is `Privacy Policy`.

## Tracking terms

{{< refItem name="ota track" description="Track the current terms of services according to provided declarations. The declarations, snapshots and versions paths are defined in the configuration. This command automatically runs a technical upgrade pass first to apply any engine, dependency, or declaration updates before tracking." example="npx ota track" />}}

> Note that the snapshots and versions will be recorded at the moment the command is executed, on top of the existing local history. If a shared history already exists and the goal is to add on top of it, that history has to be downloaded before executing that command.

{{< refItem name="ota track --help" description="Show help and available options for track command" example="npx ota track --help" />}}

{{< refItem name="ota track [--services <service_id>...]" description="Track terms of specific services only" example="npx ota track --services \"Facebook\" \"LinkedIn\"" />}}

{{< refItem name="ota track [--services <service_id>...] [--types <terms_type>...]" description="Track specific terms types of specific services only" example="npx ota track --services \"Facebook\" \"LinkedIn\" --types \"Privacy Policy\" \"Terms of Service\"" />}}

{{< refItem name="ota track --schedule [--services <service_id>...] [--types <terms_type>...]" description="Track terms on the schedule defined in the configuration" example="npx ota track --schedule" />}}

## Applying technical upgrades

{{< refItem name="ota apply-technical-upgrades" description="Apply technical upgrades by regenerating versions from existing snapshots with updated declarations/engine. This also fetches missing snapshots for newly added source documents in combined terms. Versions created during this process are labeled as technical upgrades to avoid false notifications." example="npx ota apply-technical-upgrades" />}}

{{< refItem name="ota apply-technical-upgrades --help" description="Show help and available options for apply-technical-upgrades command" example="npx ota apply-technical-upgrades --help" />}}

{{< refItem name="ota apply-technical-upgrades [--services <service_id>...]" description="Apply technical upgrades to specific services only" example="npx ota apply-technical-upgrades --services \"Facebook\" \"LinkedIn\"" />}}

{{< refItem name="ota apply-technical-upgrades [--services <service_id>...] [--types <terms_type>...]" description="Apply technical upgrades to specific terms types of specific services only" example="npx ota apply-technical-upgrades --services \"Facebook\" \"LinkedIn\" --types \"Privacy Policy\" \"Terms of Service\"" />}}

## Validating declarations

{{< refItem name="ota validate declarations [--services <service_id>...] [--types <terms_type>...]" description="Check that all declarations allow recording a snapshot and a version properly. If service IDs are provided, check only those services." example="npx ota validate declarations --services \"Facebook\" --types \"Privacy Policy\"" />}}

{{< refItem name="ota validate declarations --schema-only [--services <service_id>...] [--types <terms_type>...]" description="Check that all declarations are readable by the engine. Allows for a much faster check of declarations, but does not check that the terms are actually accessible." example="npx ota validate declarations --schema-only --services \"Facebook\" --types \"Privacy Policy\"" />}}

{{< refItem name="ota validate declarations --modified" description="Run ota validate only on files that have been modified in Git" example="npx ota validate declarations --modified" />}}

## Linting declarations

{{< refItem name="ota lint [--services <service_id>...]" description="Test the format of declarations' normalisation." example="npx ota lint --services \"Facebook\" \"LinkedIn\"" />}}

{{< refItem name="ota lint --fix [--services <service_id>...]" description="Automatically correct formatting mistakes and ensure that all declarations are standardised" example="npx ota lint --fix" />}}

{{< refItem name="ota lint --modified" description="Run ota lint only on files that have been modified in Git" example="npx ota lint --modified" />}}

## Validating metadata file

{{< refItem name="ota validate metadata" description="Check that the metadata file structure is valid" example="npx ota validate metadata" />}}

## Publishing dataset

{{< refItem name="ota dataset [--file <filename>]" description="Export the versions dataset into a ZIP file and publish it to GitHub releases. The dataset title and the URL of the versions repository are defined in the configuration." example="npx ota dataset --file dataset.zip" />}}

To export the dataset into a ZIP file and publish it on GitHub releases:

{{< refItem name="ota dataset --publish [--file <filename>]" description="Export and publish dataset to GitHub releases" example="GITHUB_TOKEN=ghp_XXXXXXXXX npx ota dataset --publish" />}}

The `GITHUB_TOKEN` can also be defined in a [`.env` file]({{< relref "collections/reference/environment-variables" >}}).

To export, publish the dataset and remove the local copy that was created after it has been uploaded:

{{< refItem name="ota dataset --publish --remove-local-copy [--file <filename>]" description="Export, publish dataset and remove local copy after upload" example="GITHUB_TOKEN=ghp_XXXXXXXXX npx ota dataset --publish --remove-local-copy" />}}

{{< refItem name="ota dataset --schedule [--file <filename>]" description="Schedule export, publishing and local copy removal" example="GITHUB_TOKEN=ghp_XXXXXXXXX npx ota dataset --schedule --publish --remove-local-copy" />}}

## Exposing the collection API

{{< refItem name="ota serve" description="Start the collection Web API server. The Web API will be available under `<http://localhost>:<port>/<basePath>/<apiVersion>/<resource>`. The server port and base path are defined in the configuration." example="npx ota serve" />}}
