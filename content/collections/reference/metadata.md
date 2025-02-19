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
    example="pga"
    required=true
>}}

{{< configOption
    name="name"
    type="string"
    description="Display name of the collection."
    example="Platform Governance Archive"
    required=true
>}}

{{< configOption
    name="tagline"
    type="string"
    description="Concise description of collection topic."
    example="Major global social media services"
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
    example=`The **Platform Governance Archive** (PGA) collection tracks the terms of major global social media services.

This data is maintained and analysed by the [Platform Governance Archive](https://www.platformgovernancearchive.org/) at the Universität Bremen's [Center for Media Communication and Information Research (ZeMKI)](https://www.uni-bremen.de/zemki).

This initiative offers researchers, journalists and citizens the tools to analyze how platforms structure and regulate communication and interaction in our societies.

It also aims to promote greater transparency and accountability of these powerful digital services.
`
    required=false
>}}

{{< configOption
    name="dataset"
    type="uri"
    description="URL to the dataset releases."
    example="https://github.com/OpenTermsArchive/pga-versions/releases"
    required=false
>}}

{{< configOption
    name="declarations"
    type="uri"
    description="URL to the declarations repository."
    example="https://github.com/OpenTermsArchive/pga-declarations"
    required=false
>}}

{{< configOption
    name="versions"
    type="uri"
    description="URL to the versions repository."
    example="https://github.com/OpenTermsArchive/pga-versions"
    required=false
>}}

{{< configOption
    name="snapshots"
    type="uri"
    description="URL to the snapshots repository."
    example="https://github.com/OpenTermsArchive/pga-snapshots"
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
    description="URL to the collection's logo. Optimized PNG transparent image (min width 240px)."
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
    description="The geographic location of the tracking server (city name, ISO 3166-2 country code)."
    example="London, GB"
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
    description="URL to the entity's logo. Optimized PNG transparent image (min width 240px)."
    example="https://opentermsarchive.org/images/logo/logo-open-terms-archive-black.png"
    required=false
>}}

{{< configOption
    name="roles"
    type="array of strings"
    description="Roles of the entity within the governance, see [collection governance](https://docs.opentermsarchive.org/collections/reference/governance/)"
    allowedValues="`host`, `administrator`, `curator`, `maintainer`, `sponsor`"
    example="[host, administrator]"
    required=false
>}}
