---
title: Metadata
weight: 1
---

# Collection metadata

A collection is defined by the following metadata.

## Required fields

| Field | Type | Description |
|----------------|-----------------|---------------------------------------|
| `name` | string | Display name of the collection (max 3 words) |
| `id` | string | Unique identifier derived from name (acronyms, dash-separated) |
| `tagline` | string | Concise description of collection topic |
| `languages` | Array of strings| [ISO 639 language codes](https://en.wikipedia.org/wiki/ISO_639) allowed in collection |
| `jurisdictions`| Array of strings| [ISO 3166-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-2) for covered jurisdictions |

Example:

```yaml
name: Platform Governance Archive
id: pga
tagline: Largest global social media
languages: [en, fr, de]
jurisdictions: [EU]
```

## Additional fields

Additional fields are optional but highly recommended to facilitate better discovery, comprehension, and utilization of the collection.

| Field | Type | Description |
|----------------|-----------------|---------------------------------------|
| `description` | string | Detailed context beyond tagline |
| `dataset` | url | URL to released versions dataset |
| `declarations` | url | URL to declarations repository |
| `versions` | url | URL to versions repository |
| `snapshots` | url | URL to snapshots repository |
| `logo` | url | URL to the collection's logo. Optimized PNG transparent image (min width 240px) |
| `donation` | url | URL to donation page |
| `trackingPeriods`| array of tracking periods objects | see [Tracking periods](#tracking-periods) section |
| `governance` | governance object | see [Governance](#governance) section |

Example:

```yaml
description: Comprehensive collection of terms of service from major global social media platforms.
dataset: https://github.com/OpenTermsArchive/demo-versions/releases
declarations: https://github.com/OpenTermsArchive/demo-declarations
versions: https://github.com/OpenTermsArchive/demo-versions
snapshots: https://github.com/OpenTermsArchive/demo-snapshots
logo: https://opentermsarchive.org/images/collections/demo.png
donation: https://opencollective.com/opentermsarchive
```

### Tracking periods

Information about when and how terms are tracked:

| Field | Type | Description |
|---------------|--------|--------------------------------------------|
| `startDate` | date ([ISO 8601 format: YYYY-MM-DD](https://en.wikipedia.org/wiki/ISO_8601)) | The date when tracking started |
| `endDate` | date ([ISO 8601 format: YYYY-MM-DD](https://en.wikipedia.org/wiki/ISO_8601)) | The date when tracking ended or will end. If not specified, tracking is ongoing. |
| `schedule` | string | A [cron expression](https://en.wikipedia.org/wiki/Cron#Cron_expression) that defines the tracking frequency |
| `serverLocation`| string (city name, [ISO 3166-2 country code](https://en.wikipedia.org/wiki/ISO_3166-2)) | The geographic location of the tracking server |

Example:

```yaml
trackingPeriods:
  - startDate: 2023-01-01
    endDate: 2024-12-31
    schedule: "0 0 * * *"
    serverLocation: London, GB
```

### Governance

Organizations responsible for collection roles:

| Field | Type | Description |
|---------------|-----------------|----------------------------------------|
| `hosts` | Array of organizations objects| Organizations hosting the collection |
| `administrators`| Array of organizations objects| Organizations managing the collection |
| `curators` | Array of organizations objects| Organizations curating the content |
| `maintainers` | Array of organizations objects| Organizations maintaining the technical aspects |
| `sponsors` | Array of organizations objects| Organizations providing support |

Each organization in the governance roles is defined by the following fields:

| Field | Type | Description |
|---------------|--------|-------------------------------------------|
| `name` | string | Name of the organization |
| `url` | url | Website URL of the organization (optional) |
| `logo` | url | URL to the organization's logo. Optimized PNG transparent image (min width 240px) (optional) |

Example:

```yaml
governance:
  administrators:
    - name: Open Terms Archive
      url: https://opentermsarchive.org/
      logo: https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png
  curators: []
  maintainers: []
  hosts: []
  sponsors: []
```

## Complete metadata example

```yaml
id: demo
name: Demo
tagline: Services needed to operate the Open Terms Archive engine
description: This demo collection serves as a reference implementation…
dataset: https://github.com/OpenTermsArchive/demo-versions/releases
declarations: https://github.com/OpenTermsArchive/demo-declarations
versions: https://github.com/OpenTermsArchive/demo-versions
snapshots: https://github.com/OpenTermsArchive/demo-snapshots
logo: https://opentermsarchive.org/images/collections/demo.png
donation: https://opencollective.com/opentermsarchive
languages: [en]
jurisdictions: [EU]
trackingPeriods:
  - startDate: 2023-01-01
    endDate: 2024-12-31
    schedule: "0 0 * * *"
    serverLocation: London, GB
governance:
  hosts: 
    - name: Ministry for Europe and Foreign Affairs
      url: https://www.diplomatie.gouv.fr/en/
      logo: https://opentermsarchive.org/images/contributors/meae.png
  administrators:
    - name: Open Terms Archive
      url: https://opentermsarchive.org/
      logo: https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png
  curators:
    - name: Open Terms Archive
      url: https://opentermsarchive.org/
      logo: https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png
  maintainers:
    - name: Open Terms Archive
      url: https://opentermsarchive.org/
      logo: https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png
  sponsors: 
    - name: Ministry for Europe and Foreign Affairs
      url: https://www.diplomatie.gouv.fr/en/
      logo: https://opentermsarchive.org/images/contributors/meae.png
```
