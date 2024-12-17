---
title: Metadata
weight: 1
---

# Collection metadata

A collection is defined by the following metadata.

## Required fields

{{< configOption name="name" type="string" description="Display name of the collection (max 3 words)" example="Platform Governance Archive" >}}

{{< configOption name="id" type="string" description="Unique identifier derived from name (acronyms, dash-separated)" example="pga" >}}

{{< configOption name="tagline" type="string" description="Concise description of collection topic" example="Largest global social media" >}}

{{< configOption name="languages" type="Array of strings" description="[ISO 639 language codes](https://en.wikipedia.org/wiki/ISO_639) allowed in collection" example="[en, fr, de]" >}}

{{< configOption name="jurisdictions" type="Array of strings" description="[ISO 3166-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-2) for covered jurisdictions" example="[EU]" >}}

## Additional fields

{{< configOption name="description" type="string" description="Detailed context beyond tagline" example="Comprehensive collection of terms of service from major global social media platforms." >}}

{{< configOption name="dataset" type="url" description="URL to released versions dataset" example="https://github.com/OpenTermsArchive/demo-versions/releases" >}}

{{< configOption name="declarations" type="url" description="URL to declarations repository" example="https://github.com/OpenTermsArchive/demo-declarations" >}}

{{< configOption name="versions" type="url" description="URL to versions repository" example="https://github.com/OpenTermsArchive/demo-versions" >}}

{{< configOption name="snapshots" type="url" description="URL to snapshots repository" example="https://github.com/OpenTermsArchive/demo-snapshots" >}}

{{< configOption name="logo" type="url" description="URL to the collection's logo. Optimized PNG transparent image (min width 240px)" example="https://opentermsarchive.org/images/collections/demo.png" >}}

{{< configOption name="donation" type="url" description="URL to donation page" example="https://opencollective.com/opentermsarchive" >}}

{{< configOption name="trackingPeriods" type="array of tracking periods objects" description="see [Tracking periods](#tracking-periods) section" >}}

{{< configOption name="governance" type="governance object" description="see [Governance](#governance) section" >}}

### Tracking periods

{{< configOption name="startDate" type="date" description="The date when tracking started (ISO 8601 format: YYYY-MM-DD)" example="2023-01-01" >}}

{{< configOption name="endDate" type="date" description="The date when tracking ended or will end. If not specified, tracking is ongoing." example="2024-12-31" >}}

{{< configOption name="schedule" type="string" description="A [cron expression](https://en.wikipedia.org/wiki/Cron#Cron_expression) that defines the tracking frequency" example="0 0 * * *" >}}

{{< configOption name="serverLocation" type="string" description="The geographic location of the tracking server (city name, ISO 3166-2 country code)" example="London, GB" >}}

### Governance

{{< configOption name="hosts" type="Array of organizations objects" description="Organizations hosting the collection" >}}

{{< configOption name="administrators" type="Array of organizations objects" description="Organizations managing the collection" >}}

{{< configOption name="curators" type="Array of organizations objects" description="Organizations curating the content" >}}

{{< configOption name="maintainers" type="Array of organizations objects" description="Organizations maintaining the technical aspects" >}}

{{< configOption name="sponsors" type="Array of organizations objects" description="Organizations providing support" >}}

Each organization in the governance roles is defined by the following fields:

{{< configOption name="name" type="string" description="Name of the organization" example="Open Terms Archive" >}}

{{< configOption name="url" type="url" description="Website URL of the organization (optional)" example="https://opentermsarchive.org/" >}}

{{< configOption name="logo" type="url" description="URL to the organization's logo. Optimized PNG transparent image (min width 240px) (optional)" example="https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png" >}}

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
