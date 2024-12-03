---
title: Metadata
weight: 1
---

# Collection metadata

A collection is defined by the following metadata fields:

| JSON Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `name` | string | ✓ | Display name of the collection (max 3 words) | Platform Governance Archive |
| `id` | string | ✓ | Unique identifier derived from name (acronyms, dash-separated) | `pga` |
| `tagline` | string | ✓ | Concise description of collection topic | Largest global social media |
| `description` | string | - | Detailed context beyond tagline | Comprehensive collection of terms of service from major global social media platforms. |
| `languages` | Array of strings | ✓ | ISO 639 language codes allowed in collection | `["en", "fr", "de"]` |
| `jurisdictions` | Array of strings | ✓ | ISO 3166-2 country codes for covered jurisdictions | `["EU", "global"]` |
| `trackingPeriods` | object | - | Information about tracking schedule | see [Tracking Periods](#tracking-periods) section |
| `dataset` | url | - | URL to released versions dataset | `https://github.com/OpenTermsArchive/demo-versions/releases` |
| `declarations` | url | - | URL to declarations repository | `https://github.com/OpenTermsArchive/demo-declarations` |
| `versions` | url | - | URL to versions repository | `https://github.com/OpenTermsArchive/demo-versions` |
| `snapshots` | url | - | URL to snapshots repository | `https://github.com/OpenTermsArchive/demo-snapshots` |
| `logo` | url | - | URL to collection logo | `https://opentermsarchive.org/images/collections/demo.png` |
| `governance` | object | - | Governance information | see [Governance](#governance) section |
| `donation` | url | - | URL to donation page | `https://opentermsarchive.org/donate` |

## Tracking periods

Information about when and how terms are tracked:

| JSON Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `startDate` | date | - | Date when tracking began | `2023-01-01` |
| `endDate` | date | - | Date when tracking ended/will end. No end date means tracking is ongoing. | `2024-12-31` |
| `schedule` | string | - | Cron expression defining tracking frequency | `0 0 * * *` (daily at midnight) |
| `serverLocation` | string | - | Geographic location of tracking server | `London, GB` |

**Example:**

```yaml
trackingPeriods:
  startDate: 2023-01-01
  endDate: 2024-12-31
  schedule: "0 0 * * *"
  serverLocation: London, GB
```

## Governance

Organizations responsible for collection roles:

| JSON Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `hosts` | Array of objects | - | Organizations hosting the collection | see [Organization](#organization) section |
| `administrators` | Array of objects | - | Organizations managing the collection | see [Organization](#organization) section |
| `curators` | Array of objects | - | Organizations curating the content | see [Organization](#organization) section |
| `maintainers` | Array of objects | - | Organizations maintaining the technical aspects | see [Organization](#organization) section |
| `sponsors` | Array of objects | - | Organizations providing support | see [Organization](#organization) section |

## Organization

Each organization in the governance roles is defined by the following fields:

| JSON Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `name` | string | - | Name of the organization | `Open Terms Archive` |
| `url` | url | - | Website URL of the organization | `https://opentermsarchive.org/` |
| `logo` | url | - | URL to the organization's logo | `https://opentermsarchive.org/images/logo/logo.png` |

**Example:**

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

**Complete metadata example:**

```yaml
id: demo
name: Demo
tagline: Services needed to operate the Open Terms Archive engine
description: This demo collection serves as a reference implementation...
dataset: https://github.com/OpenTermsArchive/demo-versions/releases
declarations: https://github.com/OpenTermsArchive/demo-declarations
versions: https://github.com/OpenTermsArchive/demo-versions
snapshots: https://github.com/OpenTermsArchive/demo-snapshots
logo: https://opentermsarchive.org/images/collections/demo.png
languages: 
  - en
jurisdictions:
  - EU
termsTracked: 100
servicesTracked: 50
trackingPeriods:
  startDate: 2023-01-01
  endDate: 2024-12-31
  schedule: "0 0 * * *"
  serverLocation: EU-WEST-1
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
