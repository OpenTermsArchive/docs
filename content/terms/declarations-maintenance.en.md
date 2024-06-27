---
title: "Declarations maintenance"
weight: 3
---

# Declarations maintenance

All parts of a **terms** **declaration** (web location, selection, noise removal, distribution across multiple documents…) can change over time. The process of updating these elements to enable continued **tracking** is called **maintenance**. Without it, **terms** can become:

- **unreachable**: no **snapshot** can be **recorded** at all, because the **location** changed or the **service** denies access;
- **unextractable**: no **version** can be **extracted** from the **snapshot**, because the selection of content or some **filter** fails;
- **noisy**: both **snapshots** and **versions** are **recorded** but the **changes** contain **noise** that should have been **filtered out**.

Open Terms Archive needs to keep track of this changes in order to regenerate versions history from snapshots history.

## Service history reference

To keep track of services declarations and filters changes, Open Terms Archive offers a versioning system. It is optional and should be added only when needed. It works by creating history files for terms declarations and filters, where each entry should be a previous valid declaration or filter function and should have an expiry date.

Both for terms and filters history, the expiration date is declared in a property `validUntil`. It should be the authored date and time of the last snapshot commit for which the declaration is still valid.

Terms declarations history files and filters history files can both evolve on their own. Having one does not imply to create the other.

The current (latest) valid declaration has no date and should not appear in the history object: it stays in its own file, just like if there was no history at all.

### Terms declaration history

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

### Filters history

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

## How to terminate a service

If the service provider stops offering a service, the associated terms will become unavailable. To mark that service termination in Open Terms Archive and ensure tracking tentatives are stopped, while maintaining the possibility to explore the history:

1. Move the existing documents declaration to the service [history file](#terms-declaration-history).
2. Update the declaration to stop tracking all terms, by removing every `<terms type>` entries from the  `documents` key in the declaration:

```json
{
  "name": "<service name>",
  "documents": {}
}
```

## How to rename a service

The consensus is to consider that a service provider renaming a service (for example, `Twitter` to `X`) is akin to terminating the previous service and opening a new one. Therefore, to apply a service renaming, open a pull request that both [terminates the previous service](#how-to-terminate-a-service) and adds a new [service declaration]({{< relref "terms/tracking-new-terms#declaring-a-new-service" >}}) with the new service name. You can reuse the `documents` part of the original declaration, but should double-check that the selectors and URLs still match, as a service rename is most often accompanied by a new page layout, a new domain name, and sometimes entirely new terms.

## How to get the `validUntil` date from an issue

1. Go to the open issue and scroll to the last action from `OTA-Bot` (comment or issue opening).

   ![]({{< relref "." >}}declarations-maintenance-ota-bot-comment.png)

   Note that sometimes:

   - the date is not quite precise, it can be written "last month"
   ![]({{< relref "." >}}declarations-maintenance-ota-bot-comment-last-month.png)
   - the last comment may be the announcement of the reopening of the issue
   ![]({{< relref "." >}}declarations-maintenance-ota-bot-comment-reopened-issue.png)

2. On the date of this comment, right-click "inspect" to open your browser's code inspector.

3. The value to use as `validUntil` is the value of the `datetime` attribute from the `<relative-time>` element.

   ![]({{< relref "." >}}declarations-maintenance-inspector-open-get-datetime.png)
