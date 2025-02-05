---
title: Metadata
weight: 1
aliases: /collections/metadata/
---

# Collection metadata

This reference documentation details all available metadata fields that can be specified in a collection's metadata file.

As an example, see the [complete metadata file](https://github.com/OpenTermsArchive/demo-declarations/blob/main/metadata.yml) of the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations).


## Fields

{{< configOption
    name="id"
    type="string"
    description="Unique identifier derived from name (acronyms, dash-separated)."
    example="`pga`"
    required=true
>}}

{{< configOption
    name="name"
    type="string"
    description="Display name of the collection (max 3 words)."
    example="`Platform Governance Archive`"
    required=true
>}}

{{< configOption
    name="tagline"
    type="string"
    description="Concise description of collection topic."
    example="`Major global social media services`"
    required=true
>}}

{{< configOption
    name="languages"
    type="Array of strings"
    description="[ISO 639 language codes](https://en.wikipedia.org/wiki/ISO_639) allowed in collection."
    example="`[en, fr, de]`"
    required=true
>}}

{{< configOption
    name="jurisdictions"
    type="Array of strings"
    description="[ISO 3166-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-2) for covered jurisdictions."
    example="`[EU]`"
    required=true
>}}

{{< configOption
    name="description"
    type="string"
    description="Detailed description of the collection."
    example=`The **Platform Governance Archive** (PGA) collection tracks the terms of major global social media services.

This data is maintained and analysed by the [Platform Governance Archive](https://www.platformgovernancearchive.org/) at the Universität Bremen's [Center for Media Communication and Information Research (ZeMKI)](https://www.uni-bremen.de/zemki).

This initiative offers researchers, journalists and citizens the tools to analyze how platforms structure and regulate communication and interaction in our societies.

It also aims to promote greater transparency and accountability of these powerful digital services.`
>}}
  
{{< configOption
    name="dataset"
    type="url"
    description="URL to released versions dataset."
    example="`https://github.com/OpenTermsArchive/pga-versions/releases`"
>}}

{{< configOption
    name="declarations"
    type="url"
    description="URL to declarations repository."
    example="`https://github.com/OpenTermsArchive/pga-declarations`"
>}}

{{< configOption
    name="versions"
    type="url"
    description="URL to versions repository."
    example="`https://github.com/OpenTermsArchive/pga-versions`"
>}}

{{< configOption
    name="snapshots"
    type="url"
    description="URL to snapshots repository."
    example="`https://github.com/OpenTermsArchive/pga-snapshots`"
>}}

{{< configOption
    name="logo"
    type="url"
    description="URL to the collection's logo. Optimized PNG transparent image (min width 240px)."
    example="`https://opentermsarchive.org/images/collections/pga.png`"
>}}

{{< configOption
    name="donations"
    type="url"
    description="URL to the donations page."
    example="`https://opencollective.com/opentermsarchive`"
>}}

{{< configOption
    name="trackingPeriods"
    type="array of tracking periods objects"
    description="Tracking periods object, see [Tracking periods](#tracking-periods) section."
>}}

{{< configOption
    name="governance"
    type="array of entity objects"
    description="Entity object, see [Entity](#entity) section."
>}}

---

### Tracking periods

{{< configOption
    name="startDate"
    type="date"
    description="The date when tracking started (ISO 8601 format: YYYY-MM-DD)."
    example="`2023-01-01`"
    required=true
>}}

{{< configOption
    name="endDate"
    type="date"
    description="The date when tracking ended or will end. If not specified, tracking is ongoing."
    example="`2024-12-31`"
>}}

{{< configOption
    name="schedule"
    type="string"
    description="A [cron expression](https://en.wikipedia.org/wiki/Cron#Cron_expression) that defines the tracking frequency."
    example="`0 0 * * *`"
    required=true
>}}

{{< configOption
    name="serverLocation"
    type="string"
    description="The geographic location of the tracking server (city name, ISO 3166-2 country code)."
    example="`London, GB`"
    required=true
>}}

---

### Entity

{{< configOption
    name="name"
    type="string"
    description="Name of the organization."
    example="`Open Terms Archive`"
    required=true
>}}

{{< configOption
    name="url"
    type="url"
    description="Website URL of the organization."
    example="`https://opentermsarchive.org/`"
>}}

{{< configOption
    name="logo"
    type="url"
    description="URL to the organization's logo. Optimized PNG transparent image (min width 240px)."
    example="`https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png`"
>}}

{{< configOption
    name="roles"
    type="string"
    description="Roles of the entity within the governance, see [collection governance]({{< relref \"collections/reference/governance\" >}})."
    allowedValues="`host`, `administrator`, `curator`, `maintainer`, `sponsor`"
    required=true
>}}
