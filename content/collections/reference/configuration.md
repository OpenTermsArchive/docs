---
title: Configuration
weight: 3
---

# Configuration Reference

This document provides a detailed reference for configuring the Open Terms Archive engine. The configuration is defined in a JSON file, in the `config` folder, and can have environment-specific configurations (`development.json`, `production.json`, …).

This reference should help you configure the Open Terms Archive engine according to your needs.

## Configuration Options

#### General

The general section covers basic settings that define the overall behavior of the engine, such as scheduling and paths.

{{< configOption name="trackingSchedule" type="string" description="The cron expression to define when the tracking of terms should occur." example="0 0 * * * for midnight every day." default="0 0 * * *" >}}

{{< configOption name="declarationsPath" type="string" description="Path to the directory containing service declarations and associated filters." example="./declarations" default="./declarations" >}}

#### Recorder

The recorder section manages how versions and snapshots of terms are stored, supporting multiple storage backends.

{{< configOption name="recorder.versions.storage" type="object" description="Configuration for storing versions. Supports Git and MongoDB. See [Storage Repositories](#storage-repositories) for more information." >}}

{{< configOption name="recorder.snapshots.storage" type="object" description="Configuration for storing snapshots. Supports Git and MongoDB. See [Storage Repositories](#storage-repositories) for more information." >}}

#### Fetcher

The fetcher section configures how the engine retrieves documents from the web, including timeouts and language settings.

{{< configOption name="fetcher.waitForElementsTimeout" type="number" description="Maximum wait time for elements to appear in a page (milliseconds)." example="30000" default="30000" >}}

{{< configOption name="fetcher.navigationTimeout" type="number" description="Maximum wait time for a page to load (milliseconds)." example="60000" default="60000" >}}

{{< configOption name="fetcher.language" type="string" description="Language code (ISO 639-1) for request headers." example="en" default="en" >}}

#### Notifier

The notifier section sets up how notifications are sent when new versions of terms are recorded.

{{< configOption name="notifier.sendInBlue.updatesListId" type="string" description="SendInBlue contacts list ID of persons to notify on terms updates." example="12345" default="12345" >}}

{{< configOption name="notifier.sendInBlue.updateTemplateId" type="string" description="SendInBlue email template ID used for updates notifications." example="67890" default="67890" >}}

#### Logger

The logger section configures logging and error notification settings, including SMTP server details.

{{< configOption name="logger.smtp.host" type="string" description="SMTP server hostname." example="smtp.example.com" default="smtp.example.com" >}}

{{< configOption name="logger.smtp.username" type="string" description="Username for SMTP server authentication." example="user@example.com" default="user@example.com" >}}

{{< configOption name="logger.sendMailOnError.to" type="string" description="Email address for error notifications." example="admin@example.com" default="admin@example.com" >}}

{{< configOption name="logger.sendMailOnError.from" type="string" description="Sender email address for error notifications." example="noreply@example.com" default="noreply@example.com" >}}

{{< configOption name="logger.sendMailOnError.sendWarnings" type="boolean" description="Set to true to also send email in case of warning." example="true" default="true" >}}

{{< configOption name="logger.timestampPrefix" type="boolean" description="Set to false to avoid duplicate timestamps if logs are managed by a process manager." example="false" default="false" >}}

#### Reporter

The reporter section manages how issues are reported when terms content is inaccessible, supporting GitHub and GitLab.

{{< configOption name="reporter.type" type="string" description="Type of reporter ('github' or 'gitlab')." example="github" default="github" >}}

{{< configOption name="reporter.repositories.declarations" type="string" description="Repository for creating issues." example="OpenTermsArchive/declarations" default="OpenTermsArchive/declarations" >}}

{{< configOption name="reporter.repositories.versions" type="string" description="Repository for versions." example="OpenTermsArchive/versions" default="OpenTermsArchive/versions" >}}

{{< configOption name="reporter.repositories.snapshots" type="string" description="Repository for snapshots." example="OpenTermsArchive/snapshots" default="OpenTermsArchive/snapshots" >}}

{{< configOption name="reporter.baseURL" type="string" description="Base URL for GitLab (if applicable)." example="https://gitlab.example.com" default="https://gitlab.example.com" >}}

{{< configOption name="reporter.apiBaseURL" type="string" description="API base URL for GitLab (if applicable)." example="https://api.gitlab.example.com" default="https://api.gitlab.example.com" >}}

#### Dataset

