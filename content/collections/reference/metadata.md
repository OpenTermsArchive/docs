---
title: Metadata
weight: 1
aliases: /collections/metadata/
---

# Collection metadata

This reference documentation details all available metadata fields that can be specified in a collection's metadata file.

The examples given throughout this reference can be seen in context in the  [complete metadata file](https://github.com/OpenTermsArchive/demo-declarations/blob/main/metadata.yml) and rendered in the [collection page](https://opentermsarchive.org/en/collections/demo/) of the Demo collection.


## Fields

{{< configOption
    name="id"
    type="string"
    description="Unique identifier derived from name (acronyms, dash-separated)."
    example="demo"
    required=true
>}}

{{< configOption
    name="name"
    type="string"
    description="Display name of the collection."
    example="Demo Collection"
    required=true
>}}

{{< configOption
    name="tagline"
    type="string"
    description="Concise description of collection topic."
    example="Services used by Open Terms Archive"
    required=true
>}}

{{< configOption
    name="languages"
    type="array of strings"
    description="List of [ISO 639-1 (two-letter)](https://en.wikipedia.org/wiki/ISO_639) language codes representing languages allowed in the collection."
    example="[en, fr, de]"
    required=true
>}}

{{< configOption
    name="jurisdictions"
    type="array of strings"
    description="List of [ISO 3166-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-2) representing jurisdictions covered by the collection."
    example="[EU]"
    required=true
>}}

{{< configOption
    name="description"
    type="string"
    description="Detailed description of the collection"
    example=`    The **Demo** collection tracks changes to the terms of use of services used by Open Terms Archive.
    
    This provides a reference collection for best practices and enables the Open Terms Archive Core Team to be a user of the software it produces.
    `
    required=false
>}}

{{< configOption
    name="dataset"
    type="uri"
    description="URL to the dataset releases."
    example="https://github.com/OpenTermsArchive/demo-versions/releases"
    required=false
>}}

{{< configOption
    name="declarations"
    type="uri"
    description="URL to the declarations repository."
    example="https://github.com/OpenTermsArchive/demo-declarations"
    required=false
>}}

{{< configOption
    name="versions"
    type="uri"
    description="URL to the versions repository."
    example="https://github.com/OpenTermsArchive/demo-versions"
    required=false
>}}

{{< configOption
    name="snapshots"
    type="uri"
    description="URL to the snapshots repository."
    example="https://github.com/OpenTermsArchive/demo-snapshots"
    required=false
>}}

{{< configOption
    name="donations"
    type="uri"
    description="URL to the donations page."
    example="https://opencollective.com/opentermsarchive"
    required=false
>}}

{{< configOption
    name="logo"
    type="uri"
    description="URL to the collection's logo. Optimized PNG transparent image (minimum width 240px)."
    example="https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png"
    required=false
>}}

{{< configOption
    name="trackingPeriods"
    type="array of objects"
    description="trackingPeriods object, see [TrackingPeriods](#trackingperiods) section."
    required=false
>}}

{{< configOption
    name="governance"
    type="object"
    description="Map of organizations involved in the collection's governance, with organization names as keys governance object, see [Governance](#governance) section."
    required=false
>}}

{{< configOption
    name="i18n"
    type="object"
    description="Internationalization of any of the Metadata properties (except i18n itself) for different language codes"
    example=`    fr:
      name: Démo
      tagline: Services utilisés par Open Terms Archive
      governance:
        Ministry for Europe and Foreign Affairs:
          name: Ministère de l'Europe et des Affaires étrangères
          url: https://www.diplomatie.gouv.fr
    `
    required=false
>}}

---

### TrackingPeriods

{{< configOption
    name="startDate"
    type="date"
    description="The date when tracking started for this period (ISO 8601 format YYYY-MM-DD)."
    example="2023-01-01"
    required=true
>}}

{{< configOption
    name="schedule"
    type="cron-expression"
    description="A [cron expression](https://en.wikipedia.org/wiki/Cron#Cron_expression) that defines the tracking frequency."
    example="0 0 * * *"
    required=true
>}}

{{< configOption
    name="serverLocation"
    type="string"
    description="The geographic location of the tracking server (city name and ISO 3166-2 country code)."
    example="Paris, FR"
    required=true
>}}

{{< configOption
    name="endDate"
    type="date"
    description="The date when tracking ended for this period (ISO 8601 format YYYY-MM-DD). If not specified, tracking is ongoing."
    example="2023-12-01"
    required=false
>}}


---

### Governance

{{< configOption
    name="url"
    type="uri"
    description="URL to the entity's website"
    example="https://opentermsarchive.org/"
    required=false
>}}

{{< configOption
    name="logo"
    type="uri"
    description="URL to the entity's logo. Optimized PNG transparent image (minimum width 240px)."
    example="https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png"
    required=false
>}}

{{< configOption
    name="roles"
    type="array of strings"
    description="Roles of the entity within the governance, see [collection governance](https://docs.opentermsarchive.org/collections/reference/governance/)"
    allowedValues="`host`, `administrator`, `curator`, `maintainer`, `sponsor`"
    example="[host, administrator]"
    required=true
>}}
