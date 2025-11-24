---
title: Publish to data.gouv.fr
weight: 6
---

# How to publish datasets to data.gouv.fr

This guide explains how to configure your collection to automatically publish datasets to [data.gouv.fr](https://www.data.gouv.fr/), the French government's open data platform.

## Prerequisites

- A [data.gouv.fr](https://www.data.gouv.fr/) account
- An API key from your data.gouv.fr account settings
- Either an existing dataset or an organization where you can create datasets

## Choose your approach

There are two ways to publish datasets to data.gouv.fr:

### Option 1: Automatically create a dataset in an organization

This approach is suitable when you want the system to automatically create and manage the dataset within your organization.

1. Find your organization on [data.gouv.fr](https://www.data.gouv.fr/) (or [demo.data.gouv.fr](https://demo.data.gouv.fr/) for testing)
2. Copy the organization ID or slug from the URL (e.g., `open-terms-archive`)
3. Add it to your configuration at `dataset.datagouv.organizationIdOrSlug`
4. Set `dataset.title` in your configuration (this will be used as the dataset title)

The dataset will be automatically created if it doesn't already exist in the organization.

### Option 2: Use an existing dataset

This approach is suitable when you already have a dataset created on data.gouv.fr and want to update it automatically.

1. Create a dataset on [data.gouv.fr](https://www.data.gouv.fr/) (or [demo.data.gouv.fr](https://demo.data.gouv.fr/) for testing)
2. Copy the dataset ID from the Informations tab on the dataset page (e.g., `6914a64b17a0a61222`)
3. Add it to your configuration at `dataset.datagouv.datasetId`

## Configure your collection

### 1. Add configuration settings

In your collection's configuration file (e.g., `config/production.json`), add the `datagouv` settings under the `dataset` section:

**For Option 1 (automatic creation):**

```json
{
  "dataset": {
    "title": "<collection_name> collection dataset",
    "datagouv": {
      "organizationIdOrSlug": "open-terms-archive"
    }
  }
}
```

**For Option 2 (existing dataset):**

```json
{
  "dataset": {
    "title": "<collection_name> collection dataset",
    "datagouv": {
      "datasetId": "6914a64b17a0a91bb0a61222"
    }
  }
}
```

### 3. Configure for testing (optional)

If you want to test with the demo environment first, add `useDemo`:

```json
{
  "dataset": {
    "title": "<collection_name> collection dataset",
    "datagouv": {
      "organizationIdOrSlug": "open-terms-archive",
      "useDemo": true
    }
  }
}
```

### 4. Set the API key

Create a `.env` file at the root of your collection repository (if it doesn't already exist) and add your data.gouv.fr API key:

```
OTA_ENGINE_DATAGOUV_API_KEY=your_api_key_here
```

## Test your configuration

You can test your configuration by manually publishing a dataset:

```bash
npx ota dataset --publish
```

This will create and publish a dataset to data.gouv.fr. Check the output to verify the dataset was published successfully.

## Set up automatic publishing

To automatically publish datasets on a schedule, use the `--schedule` flag:

```bash
npx ota dataset --schedule --publish --remove-local-copy
```

This will publish datasets according to the schedule defined in your configuration (by default, every Monday at 8:30 AM).

## Publishing to multiple platforms

data.gouv.fr publishing can be used alongside GitHub or GitLab releases. Simply configure both platforms and datasets will be published to all configured platforms simultaneously.

See the [configuration reference]({{< relref "collections/reference/configuration#datagouv-fr-publishing" >}}) for all available options.