The dataset section configures how datasets are published, including scheduling and repository details.

{{< configOption name="dataset.title" type="string" description="Title of the dataset." example="Open Terms Archive Dataset" default="Open Terms Archive Dataset" >}}

{{< configOption name="dataset.versionsRepositoryURL" type="string" description="Repository URL for dataset releases." example="https://github.com/OpenTermsArchive/versions" default="https://github.com/OpenTermsArchive/versions" >}}

{{< configOption name="dataset.publishingSchedule" type="string" description="Cron expression for dataset publishing." example="0 0 1 * *" default="0 0 1 * *" >}}

#### Collection API

The collection API section sets the parameters for the API server, including port and base path.

{{< configOption name="api.port" type="number" description="Port number for the API server." example="8080" default="8080" >}}

{{< configOption name="api.basePath" type="string" description="Base path for API endpoints." example="/api" default="/api" >}}

## Schedules

Schedules are defined using Cron expressions to automate tasks like tracking and dataset publishing.

Examples:
- `0 0 * * *`: Midnight every day.
- `0 */6 * * *`: Every 6 hours.

## Storage Repositories

The storage repositories section details the supported backends for storing versions and snapshots, including Git and MongoDB.

#### Git

The Git storage configuration allows you to store versions in a Git repository.

{{< configOption name="storage.git.path" type="string" description="Path to the versions database directory." example="versions" default="versions" >}}

{{< configOption name="storage.git.publish" type="boolean" description="Boolean to push changes to the origin." example="true" default="true" >}}

{{< configOption name="storage.git.snapshotIdentiferTemplate" type="string" description="Template for snapshot ID reference." example="snapshot-%SNAPSHOT_ID" default="snapshot-%SNAPSHOT_ID" >}}

{{< configOption name="storage.git.author.name" type="string" description="Author name for changes." example="Open Terms Archive" default="Open Terms Archive" >}}

{{< configOption name="storage.git.author.email" type="string" description="Author email for changes." example="contact@opentermsarchive.org" default="contact@opentermsarchive.org" >}}

### MongoDB

The MongoDB storage configuration allows you to store versions in a MongoDB database.

{{< configOption name="storage.mongo.connectionURI" type="string" description="MongoDB connection URI." example="mongodb://localhost:27017" default="mongodb://localhost:27017" >}}

{{< configOption name="storage.mongo.database" type="string" description="Database name." example="ota" default="ota" >}}

{{< configOption name="storage.mongo.collection" type="string" description="Collection name." example="snapshots" default="snapshots" >}}

## Full example configuration

Below is a full example configuration:

```json
{
  "trackingSchedule": "0 0 * * *",
  "declarationsPath": "./declarations",
  "recorder": {
    "versions": {
      "storage": {
        "git": {
          "path": "versions",
          "publish": true,
          "snapshotIdentiferTemplate": "snapshot-%SNAPSHOT_ID",
          "author": {
            "name": "Open Terms Archive",
            "email": "contact@opentermsarchive.org"
          }
        }
      }
    },
    "snapshots": {
      "storage": {
        "mongo": {
          "connectionURI": "mongodb://localhost:27017",
          "database": "ota",
          "collection": "snapshots"
        }
      }
    }
  },
  "fetcher": {
    "waitForElementsTimeout": 30000,
    "navigationTimeout": 60000,
    "language": "en"
  },
  "notifier": {
    "sendInBlue": {
      "updatesListId": "12345",
      "updateTemplateId": "67890"
    }
  },
  "logger": {
    "smtp": {
      "host": "smtp.example.com",
      "username": "user@example.com"
    },
    "sendMailOnError": {
      "to": "admin@example.com",
      "from": "noreply@example.com",
      "sendWarnings": true
    },
    "timestampPrefix": false
  },
  "reporter": {
    "type": "github",
    "repositories": {
      "declarations": "OpenTermsArchive/declarations",
      "versions": "OpenTermsArchive/versions",
      "snapshots": "OpenTermsArchive/snapshots"
    },
    "baseURL": "https://gitlab.example.com",
    "apiBaseURL": "https://api.gitlab.example.com"
  },
  "dataset": {
    "title": "Open Terms Archive Dataset",
    "versionsRepositoryURL": "https://github.com/OpenTermsArchive/versions",
    "publishingSchedule": "0 0 1 * *"
  },
  "api": {
    "port": 8080,
    "basePath": "/api"
  }
}
```
