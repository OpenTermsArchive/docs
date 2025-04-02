---
title: "Service declaration"
aliases: "/terms/references/"
---

# Service declaration

This reference documentation details all available properties that can be specified in a service's declaration file.

The examples given throughout this reference can be seen in context in the [declarations files](https://github.com/OpenTermsArchive/demo-declarations/tree/main/declarations) from the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations)

## Properties

{{< configOption
    name="name"
    type="string"
    description="The name of the service."
    example="Open Terms Archive"
    required=true
/>}}

{{< configOption
    name="terms"
    type="object of objects"
    description=`Map of terms associated with a service, where keys are standardized term types (e.g., "Privacy Policy", "Terms of Service"), and values are term objects containing the configuration for fetching and processing each document, as detailed in the [Terms declaration]({{< relref \"#terms-declaration\" >}}) section.

To facilitate cross-service comparisons and ensure consistency, a standardized list of term types is maintained in a [dedicated repository](https://github.com/OpenTermsArchive/terms-types).

Please note, the terms type may differ from the exact name provided by the service, but it should align with the underlying commitment. For example, some providers might call “Terms and Conditions” or “Terms of Use” what some others call “Terms of Service”.`
    required=true
    reference="[Terms Types](https://github.com/OpenTermsArchive/terms-types)."
>}}
```json
"terms": {
    "Terms of Service": {
      "fetch": "https://opencollective.com/tos",
      "select": ".markdown"
    },
    "Privacy Policy": {
      "fetch": "https://opencollective.com/privacypolicy",
      "select": ".markdown"
    }
}
```
{{< /configOption >}}

---

### Terms declaration

{{< configOption
    name="fetch"
    type="uri"
    description="The URL where the terms document can be downloaded."
    example="https://opentermsarchive.org/en/privacy-policy"
    required=true
/>}}

{{< configOption
    name="select"
    type="string, object or array"
    description=`
The way to select the parts of the document to extract. Can be:

- a CSS selector string. See the [CSS Selectors specification](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- a range selector object. See the [range selector]({{< relref \"#range-selector\" >}}) section
- an array of those`
    required="required for HTML documents"
>}}
As a direct CSS selector:
```json
"select": "#article-contents"
```

As a range selector object:
```json
"select": {
    "startBefore": "h1",
    "endBefore": "#toc-heading"
}
```

As an array of those:
```json
"select": [
    "#article-contents",
    {
        "startBefore": "h1",
        "endBefore": "#toc-heading"
    }
]
```
{{< /configOption >}}

{{< configOption
    name="executeClientScripts"
    type="boolean"
    description=`Boolean flag to execute client-side JavaScript before accessing content.

When enabled, this loads the page in a headless browser to execute client-side scripts and load dynamic content, which is necessary when JavaScript modifies or loads content after the initial page load.`
    default=false
    example="true"
/>}}

{{< configOption
    name="remove"
    type="string, object or array"
    description=`
The way to remove the parts of the document that are not part of the terms and can be considered as noise. Can be:

- a CSS selector string. See the [CSS Selectors specification](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- a range selector object. See the [range selector]({{< relref \"#range-selector\" >}}) section
- an array of those`
>}}
As a direct CSS selector:
```json
"remove": ".nav, .breadcrumb"
```

As a range selector object:
```json
"remove": {
    "startBefore": ".nav",
    "endBefore": ".breadcrumb"
}
```

As an array of those:
```json
"remove": [
    ".nav, .breadcrumb",
    {
        "startBefore": "#contact-us",
        "endBefore": "#footer"
    }
]
```
{{< /configOption >}}

{{< configOption
    name="filter"
    type="array of strings"
    description="Array of filter function names to apply. Function will be executed in the order of the array. See the [Filters]({{< relref \"terms/references/filters\" >}}) section for more information."
    example="[\"filterName1\", \"filterName2\"]"
/>}}

{{< configOption
    name="combine"
    type="array of objects"
    description=`
An array of terms declaration objects that will be combined into a single terms document. Each object in the array can contain all the same properties as a regular terms  declaration (except "combine").

Common properties (can be a combination of "select", "remove", "filter" and "executeClientScripts") that are shared across all source documents can be factorized by declaring them at the root level of the terms declaration.
    `
>}}
```json
"combine": [
    {
        "fetch": "https://example.com/terms/part1",
        "select": "#main-content",
        "remove": ".ads"
    },
    {
        "fetch": "https://example.com/terms/part2",
        "select": "#main-content",
        "remove": ".ads"
    }
]
```
{{< /configOption >}}

---

### Range selector

{{< configOption
    name="startBefore"
    type="CSS selector"
    description="The CSS selector for the element before which the range starts."
    example="#privacy-eea"
    required="either `startBefore` or `startAfter` is required"
/>}}

{{< configOption
    name="startAfter"
    type="CSS selector"
    description="The CSS selector for the element after which the range starts."
    example="#privacy-eea"
    required="either `startBefore` or `startAfter` is required"
/>}}

{{< configOption
    name="endBefore"
    type="CSS selector"
    description="The CSS selector for the element before which the range ends."
    example="footer"
    required="either `endBefore` or `endAfter` is required"
/>}}

{{< configOption
    name="endAfter"
    type="CSS selector"
    description="The CSS selector for the element after which the range ends."
    example="footer"
    required="either `endBefore` or `endAfter` is required"
/>}}

#### Example

To capture content starting from and including a privacy section up until but excluding the footer:

```json
{
  "startBefore": "#privacy-section",
  "endBefore": "footer"
}
```
