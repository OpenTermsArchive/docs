---
title: "Built-in filters"
---

# Built-in filters

This reference details all available built-in [filters]({{< relref "terms/explanation/filters" >}}) that can be applied to avoid noise in versions.

{{< refItem
    name="removeQueryParams"
    description="Removes specified query parameters from URLs in links and images."
>}}

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

{{< /refItem >}}
