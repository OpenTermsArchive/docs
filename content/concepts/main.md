---
title: Main concepts
weight: 1
---

## Main concepts

Words in bold are [business domain names](https://en.wikipedia.org/wiki/Domain-driven_design).

**Services** have **terms** written in **documents**, contractual (Terms of Services, Privacy Policy…) or not (Community Guidelines, Deceased User Policy…), that can change over time. Open Terms Archive enables users rights advocates, regulatory bodies and interested citizens to follow the **changes** to these **terms**, to be notified whenever a new **version** is published, to explore their entire **history** and to collaborate in analysing them. This free and open-source engine is developed to support these goals.

### Collection

Open Terms Archive is a decentralised system. It aims at enabling any entity to **track** **terms** on its own. To that end, the Open Terms Archive **engine** can be run on any server, thus making it a dedicated **instance**. An **instance** **tracks** **terms** within a single **collection**.

A **collection** is characterised by a **scope** across **dimensions** that describe the **terms** it **tracks**, such as **language**, **jurisdiction** and **industry**.

#### Example scope

> The terms tracked in this collection are:

> - Of dating services used in Europe.
> - In the European Union and Switzerland jurisdictions.
> - In English, unless no English version exists, in which case the primary official language of the jurisdiction of incorporation of the service operator will be used.

### Federation

In order to maximise discoverability, collaboration and political power, public **collections** are **federated** within a single ecosystem. This makes their data mutually discoverable and enables mutualising effort.

### Terms types

To distinguish between the different **terms** of a **service**, each has a **type**, such as “Terms of Service”, “Privacy Policy”, “Developer Agreement”…

This **type** matches the topic, but not necessarily the title the **service** gives to it. Unifying the **types** enables comparing **terms** across **services**.

> More information on terms types can be found in the [dedicated repository](https://github.com/OpenTermsArchive/terms-types). They are published on NPM under [`@opentermsarchive/terms-types`](https://www.npmjs.com/package/@opentermsarchive/terms-types), enabling standardisation and interoperability beyond the Open Terms Archive engine.

### Declarations

The **terms** that constitute a **collection** are defined in simple JSON files called **declarations**.

A **declaration** also contains some metadata on the **service** on which the **terms** apply.

> Here is an example declaration tracking the Privacy Policy of Open Terms Archive:
>
> ```json
> {
>   "name": "Open Terms Archive",
>   "documents": {
>     "Privacy Policy": {
>       "fetch": "https://opentermsarchive.org/en/privacy-policy",
>       "select": ".textcontent"
>     }
>   }
> }
> ```

- - -

## Add terms to a collection

Open Terms Archive **acquires** **terms** to deliver an explorable **history** of **changes**. This can be done in two ways:

1. For the present and future, by **tracking**.
2. For the past, by **importing** from an existing **fonds** such as [ToSBack](https://tosback.org), the [Internet Archive](https://web.archive.org/), [Common Crawl](https://commoncrawl.org) or any other in-house format.

### Tracking terms

In order to **track** the **changes** of **terms**, the **engine** **records** a **snapshot** of **documents** that contain them by **fetching** their web **location** several times a day. The **engine** then **extracts** a **version** from this **snapshot** by:

1. **Selecting** the subset of the **document** (or **documents**) that contains the **terms** (instead of, e.g., navigation menus, footers, cookies banners…).
2. **Removing insignificant content**, that is residual content in this subset that is not part of the **terms** (e.g. ads, illustrative pictures, internal navigation links…).
3. **Filtering noise** that can emerge in the **terms** by preventing parts that change frequently from triggering false positives for **changes** (e.g. tracker identifiers in links, relative dates…). The **engine** can execute custom **filters** written in JavaScript to that end.

After these steps, if **changes** are spotted in the resulting **terms**, a new **version** is **recorded**.

Preserving **snapshots** enables recovering after the fact information potentially lost in the **extraction** step: if **declarations** were wrong, they can be **maintained** and corrected **versions** can be **extracted** from the original **snapshots**.

### Importing terms

Existing **fonds** can be prepared for easier analysis by unifying their format to the **Open Terms Archive dataset format**. This unique format enables building interoperable tools, fostering collaboration across reusers.
Such a dataset can be generated from **versions** alone. If **snapshots** and **declarations** can be retrieved from the **fonds** too, then a full-fledged **collection** can be created.
