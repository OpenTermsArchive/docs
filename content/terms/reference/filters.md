---
title: "Filters"
---

# Filters

Filters are JavaScript functions that take the document DOM as parameter and are:

- **in-place**: they modify the document structure and content directly;
- **idempotent**: they return the same document structure and content even if run repeatedly on their own result.

The generic function signature for a filter is:

```js
export [async] function filterName(document, [parameters])
```

Each filter is exposed as a named function export that takes a `document` parameter and behaves like the `document` object in a browser DOM.
> The `document` parameter is actually a [JSDOM](https://github.com/jsdom/jsdom) document instance.

These functions can be `async`, but they will still run sequentially.

## Usage

### Simple filter

```js
// <service name>.filters.js
export function customFilter(document) {
  // filter logic here
}
```

Can be used as follows in the declaration:

```json
// <service name>.json
{
  "name": "<service name>",
  "terms": {
    "<terms type>": {
      "fetch": "<URL>",
      "select": "<CSS or Range selectors>",
      "filter": [
        "customFilter"
      ]
    }
  }
}
```

Example:

```js
export function convertTimeAgoToDate(document) {
  const timeElements = document.querySelectorAll('time');
  
  timeElements.forEach(timeElement => {
    const dateTimeValue = timeElement.getAttribute('datetime');
    const textNode = document.createTextNode(dateTimeValue);
    timeElement.parentNode.replaceChild(textNode, timeElement);
  });
}
```

```json
{
  "name": "MyService",
  "terms": {
    "Privacy Policy": {
      "fetch": "https://example.com/privacy",
      "select": ".content",
      "filter": [
        "convertTimeAgoToDate"
      ]
    }
  }
}
```

Result:

```diff
- <p class="meta-data">Last update: <time datetime="2025-06-23T11:16:36Z" title="06/23/2025, 13:16" data-datetime="relative">2 months ago</time></p>
+ <p class="meta-data">Last update: 2025-06-23T11:16:36Z</p>
```

### Filter with parameters

```js
// <service name>.filters.js
export function customParameterizedFilter(document, params) {
  // filter logic here
}
```

Can be used as follows in the declaration:

```json
// <service name>.json
{
  "name": "<service name>",
  "terms": {
    "<terms type>": {
      "fetch": "<URL>",
      "select": "<CSS or Range selectors>",
      "filter": [
        {
          "customParameterizedFilter": ["param1", "param2"]
        }
      ]
    }
  }
}
```

Example:

```js
export function removeLinksWithText(document, text) {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.textContent.trim() === text) {
      link.remove();
    }
  });
}
```

```json
{
  "name": "MyService",
  "terms": {
    "Privacy Policy": {
      "fetch": "https://example.com/privacy",
      "select": ".content",
      "filter": [
        { "removeLinksWithText": "Return to previous section" }
        { "removeLinksWithText": "Go to next section" }
      ]
    }
  }
}
```

Result:

```diff
  <div id="section1">
-   <a href="#section2">Go to next section</a>
    <p>...</p>
  </div>
  <div id="section2">
-   <a href="#section1">Return to previous section</a>
-   <a href="#section3">Go to next section</a>
    <p>...</p>
  </div>
  <div id="section3">
-   <a href="#section2">Return to previous section</a>
    <p>...</p>
  </div>
```
