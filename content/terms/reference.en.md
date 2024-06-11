---
title: "Terms reference"
weight: 4
---

# Terms reference

Terms are declared in a service declaration file, under the `documents` property.

Most of the time, terms are written in only one source document (for example [Facebook Terms of Service](https://www.facebook.com/legal/terms)) but sometimes terms can be spread across multiple online source documents, and their combination constitutes the terms (for example [Facebook Community Guidelines](https://transparency.fb.com/policies/community-standards/)).

## Source document

The way in which a source document is obtained is defined in a JSON object:

```json
{
  "fetch": "The URL where the document can be found",
  "executeClientScripts": "A boolean to execute client-side JavaScript loaded by the document before accessing the content, in case the DOM modifications are needed to access the content; defaults to false (fetch HTML only)",
  "filter": "An array of service specific filter function names",
  "remove": "A CSS selector, a range selector or an array of selectors that target the insignificant parts of the document that has to be removed. Useful to remove parts that are inside the selected parts",
  "select": "A CSS selector, a range selector or an array of selectors that target the meaningful parts of the document, excluding elements such as headers, footers and navigation"
}
```

- For HTML files, `fetch` and `select` are mandatory.
- For PDF files, only `fetch` is mandatory.

Let’s start by defining these keys!

## `fetch`

This property should simply contain the URL at which the terms you want to track can be downloaded. HTML and PDF files are supported.

When terms coexist in different languages and jurisdictions, please refer to the [scope of the collection](../#collections) to which you are contributing. This scope is usually defined in the README.

## `select`

_This property is not needed for PDF documents._

Most of the time, contractual documents are exposed as web pages, with a header, a footer, navigation menus, possibly ads… We aim at tracking only the significant parts of the document. In order to achieve that, the `select` property allows to extract only those parts in the process of [converting from snapshot to version](https://opentermsarchive.org/#how-it-works).

The `select` value can be either a [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), a [range selector](#range-selectors) or an array of those.

### CSS selectors

CSS selectors should be provided as a string. See the [specification](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) for how to write CSS selectors.

> For example, the following selector will select the content in the `<main>` tag of the HTML document:
>
> ```json
> "select": "main"
> ```

### Range selectors

A range selector is defined with a _start_ and an _end_ CSS selector. It is also necessary to define if the range starts before or after the element targeted by the _start_ CSS selector and to define if it ends before or after the element targeted by the _end_ CSS selector.

To that end, a range selector is a JSON object containing two keys out of the four that are available: `startBefore`, `startAfter`, `endBefore` and `endAfter`.

```json
{
  "start[Before|After]": "<CSS selector>",
  "end[Before|After]": "<CSS selector>"
}
```

> For example, the following selector will select the content between the element targeted by the CSS selector `#privacy-eea`, including it, and the element targeted by the CSS selector `footer`, excluding it:
>
> ```json
> {
>   "startBefore": "#privacy-eea",
>   "endBefore": "footer"
> }
> ```

## `remove`

_This property is optional._

Beyond [selecting a subset of a web page](#select), some documents will have non-significant parts in the middle of otherwise significant parts. For example, they can have “go to top” links or banner ads. These can be removed by listing [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), [range selectors](#range-selectors) or an array of them under the `remove` property.

### Example

Let's assume a web page contains the following content:

```html
<main>
  <div class="filter-holder">
    <select class="filter-options">
        <option value="https://www.example.com/policies/user-agreement" selected>User Agreement</option>
        <option value="https://www.example.com/policies/privacy-policy">Privacy Policy</option>
        <option value="https://www.example.com/policies/content-policy">Content Policy</option>
        <option value="https://www.example.com/policies/broadcasting-content-policy">Broadcasting Content Policy</option>
    </select>
  </div>
  <h1>User Agreement</h1>
  <div>…terms…</div>
</main>
```

If only `main` is used in `select`, the following version will be extracted:

```md
User Agreement Privacy Policy Content Policy Broadcasting Content Policy Moderator Guidelines Transparency Report 2017 Transparency Report 2018 Guidelines for Law Enforcement Transparency Report 2019

User Agreement
==============

…terms…
```

Whereas we want instead:

```md
User Agreement
==============

…terms…
```

This result can be obtained with the following declaration:

```json
{
  "fetch": "https://example.com/user-agreement",
  "select": "main",
  "remove": ".filter-holder"
}
```

### Complex selectors examples

```json
{
 "fetch": "https://support.google.com/adsense/answer/48182",
 "select": ".article-container",
 "remove": ".print-button, .go-to-top"
}
```

```json
{
 "fetch": "https://www.wechat.com/en/service_terms.html",
 "select": "#agreement",
 "remove": {
   "startBefore": "#wechat-terms-of-service-usa-specific-terms-",
   "endBefore": "#wechat-terms-of-service-european-union-specific-terms-"
 }
}
```

```json
{
 "fetch": "https://fr-fr.facebook.com/legal/terms/plain_text_terms",
 "select": "div[role=main]",
 "remove": [
   {
     "startBefore": "[role=\"separator\"]",
     "endAfter": "body"
   },
   "[style=\"display:none\"]"
 ]
}
```

## `executeClientScripts`

_This property is optional._

In some cases, the content of the document is only loaded (or is modified dynamically) by client scripts.
When set to `true`, this boolean property loads the page in a headless browser to load all assets and execute client scripts before trying to get the document contents.

Since the performance cost of this approach is high, it is set to `false` by default, relying on the HTML content only.

## `filter`

_This property is optional._

Finally, some documents will need more complex filtering beyond simple element selection and removal, for example to remove noise (changes in textual content that are not meaningful to the terms of services). Such filters are declared as JavaScript functions that modify the downloaded web page through the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

Filters take the document DOM and the terms declaration as parameters and are:

- **in-place**: they modify the document structure and content directly;
- **idempotent**: they should return the same document structure and content even if run repeatedly on their own result.

Filters are loaded automatically from files named after the service they operate on. For example, filters for the Meetup service, which is declared in `declarations/Meetup.json`, are loaded from `declarations/Meetup.filters.js`.

The generic function signature for a filter is:

```js
export [async] function filterName(document, documentDeclaration)
```

Each filter is exposed as a named function export that takes a `document` parameter and behaves like the `document` object in a browser DOM. These functions can be `async`, but they will still run sequentially. The whole document declaration is passed as second parameter.

> The `document` parameter is actually a [JSDOM](https://github.com/jsdom/jsdom) document instance.

You can learn more about usual noise and ways to handle it [in the guidelines]({{< relref "guidelines/declaring#usual-noise" >}}).

### Example

Let's assume a service adds a unique `clickId` parameter in the query string of all link destinations. These parameters change on each page load, leading to recording noise in versions. Since links should still be recorded, it is not appropriate to use `remove` to remove the links entirely. Instead, a filter will manipulate the links destinations to remove the always-changing parameter. Concretely, the goal is to apply the following filter:

```diff
- Read the <a href="https://example.com/example-page?clickId=349A2033B&lang=en">list of our affiliates</a>.
+ Read the <a href="https://example.com/example-page?lang=en">list of our affiliates</a>.
```

The code below implements this filter:

```js
function removeTrackingIdsQueryParam(document) {
  const QUERY_PARAM_TO_REMOVE = 'clickId';

  document.querySelectorAll('a').forEach(link => {  // iterate over every link in the page
    const url = new URL(link.getAttribute('href'), document.location);  // URL is part of the DOM API, see https://developer.mozilla.org/en-US/docs/Web/API/URL
    const params = new URLSearchParams(url.search);  // URLSearchParams is part of the DOM API, see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

    params.delete(QUERY_PARAM_TO_REMOVE);  // we use the DOM API instead of RegExp because we can't know in advance in which order parameters will be written
    url.search = params.toString();  // store the query string without the parameter
    link.setAttribute('href', url.toString());  // write the destination URL without the parameter
  });
}
```

### Example usage of declaration parameter

The second parameter can be used to access the defined document URL or selector inside the filter.

Let's assume a service stores some of its legally-binding terms in images. To track these changes properly, images should be stored as part of the terms. By default, images are not stored since they significantly increase the document size. The filter below will store images inline in the terms, encoded in a [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs). In order to download the images for conversion, the base URL of the web page is needed to resolve relative links. This information is obtained from the declaration.

```js
import fetch from 'isomorphic-fetch';

export async function convertImagesToBase64(document, documentDeclaration) {
  const { fetch: baseUrl, select: selector } = documentDeclaration;
  
  const images = Array.from(document.querySelectorAll(`${selector} img`));

  return Promise.all(images.map(async ({ src }, index) => {
    const imageAbsoluteUrl = new URL(src, baseUrl).href;
    const response = await fetch(imageAbsoluteUrl);
    const mimeType = response.headers.get('content-type');
    const content = await response.arrayBuffer();

    const base64Image = btoa(String.fromCharCode(...new Uint8Array(content)));

    images[index].src = `data:${mimeType};base64,${base64Image}`;
  }));
}
```

## Terms with a single source document

In the case where terms are extracted from one single source document, they are declared by simply declaring that source document:

```json
  …
  "documents": {
    "<terms type>": {
      "fetch": "…",
      "executeClientScripts": "…",
      "filter": "…",
      "remove": "…",
      "select": "…"
    }
  }
  …
```

## Terms with multiple source documents

When the terms are spread across multiple source documents, they should be declared by declaring their combination:

```json
  …
  "documents": {
    "<terms type>": {
        "combine": [
        {
          "fetch": "…",
          "executeClientScripts": "…",
          "filter": "…",
          "remove": "…",
          "select": "…"
        },
        {
          "fetch": "…",
          "executeClientScripts": "…",
          "filter": "…",
          "remove": "…",
          "select": "…"
        }
      ]
    }
  }
  …
```

If some parts of the source documents are repeated, they can be factorised. For example, it is common for the structure of HTML pages to be similar from page to page, so `select`, `remove` and `filter` would be the same. These elements can be shared instead of being duplicated:

```json
  …
  "documents": {
    "<terms type>": 
      "executeClientScripts": "…",
      "filter": "…",
      "remove": "…",
      "select": "…",
      "combine": [
        {
          "fetch": "…",
        },
        {
          "fetch": "…",
        }
      ]
  }
  …
```

## Terms type

Great, your terms declaration is now almost complete! You simply need to write it under the appropriate terms type in the `documents` JSON object within the service declaration.

In order to distinguish between the many terms that can be associated with a service and enable cross-services comparison of similar terms, we maintain a unique list of terms types in a [dedicated repository](https://github.com/OpenTermsArchive/terms-types).

Please note, the terms type may differ from the exact name provided by the service, but it should align with the underlying commitment. For example, some providers might call “Terms and Conditions” or “Terms of Use” what some others call “Terms of Service”.

If the terms you want to add don't match an existing type, you can [suggest a new one](https://github.com/OpenTermsArchive/terms-types/blob/main/CONTRIBUTING.md).

## Testing your declaration

You can test the declarations you created or changed by running the following command:

```sh
npm test [$service_id [$another_service_id …]]
```

Since this operation fetches documents and could be long, you can also validate the declaration structure only:

```sh
npm run test:schema [$service_id [$another_service_id …]]
```

## Linting

In order to ensure consistency across declarations, all declarations files have to be formatted homogeneously.

In order to achieve this, you can use the following command:

```sh
npm run lint [$service_id [$another_service_id …]]
```
