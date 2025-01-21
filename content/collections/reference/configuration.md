---
title: Configuration
weight: 2
---

# Configuration options

This reference documentation details all available configuration options that can be specified in a collection's configuration file to configure the Open Terms Archive engine.

As an example, see the [production configuration file](https://github.com/OpenTermsArchive/demo-declarations/blob/main/config/production.json) of the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations).

## Options

{{< configOption
    name="trackingSchedule"
    type="string"
    description="Defines how often the engine should check for changes in terms. Uses standard cron syntax to set the schedule."
    default="`30 */12 * * *` (runs every 12 hours at minute 30)"
>}}

{{< configOption
    name="collectionPath"
    type="string"
    description="Path to the collection's directory containing declarations directory and metadata file, relative to the engine execution location"
    example="`../collections/demo-declarations`"
    default="`./`"
>}}

### Recorder

The recorder section manages how versions and snapshots of terms are stored, supporting multiple storage backends.

{{< configOption
    name="recorder.versions.storage"
    type="object"
    description="Configuration for storing versions. Supports Git and MongoDB. See [Storage Repositories](#storage-repositories) for more information."
>}}

{{< configOption
    name="recorder.snapshots.storage"
    type="object"
    description="Configuration for storing snapshots. Supports Git and MongoDB. See [Storage Repositories](#storage-repositories) for more information."
>}}

### Fetcher

The fetcher section configures how the engine retrieves documents from the web.

{{< configOption
    name="fetcher.waitForElementsTimeout"
    type="number"
    description="Maximum wait time for elements to appear in a page (milliseconds)."
    default="`10000`"
>}}

{{< configOption
    name="fetcher.navigationTimeout"
    type="number"
    description="Maximum wait time for a page to load (milliseconds)."
    default="`30000`"
>}}

{{< configOption
    name="fetcher.language"
    type="string"
    description="Language code (ISO 639-1) for request headers."
    default="`en`"
>}}

### Notifier

The notifier section sets up how notifications are sent when new versions of terms are recorded.

{{< configOption
    name="notifier.sendInBlue.updatesListId"
    type="string"
    description="SendInBlue contacts list ID of persons to notify on terms updates."
    default="`850`"
>}}

{{< configOption
    name="notifier.sendInBlue.updateTemplateId"
    type="string"
    description="SendInBlue email template ID used for updates notifications."
    default="`7`"
>}}

### Logger

The logger section configures logging and error notification settings.

{{< configOption
    name="logger.smtp.host"
    type="string"
    description="SMTP server hostname."
    default="`smtp-relay.sendinblue.com`"
>}}

{{< configOption
    name="logger.smtp.username"
    type="string"
    description="Username for SMTP server authentication."
    default="`admin@opentermsarchive.org`"
>}}

{{< configOption
    name="logger.sendMailOnError.to"
    type="string"
    description="Email address for error notifications."
    example="`admin@example.com`"
>}}

{{< configOption
    name="logger.sendMailOnError.from"
    type="string"
    description="Sender email address for error notifications."
    example="`noreply@example.com`"
>}}

{{< configOption
    name="logger.sendMailOnError.sendWarnings"
    type="boolean"
    description="Set to true to also send email in case of warning."
    default="`false`"
>}}

{{< configOption
    name="logger.timestampPrefix"
    type="boolean"
    description="Set to false to avoid duplicate timestamps if logs are managed by a process manager."
    default="`true`"
>}}

### Reporter

The reporter section manages how issues are reported when terms content is inaccessible, supporting GitHub and GitLab.

{{< configOption
    name="reporter.type"
    type="string"
    description="Type of reporter"
    example="`github`"
    allowedValues="`github`, `gitlab`"
>}}

{{< configOption
    name="reporter.repositories.declarations"
    type="string"
    description="Repository for creating issues."
    example="`OpenTermsArchive/demo-declarations`"
>}}

{{< configOption
    name="reporter.repositories.versions"
    type="string"
    description="Repository for versions."
    example="`OpenTermsArchive/demo-versions`"
>}}

{{< configOption
    name="reporter.repositories.snapshots"
    type="string"
    description="Repository for snapshots."
    example="`OpenTermsArchive/demo-snapshots`"
>}}

{{< configOption
    name="reporter.baseURL"
    type="string"
    description="Base URL for GitLab (if applicable)."
    example="`https://gitlab.example.com`"
>}}

{{< configOption
    name="reporter.apiBaseURL"
    type="string"
    description="API base URL for GitLab (if applicable)."
    example="`https://api.gitlab.example.com`"
>}}

### Dataset

The dataset section configures how datasets are published.

{{< configOption
    name="dataset.title"
    type="string"
    description="Title of the dataset."
    default="`sandbox`"
>}}

{{< configOption
    name="dataset.versionsRepositoryURL"
    type="string"
    description="Repository URL for dataset releases."
    default="`https://github.com/OpenTermsArchive/sandbox`"
>}}

{{< configOption
    name="dataset.publishingSchedule"
    type="string"
    description="Cron expression for dataset publishing."
    default="`30 8 * * MON` (runs every Monday at 8:30 AM)"
>}}

### Collection API

The collection API section sets the parameters for the API server.

{{< configOption
    name="collection-api.api.port"
    type="number"
    description="Port number for the API server."
    example="`8080`"
    required=true
>}}

{{< configOption
    name="collection-api.api.basePath"
    type="string"
    description="Base path for API endpoints."
    example="`/collection-api`"
    required=true
>}}

---

## Storage Repositories

The storage repositories section set the parameters for supported backends for storing versions and snapshots, supporting Git and MongoDB.

{{< configOption
    name="storage.type"
    type="string"
    description="Type of storage backend."
    default="`git`"
    allowedValues="`git`, `mongo`"
>}}

### Git

The Git storage configuration allows to store versions in a Git repository.

{{< configOption
    name="storage.git.path"
    type="string"
    description="Path to the versions database directory."
    default="`./data/versions`"
>}}

{{< configOption
    name="storage.git.publish"
    type="boolean"
    description="Boolean to push changes to the origin."
    default="`false`"
>}}

{{< configOption
    name="storage.git.snapshotIdentiferTemplate"
    type="string"
    description="Template for snapshot ID reference. `%SNAPSHOT_ID` will be replaced with the actual snapshot ID."
    default="`./data/snapshots/%SNAPSHOT_ID`"
>}}

{{< configOption
    name="storage.git.author.name"
    type="string"
    description="Author name for changes."
    default="`Open Terms Archive Bot`"
>}}

{{< configOption
    name="storage.git.author.email"
    type="string"
    description="Author email for changes."
    default="`bot@opentermsarchive.org`"
>}}

### MongoDB

The MongoDB storage configuration allows to store versions in a MongoDB database.

{{< configOption
    name="storage.mongo.connectionURI"
    type="string"
    description="MongoDB connection URI."
    default="`mongodb://127.0.0.1:27017`"
>}}

{{< configOption
    name="storage.mongo.database"
    type="string"
    description="Database name."
    default="`open-terms-archive`"
>}}

{{< configOption
    name="storage.mongo.collection"
    type="string"
    description="Collection name."
    default="`snapshots`"
>}}
