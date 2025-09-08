---
title: Apply filters
weight: 7
---

# How to apply filters

This guide explains how to apply filters to existing declarations to remove meaningless content that changes on each page load or that cannot be removed with CSS selectors to avoid noise in the terms changes history.

## Prerequisites

- An existing terms declaration file
- Identified the noise you want to remove and ensure it cannot be removed with CSS selectors with the [`remove`]({{< relref "terms/reference/declaration/#ref-remove" >}}) property.

## Step 1: Check for built-in filters

Built-in filters are pre-defined functions that handle common noise patterns. They're the easiest way to clean up content without writing custom code.

Review the available [built-in filters]({{< relref "/terms/reference/built-in-filters" >}}) to find if one matches your needs.

If you find a suitable built-in filter, proceed to [Step 2](#step-2-declare-the-filter), otherwise you will need to create a custom filter.

### Create a custom filter (optional)

If no built-in filter matches your needs, you'll need to create a custom filter. This requires JavaScript knowledge and familiarity with DOM manipulation.

#### Create the filter file

Create a JavaScript file with the same name as your service declaration but with `.filters.js` extension. For example, if your declaration is `declarations/MyService.json`, create `declarations/MyService.filters.js`.

#### Write the filter function

Define your filter function following this signature:

```js
export function myCustomFilter(document, [parameters]) {
  // Your filter logic here
}
```

**Parameters:**

- `document`: JSDOM document instance representing the web page
- `parameters`: Values passed from the declaration (optional)

**Example: Remove session IDs from text content**

For example, let's say you want to remove session IDs from text content:

```html
<p>We collect your data for the following purposes:</p>
<ul>
  <li>To provide our services</li>
  <li>To improve user experience</li>
</ul>
<p class="session-id">Last updated on 2023-12-07 (Session: abc123def456)</p>
```

You can implement this filter as follows:

```js
export function removeSessionIds(document) {
  // Find all paragraphs that might contain session IDs
  const paragraphs = document.querySelectorAll('p.session-id');
  
  paragraphs.forEach(paragraph => {
    let text = paragraph.textContent;
    // Remove session ID patterns like "Session: abc123" or "(Session: def456)"
    text = text.replace(/\s*\(?Session:\s*[a-zA-Z0-9]+\)?/g, '');
    paragraph.textContent = text.trim();
  });
}
```

Result after applying the filter:

```diff
  <p>We collect your data for the following purposes:</p>
  <ul>
    <li>To provide our services</li>
    <li>To improve user experience</li>
  </ul>
- <p class="session-id">Last updated on 2023-12-07 (Session: abc123def456)</p>
+ <p class="session-id">Last updated on 2023-12-07</p>
```

## Step 2: Declare the filter

Open your service declaration file (e.g., `declarations/MyService.json`) and locate the `filter` property of the specific terms you want to apply the filter to. If it doesn't exist, add it as an array.

### Filter without parameters

For filters that don't require parameters, add the filter name as a string:

```json
{
  "name": "MyService",
  "terms": {
    "Privacy Policy": {
      "fetch": "https://my.service.com/en/privacy-policy",
      "select": ".textcontent",
      "filter": [
        "removeSessionIds"
      ]
    }
  }
}
```

### Parameterized filter

For filters that require parameters, use an object format, for example with the built-in filter `removeQueryParams` to remove query parameters from URLs:

```json
{
  "name": "MyService",
  "terms": {
    "Privacy Policy": {
      "fetch": "https://my.service.com/en/privacy-policy",
      "select": ".textcontent",
      "filter": [
        {
          "removeQueryParams": ["utm_source", "utm_medium", "utm_campaign"]
        }
      ]
    }
  }
}
```

### Multiple filters

You can combine multiple filters in the same declaration:

```json
{
  "name": "MyService",
  "terms": {
    "Privacy Policy": {
      "fetch": "https://my.service.com/en/privacy-policy",
      "select": ".textcontent",
      "filter": [
        {
          "removeQueryParams": ["utm_source", "utm_medium"]
        },
        "removeSessionIds"
      ]
    }
  }
}
```

## Step 3: Test the filter

After adding the filter, test your declaration to ensure it works correctly:

1. Start the terms tracking process
2. Check that the noise has been removed
3. Verify that important content is preserved
