---
title: "Filters"
---

# Filters

Some documents require more complex filtering beyond basic element selection and removal. For example, web pages often contain dynamically generated content like tracking IDs in URLs that change on each page load. While these elements are part of the page, they are not meaningful to the terms content itself. If such dynamic content is included in the archived versions, it creates a lot of insignificant versions and pollutes the archive with noise that makes it harder to identify actual changes to the terms.

Filters address this need by providing a way to programmatically clean up and normalize the content before archiving. They are implemented as JavaScript functions that can manipulate the downloaded web page using the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), allowing for sophisticated content transformations beyond what's possible with simple CSS selectors.

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

You can learn more about usual noise and ways to handle it [in the guidelines]({{< relref "/terms/guidelines/declaring#usual-noise" >}}).

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
