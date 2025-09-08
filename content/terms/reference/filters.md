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
