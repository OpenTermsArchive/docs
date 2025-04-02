---
title: Track new terms
weight: 2
aliases: 
  - /contributing-terms/
  - /terms/how-to/track-new-terms/
---

# How to track new terms

This is a step by step guide to help you add declarations to the [contrib-declaration](https://github.com/OpenTermsArchive/contrib-declarations) repository. This repository is dedicated for volunteer contribution of declarations to Open Terms Archive.

Having understood briefly how a declaration is structured in JSON format, we need to look at concrete steps on how you can add these JSON files to the repository.

## Prerequisites

In order to add declarations:

1. You need to have [Node.js](https://nodejs.org/en/) installed on your machine. If you don't have it, you can download it from the official website [here](https://nodejs.org/en/download/).
2. You need to have git installed on your machine. If you don't have it, you can download it from the official website [here](https://git-scm.com/downloads).

## Adding a declaration

To add a declaration, you need to follow these steps:

1. Clone the [contrib-declaration](https://github.com/OpenTermsArchive/contrib-declarations) repository to your local machine.
2. Create a branch that describes your contribution e.g. `add-Open-Terms-Archive-ToS` or `add-firefox-privacy-policy`
3. Run `npm install`. This is to install all the dependencies including the Open Terms Archive engine which will allow you to test and validate your declaration to make sure it is ok.
4. Create a JSON file with the name of the service you are adding the declaration for. This JSON file should be in the `declarations` folder of the repository. To learn more about selecting the right service name, please read the [Service name](#service-name) section below.
5. Visit the declaration URL and use [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) to inspect the page and find the right selectors for the significant section containing the terms you want to declare.
6. After you've properly added your selectors and structured your JSON file, you need to test and validate your JSON file to make sure it is ok. To do this, you need to run `npx ota validate --services [service name]` from the root of the repository. This will run a validation on the declaration, highlighting any changes required.
7. If all tests are good, make a pull request to the main repository.  

> If you have a hard time finding the service name, check out the [practical guidelines to find the service name]({{< relref "/terms/guidelines/declaring" >}}), and feel free to mention your uncertainties in the pull request! We will help you improve the service name if necessary 🙂

## Service name

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

> If you have a hard time finding the service name, check out the [practical guidelines to find the service name]({{< relref "/terms/guidelines/declaring#service-name" >}}), and feel free to mention your uncertainties in the pull request! We will help you improve the service name if necessary 🙂

## Service ID

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

> If you have a hard time defining the service ID, check out the [practical guidelines to derive the ID from the service name]({{< relref "/terms/guidelines/declaring#service-id" >}}), and feel free to mention your uncertainties in the pull request! We will help you improve the service ID if necessary 🙂

> More details on the ID and naming constraints and recommendations can be found in the relevant [decision record](https://github.com/OpenTermsArchive/engine/blob/main/decision-records/0001-service-name-and-id.md).

## Service declaration

Once you have the [service name](#service-name) and the [service ID](#service-id), create a JSON file in the `declarations` folder named after the ID of the service you want to add, with the following structure:

```json
{
  "name": "<service name>",
  "terms": {}
}
```

Within the `terms` JSON object, you will now declare terms.
