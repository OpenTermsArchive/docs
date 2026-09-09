---
title: "Built-in filters"
---

# Built-in filters

This reference details all available built-in [filters]({{< relref "terms/explanation/filters" >}}) that can be applied to avoid noise in versions.

{{< refItem
    name="removeQueryParams"
    description="Removes query parameters from URLs in links and images. Without parameters, removes well-known tracking parameters such as `utm_source` or `fbclid`, listed in the [engine source code](https://github.com/OpenTermsArchive/engine/blob/main/src/archivist/extract/exposedFilters.js). Declaring parameters replaces this default list."
>}}

With the default parameters:

```json
"filter": [
    "removeQueryParams"
]
```

```diff
- <p>Read the <a href="https://example.com/example-page?utm_source=OGB&fbclid=IwAR2xK9&lang=en">list of our affiliates</a>.</p>
+ <p>Read the <a href="https://example.com/example-page?lang=en">list of our affiliates</a>.</p>
```

With explicit parameters:

```json
"filter": [
    {
        "removeQueryParams": ["utm_source", "utm_medium"]
    }
]
```

```diff
- <p>Read the <a href="https://example.com/example-page?utm_source=OGB&utm_medium=website&lang=en">list of our affiliates</a>.</p>
+ <p>Read the <a href="https://example.com/example-page?lang=en">list of our affiliates</a>.</p>
```

To keep the default parameters and remove additional ones, declare the filter twice, as filters are applied in order:

```json
"filter": [
    "removeQueryParams",
    {
        "removeQueryParams": ["ref"]
    }
]
```

```diff
- <p>Read the <a href="https://example.com/example-page?utm_source=OGB&ref=footer&lang=en">list of our affiliates</a>.</p>
+ <p>Read the <a href="https://example.com/example-page?lang=en">list of our affiliates</a>.</p>
```

{{< /refItem >}}

{{< refItem
    name="convertSpacesToStandard"
    description="Replaces Unicode space separators, such as non-breaking spaces or narrow no-break spaces, with a regular space in text content."
>}}

```json
"filter": [
    "convertSpacesToStandard"
]
```

```diff
- <p>Read the list of our&nbsp;affiliates.</p>
+ <p>Read the list of our affiliates.</p>
```

{{< /refItem >}}
