---
title: "Contributing terms"
weight: 2
---

# Contributing new declarations

This is a step by step guide to help you add declarations to the [Contrib collection](https://github.com/OpenTermsArchive/contrib-declarations). This collection is dedicated to volunteer contribution of declarations to Open Terms Archive.

Having understood briefly how a declaration is structured in JSON format, we need to look at concrete steps on how you can add these JSON files to the repository.

## Prerequisites

In order to add declarations:

1. You need to have [Node.js](https://nodejs.org/en/) installed on your machine. If you don't have it, you can download it from the official website [here](https://nodejs.org/en/download/).
2. You need to have git installed on your machine. If you don't have it, you can download it from the official website [here](https://git-scm.com/downloads).

## Adding a declaration

To add a declaration, you need to follow these steps:

1. Clone the [contrib-declaration](https://github.com/OpenTermsArchive/contrib-declarations) repository to your local machine.
2. Create a branch that describes your contribution e.g. `add-Open-Terms-Archive-ToS` or `add-firefox-privacy-policy`
3. Run `npm install`. This will install all the dependencies including the Open Terms Archive engine which will allow you to test and validate your declaration.
4. Create a JSON file with, as filename, the service ID of the service you are adding the declaration for. This JSON file should be in the `declarations` folder of the repository. To learn more about selecting the right service ID, please read the [declaring a new service]({{< relref "reference/declaration#declaring-a-new-service" >}}) section.
5. Visit the declaration URL and use [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) to inspect the page and find the right selectors for the significant section containing the terms you want to declare and parts to remove.
6. After you've properly chosen your selectors and structured your JSON file, you should test and validate your JSON file. To do this, you need to run `npx ota validate --services [service name]` from the root of the repository. This will run a validation on the declaration, highlighting any changes required.
7. If all tests pass, open a pull request to the main repository.  

You can read more about the [CLI](https://docs.opentermsarchive.org/#cli) to learn more about other tests and linting you can run on your declaration.
