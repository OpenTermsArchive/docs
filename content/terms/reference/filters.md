---
title: "Filters"
---

# Filters

Filters are JavaScript functions that take the document DOM as parameter and are:

- **in-place**: they modify the document structure and content directly;
- **idempotent**: they return the same document structure and content even if run repeatedly on their own result.

The generic function signature for a filter is:

- For simple filters:

```js
export [async] function filterName(document, [documentDeclaration])
```

- For filters with parameters:

```js
export [async] function filterName(document, parameters, [documentDeclaration])
```

Each filter is exposed as a named function export that takes a `document` parameter and behaves like the `document` object in a browser DOM. The `document` parameter is actually a [JSDOM](https://github.com/jsdom/jsdom) document instance.

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

#### Example

```js
export function convertTimeAgoToDate(document) {
  const timeElements = document.querySelectorAll('.metadata time');
  
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
- <p class="metadata">Last update: <time datetime="2025-06-23T11:16:36Z" title="06/23/2025, 13:16" data-datetime="relative">2 months ago</time></p>
+ <p class="metadata">Last update: 2025-06-23T11:16:36Z</p>
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

#### Example 1

```js
export function removeLinksWithText(document, textArray) {
  const links = document.querySelectorAll('a');
  const textsToRemove = Array.isArray(textArray) ? textArray : [textArray];
  
  links.forEach(link => {
    if (textsToRemove.includes(link.textContent.trim())) {
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
        { "removeLinksWithText": ["Return to previous section", "Go to next section"] }
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

#### Example 2

```js
import fetch from 'isomorphic-fetch';

export async function convertImagesToBase64(document, selector, documentDeclaration) {
  const images = Array.from(document.querySelectorAll(selector));

  return Promise.all(images.map(async ({ src }, index) => {
    if (src.startsWith('data:')) {
      return; // Already a data-URI, skip
    }

    const imageUrl = new URL(src, documentDeclaration.fetch).href; // Ensure url is absolute
    const response = await fetch(imageUrl);
    const mimeType = response.headers.get('content-type');
    const content = await response.arrayBuffer();

    const base64Content = btoa(String.fromCharCode(...new Uint8Array(content)));

    images[index].src = `data:${mimeType};base64,${base64Content}`;
  }));
  
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
        { "convertImagesToBase64": ".meaningful-illustration" }
      ]
    }
  }
}
```

Result:

```diff
- <img src="https://example.com/image.png" class="meaningful-illustration">
+ <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..." class="meaningful-illustration">
```
