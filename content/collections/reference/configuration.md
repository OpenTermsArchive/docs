---
title: Configuration
weight: 3
---

# Configuration options

This reference documentation details all available configuration options that can be specified in a collection's configuration file to configure the Open Terms Archive engine.

As an example, see the [production configuration file](https://github.com/OpenTermsArchive/demo-declarations/blob/main/config/production.json) of the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations).

## Options

{{< refItem
    name="trackingSchedule"
    type="string"
    description="Defines how often the engine should check for changes in terms. Uses standard cron syntax to set the schedule. By default, it runs every 12 hours at minute 30."
    default="30 */12 * * *"
/>}}

{{< refItem
    name="collectionPath"
    type="string"
    description="Path to the collection's directory containing declarations directory and metadata file, relative to the engine execution location"
    example="../collections/demo-declarations"
    default="./"
/>}}

### Recorder

The recorder section manages how versions and snapshots of terms are stored, supporting multiple storage backends.

{{< refItem
    name="recorder.versions.storage"
    type="object"
    description="Configuration for storing versions. Supports Git and MongoDB. See [Storage Repositories](#storage-repositories) for more information."
/>}}

{{< refItem
    name="recorder.snapshots.storage"
    type="object"
    description="Configuration for storing snapshots. Supports Git and MongoDB. See [Storage Repositories](#storage-repositories) for more information."
/>}}

### Fetcher

The fetcher section configures how the engine retrieves documents from the web.

{{< refItem
    name="fetcher.waitForElementsTimeout"
    type="number"
    description="Maximum wait time for elements to appear in a page (milliseconds)."
    default="10000"
/>}}

{{< refItem
    name="fetcher.navigationTimeout"
    type="number"
    description="Maximum wait time for a page to load (milliseconds)."
    default="30000"
/>}}

{{< refItem
    name="fetcher.language"
    type="string"
    description="Language code (ISO 639-1) for request headers."
    default="en"
/>}}

### Notifier

The notifier section sets up how notifications are sent when new versions of terms are recorded.

{{< refItem
    name="notifier.sendInBlue.updatesListId"
    type="string"
    description="SendInBlue contacts list ID of persons to notify on terms updates."
    default="850"
/>}}

{{< refItem
    name="notifier.sendInBlue.updateTemplateId"
    type="string"
    description="SendInBlue email template ID used for updates notifications."
    default="7"
/>}}

### Logger

The logger section configures logging and error notification settings.

{{< refItem
    name="logger.smtp.host"
    type="string"
    description="SMTP server hostname."
    default="smtp-relay.brevo.com"
/>}}

{{< refItem
    name="logger.smtp.port"
    type="number"
    description="SMTP server port."
    default="587"
/>}}

{{< refItem
    name="logger.smtp.username"
    type="string"
    description="Username for SMTP server authentication."
    default="admin@opentermsarchive.org"
/>}}

{{< refItem
    name="logger.sendMailOnError.to"
    type="string"
    description="Email address for error notifications."
    example="admin@example.com"
/>}}

{{< refItem
    name="logger.sendMailOnError.from"
    type="string"
    description="Sender email address for error notifications."
    example="noreply@example.com"
/>}}

{{< refItem
    name="logger.sendMailOnError.sendWarnings"
    type="boolean"
    description="Set to true to also send email in case of warning."
    default="false"
/>}}

{{< refItem
    name="logger.timestampPrefix"
    type="boolean"
    description="Set to false to avoid duplicate timestamps if logs are managed by a process manager."
    default="true"
/>}}

### Reporter

The reporter section manages how issues are reported when terms content is inaccessible, supporting GitHub and GitLab.

{{< refItem
    name="reporter.type"
    type="string"
    description="Type of reporter"
    example="github"
    allowedValues="github, gitlab"
/>}}

{{< refItem
    name="reporter.repositories.declarations"
    type="string"
    description="Repository for creating issues."
    example="OpenTermsArchive/demo-declarations"
/>}}

{{< refItem
    name="reporter.repositories.versions"
    type="string"
    description="Repository for versions."
    example="OpenTermsArchive/demo-versions"
/>}}

{{< refItem
    name="reporter.repositories.snapshots"
    type="string"
    description="Repository for snapshots."
    example="OpenTermsArchive/demo-snapshots"
/>}}

{{< refItem
    name="reporter.baseURL"
    type="string"
    description="Base URL for GitLab (if applicable)."
    example="https://gitlab.example.com"
/>}}

{{< refItem
    name="reporter.apiBaseURL"
    type="string"
    description="API base URL for GitLab (if applicable)."
    example="https://api.gitlab.example.com"
/>}}

### Dataset

The dataset section configures how datasets are published. Datasets can be published to GitHub releases, GitLab releases, and/or data.gouv.fr. If both GitHub and GitLab tokens are configured, GitHub takes precedence.

{{< refItem
    name="dataset.title"
    type="string"
    description="Title of the dataset."
    example="Contrib collection dataset"
    required=true
/>}}

{{< refItem
    name="dataset.versionsRepositoryURL"
    type="string"
    description="Repository URL for dataset releases. Also used to generate the dataset README."
    example="https://github.com/OpenTermsArchive/contrib-versions"
    required=true
/>}}

{{< refItem
    name="dataset.publishingSchedule"
    type="string"
    description="Cron expression for dataset publishing. By default, it runs every Monday at 8:30 AM. If publishing to data.gouv.fr, remember to update `dataset.datagouv.frequency` to match the actual publishing frequency."
    default="30 8 * * MON"
/>}}

#### data.gouv.fr publishing

The data.gouv.fr section configures publishing to the French government's open data platform. Either `datasetId` or `organizationIdOrSlug` must be configured.

{{< refItem
    name="dataset.datagouv.datasetId"
    type="string"
    description="ID of an existing dataset on data.gouv.fr. Use this to publish to an existing dataset. Either this or `organizationIdOrSlug` is required."
    example="6914a64b17a0a91bb0a61222"
    required=true
/>}}

{{< refItem
    name="dataset.datagouv.organizationIdOrSlug"
    type="string"
    description="ID or slug of the organization on data.gouv.fr. Use this to automatically create and publish a dataset. The dataset will be created with the title from `dataset.title` if it doesn't exist. Either this or `datasetId` is required."
    example="open-terms-archive"
    required=true
/>}}

{{< refItem
    name="dataset.datagouv.frequency"
    type="string"
    description="Update frequency of the dataset. Used when creating or updating a dataset on data.gouv.fr. See [data.gouv.fr API](https://www.data.gouv.fr/api/1/datasets/frequencies/) for all allowed values."
    example="weekly"
    required=true
/>}}

{{< refItem
    name="dataset.datagouv.useDemo"
    type="boolean"
    description="Set to `true` to use the demo.data.gouv.fr environment for testing."
    default="false"
/>}}

### Collection API

The collection API section sets the parameters for the API server.

{{< refItem
    name="collection-api.api.port"
    type="number"
    description="Port number for the API server."
    example="8080"
    required=true
/>}}

{{< refItem
    name="collection-api.api.basePath"
    type="string"
    description="Base path for API endpoints."
    example="/collection-api"
    required=true
/>}}

---

## Storage Repositories

The storage repositories section set the parameters for supported backends for storing versions and snapshots, supporting Git and MongoDB.

{{< refItem
    name="storage.type"
    type="string"
    description="Type of storage backend."
    default="git"
    allowedValues="git, mongo"
/>}}

### Git

The Git storage configuration allows to store versions in a Git repository.

{{< refItem
    name="storage.git.path"
    type="string"
    description="Path to the versions database directory."
    default="./data/versions"
/>}}

{{< refItem
    name="storage.git.publish"
    type="boolean"
    description="Boolean to push changes to the origin."
    default="false"
/>}}

{{< refItem
    name="storage.git.snapshotIdentiferTemplate"
    type="string"
    description="Template for snapshot ID reference. `%SNAPSHOT_ID` will be replaced with the actual snapshot ID."
    default="./data/snapshots/%SNAPSHOT_ID"
/>}}

{{< refItem
    name="storage.git.author.name"
    type="string"
    description="Author name for changes."
    default="Open Terms Archive Bot"
/>}}

{{< refItem
    name="storage.git.author.email"
    type="string"
    description="Author email for changes."
    default="bot@opentermsarchive.org"
/>}}

### MongoDB

The MongoDB storage configuration allows to store versions in a MongoDB database.

{{< refItem
    name="storage.mongo.connectionURI"
    type="string"
    description="MongoDB connection URI."
    default="mongodb://127.0.0.1:27017"
/>}}

{{< refItem
    name="storage.mongo.database"
    type="string"
    description="Database name."
    default="open-terms-archive"
/>}}

{{< refItem
    name="storage.mongo.collection"
    type="string"
    description="Collection name."
    default="snapshots"
/>}}
