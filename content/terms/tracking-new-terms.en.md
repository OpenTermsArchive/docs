---
title: "Tracking new terms"
weight: 2
aliases: /contributing-terms/
---

# Tracking new terms

Tracking terms is done by _declaring_ them and the service they are associated with. Such a declaration is achieved by editing JSON files in the [`declarations`](https://github.com/OpenTermsArchive/contrib-declarations/tree/main/declarations) folder.

Before adding new terms, open the [`declarations`](https://github.com/OpenTermsArchive/contrib-declarations/tree/main/declarations) folder and check if the service you want to track terms for is already declared. If a JSON file with the name of the service is already present, you can jump straight to [declaring terms](#declaring-terms). Otherwise, keep reading!

### Declaring a new service

Before declaring a service, you will need to choose the service name and service ID. The service ID will be the name of the JSON file in which the service will be declared. It is a normalised version of the service name.

### Service name

The service name is exposed to end users. It should reflect as closely as possible the official service name, as referenced in the terms or “about” pages, so that it can be recognised easily and unambiguously.

- The service name should be the one used by the service itself, no matter the alphabet, UTF symbols, spaces, and casing.
  - _Example: `eBay`_.
  - _Example: `hi5`_.
  - _Example: `LINE`_.
  - _Example: `App Store`_.
  - _Example: `туту.ру` (Cyrillic)_.
  - _Example: `抖音短视频` (Simplified Chinese characters)_.
- Domain name extensions (TLDs) are allowed when they are part of the official service name.
  - _Example: `Booking.com`_.
  - _Example: `historielærer.dk`_.
- Service names can be prefixed by the provider name, separated by a space, when it would otherwise be too generic or ambiguous.
  - _Example: `Ads` (by Facebook) → `Facebook Ads`_.
  - _Example: `Analytics` (by Google) → `Google Analytics`_.
  - _Example: `Firebase` (by Google) → `Firebase`_.
  - _Example: `App Store` (by Apple) → `App Store`_.

> If you have a hard time finding the service name, check out the [practical guidelines to find the service name](../guidelines/declaring#service-name), and feel free to mention your uncertainties in the pull request! We will help you improve the service name if necessary 🙂

### Service ID

The service ID is exposed to developers. It should be easy to handle with scripts and other tools.

- Non-ASCII characters are not supported. Service IDs are derived from the service name by normalising it into ASCII.
  - _Example: `RTÉ` → `RTE`_.
  - _Example: `historielærer.dk` → `historielaerer.dk`_.
  - _Example: `туту.ру` → `tutu.ru`_.
  - _Example: `抖音短视频` → `Douyin`_.
- Punctuation is supported, except characters that have meaning at filesystem level (`:`, `/`, `\`). These are replaced with a dash (`-`). The dot (`.`) is supported, but the service ID cannot be solely `.` or `..` as these have specific meanings in the filesystem.
  - _Example: `Booking.com` → `Booking.com`_.
  - _Example: `Yahoo!` → `Yahoo!`_.
  - _Example: `re:start` → `re-start`_.
  - _Example: `we://` → `we---`_.
- Capitals and spaces are supported. Casing and spacing are expected to reflect the official service name casing and spacing.
  - _Example: `App Store` → `App Store`_.
  - _Example: `DeviantArt` → `DeviantArt`_.

> If you have a hard time defining the service ID, check out the [practical guidelines to derive the ID from the service name](../guidelines/declaring#service-id), and feel free to mention your uncertainties in the pull request! We will help you improve the service ID if necessary 🙂

> More details on the ID and naming constraints and recommendations can be found in the relevant [decision record](https://github.com/OpenTermsArchive/engine/blob/main/decision-records/0001-service-name-and-id.md).

### Service declaration

Once you have the [service name](#service-name) and the [service ID](#service-id), create a JSON file in the `declarations` folder named after the ID of the service you want to add, with the following structure:

```json
{
  "name": "<service name>",
  "documents": {}
}
```

Within the `documents` JSON object, you will now declare terms.
