---
title: "Contributing terms"
weight: 4
---

# Contributing new declarations

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
4. Create a JSON file with the name of the service you are adding the declaration for. This JSON file should be in the `declarations` folder of the repository. To learn more about selecting the right service name, please read the [declaring a new service](#declaring-a-new-service) section of our docs.
5. Visit the declaration URL and use [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) to inspect the page and find the right selectors for the significant section containing the terms you want to declare.
6. After you've properly added your selectors and structured your JSON file, you need to test and validate your JSON file to make sure it is ok. To do this, you need to run `npx ota validate --services [service name]` from the root of the repository. This will run a validation on the declaration, highlighting any changes required.
7. If all tests are good, make a pull request to the main repository.  

You can read more about the [CLI](https://docs.opentermsarchive.org/#cli) to learn more about other tests and linting you can run on your declaration

#### Terms type

Great, your terms declaration is now almost complete! You simply need to write it under the appropriate terms type in the `documents` JSON object within the service declaration.

In order to distinguish between the many terms that can be associated with a service and enable cross-services comparison of similar terms, we maintain a unique list of terms types in a [dedicated repository](https://github.com/OpenTermsArchive/terms-types).

Please note, the terms type may differ from the exact name provided by the service, but it should align with the underlying commitment. For example, some providers might call “Terms and Conditions” or “Terms of Use” what some others call “Terms of Service”.

If the terms you want to add don't match an existing type, you can [suggest a new one](https://github.com/OpenTermsArchive/terms-types/blob/main/CONTRIBUTING.md).

### Testing your declaration

You can test the declarations you created or changed by running the following command:

```
npm test [$service_id [$another_service_id …]]
```

Since this operation fetches documents and could be long, you can also validate the declaration structure only:

```
npm run test:schema [$service_id [$another_service_id …]]
```

#### Linting

In order to ensure consistency across declarations, all declarations files have to be formatted homogeneously.

In order to achieve this, you can use the following command:

```
npm run lint [$service_id [$another_service_id …]]
```

- - -

## Maintaining declarations

All parts of a **terms** **declaration** (web location, selection, noise removal, distribution across multiple documents…) can change over time. The process of updating these elements to enable continued **tracking** is called **maintenance**. Without it, **terms** can become:

- **unreachable**: no **snapshot** can be **recorded** at all, because the **location** changed or the **service** denies access;
- **unextractable**: no **version** can be **extracted** from the **snapshot**, because the selection of content or some **filter** fails;
- **noisy**: both **snapshots** and **versions** are **recorded** but the **changes** contain **noise** that should have been **filtered out**.

Open Terms Archive needs to keep track of this changes in order to regenerate versions history from snapshots history.

### Service history

To keep track of services declarations and filters changes, Open Terms Archive offers a versioning system. It is optional and should be added only when needed. It works by creating history files for terms declarations and filters, where each entry should be a previous valid declaration or filter function and should have an expiry date.

Both for terms and filters history, the expiration date is declared in a property `validUntil`. It should be the authored date and time of the last snapshot commit for which the declaration is still valid.

Terms declarations history files and filters history files can both evolve on their own. Having one does not imply to create the other.

The current (latest) valid declaration has no date and should not appear in the history object: it stays in its own file, just like if there was no history at all.

#### Terms declaration history

Declarations history are stored in a history JSON file with the following name `declarations/$service_id.history.json`.

The terms history contains an object with terms types as properties. Each terms type property is an array of history entries. Each entry has the same format as a normal terms declaration, except there is the **mandatory** extra property `validUntil`.

```json
{
  …
  "<terms type>": [
    {
      "fetch": "The URL where the document can be found",
      "executeClientScripts": "A boolean to execute client-side JavaScript loaded by the document before accessing the content, in case the DOM modifications are needed to access the content; defaults to false (fetch HTML only)",
      "filter": "An array of service specific filter function names",
      "remove": "A CSS selector, a range selector or an array of selectors that target the insignificant parts of the document that has to be removed. Useful to remove parts that are inside the selected parts",
      "select": "A CSS selector, a range selector or an array of selectors that target the meaningful parts of the document, excluding elements such as headers, footers and navigation",
      "validUntil": "The inclusive expiration date in ISO format"
    }
  ]
  …
}
```

For example, to add a history entry for the `Terms of Service` of the service `ASKfm`, create the file `declarations/ASKfm.history.json` with the following contents:

```json
{
  "Terms of Service": [
    {
      "fetch": "https://ask.fm/docs/terms_of_use/?lang=en",
      "select": "body",
      "filter": ["add"],
      "validUntil": "2020-10-29T21:30:00.000Z"
    }
  ]
}
```

#### Filters history

Filters history is declared in a filters history declaration JavaScript file with the following name: `declarations/$service_id.filters.history.js`.

For each filter, a variable named like the filter must be exported. This variable should contain an array of filter history entries. Each entry is an object with the expiration date, as `validUntil` property, and the valid function for this date, under the `filter` property. Both properties are **mandatory**.

```js
export const <filterName> = [
  {
    validUntil: "The inclusive expiration date in ISO format",
    filter: function() { /* body valid until the expiration of the `validUntil` date */ }
  }
];
```

For example, to add a history entry for the `removeSharesButton` filter of the service `ASKfm`, create the file `declarations/ASKfm.filters.history.js` with the following content:

```js
export const removeSharesButton = [
  {
    validUntil: '2020-08-22T11:30:21.000Z',
    filter: async (document) => {
      document.querySelectorAll('.shares').forEach((element) => element.remove());
    },
  },
];
```

### Handling a terminated service

If the service provider stops offering a service, the associated terms will become unavailable. To mark that service termination in Open Terms Archive and ensure tracking tentatives are stopped, while maintaining the possibility to explore the history:

1. Move the existing documents declaration to the service [history file](#terms-declaration-history).
2. Update the declaration to stop tracking all terms, by removing every `<terms type>` entries from the  `documents` key in the declaration:
```json
{
  "name": "<service name>",
  "documents": {}
}
```

### Renaming a service

The consensus is to consider that a service provider renaming a service (for example, `Twitter` to `X`) is akin to terminating the previous service and opening a new one. Therefore, to apply a service renaming, open a pull request that both [terminates the previous service](#handling-terminated-service) and adds a new [service declaration](#declaring-a-new-service) with the new service name. You can reuse the `documents` part of the original declaration, but should double-check that the selectors and URLs still match, as a service rename is most often accompanied by a new page layout, a new domain name, and sometimes entirely new terms.
