---
title: "Built-in filters"
---

# Built-in filters

This reference documentation details all available built-in filters that can be used to avoid noise in the terms content.

## Filters

{{< refItem
    name="removeQueryParams"
    description="Removes specified query parameters from URLs in links and images within the terms content"
>}}

```json
"filter": [
    {
        "removeQueryParams": ["utm_source", "utm_medium"]
    }
]
```

Result:

```diff
- <p>Read the <a href="https://example.com/example-page?utm_source=OGB&utm_medium=website&lang=en">list of our affiliates</a>.</p>
+ <p>Read the <a href="https://example.com/example-page?lang=en">list of our affiliates</a>.</p>
```

{{< /refItem >}}
