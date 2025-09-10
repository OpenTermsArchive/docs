---
title: "Filters"
weight: 3
---

# Filters

Filters enable solving [noise]({{< relref "/terms/guideline/declaring/#usual-noise" >}}) issues in versions that cannot be addressed with direct selection or removal of content using selectors.

## When filters are needed

Use filters when:

- **Content selectors are insufficient**, for example when noise appears within content that can't be targeted with CSS selectors or [range selectors]({{< relref "terms/explanation/range-selectors" >}}) with the [`select`]({{< relref "terms/reference/declaration/#ref-select" >}}) and [`remove`]({{< relref "terms/reference/declaration/#ref-remove" >}}) properties.
- **Content is dynamically generated**, for example when elements change on each page load with changing classes or IDs that cannot be targeted with [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).
- **Complex tasks are needed**, for example when content transformation is required such as converting images to base64 to store them in the terms version or converting date-based content to a stable format (like “Updated X days ago” to “Last updated on YYYY-MM-DD”).

## How filters work

Filters are JavaScript functions that can manipulate the DOM structure directly. They modify the document structure and content in-place.

## Filter design principles

Filters should follow these core principles:

- **Specific**: target only the noise to remove. Avoid broad selectors that might accidentally remove important content.

  > For example, if a filter converts relative dates to absolute dates, make sure to scope the targeted dates. This might translate to selecting with `.metadata time`, not `time`, which might also affect important effective dates within the terms content.

- **Idempotent**: filters should produce the same result even if run multiple times on their own output. This ensures consistency.

  > For example, if a filter adds section numbers like "1." to headings, it should check if the numbers already exist, to prevent "1. Privacy Policy" from becoming "1. 1. Privacy Policy" on repeated runs.

- **Efficient**: DOM queries should be optimised and filters should avoid unnecessary operations, processing only the elements needed.

  > For example, if a filter updates timestamp elements with a specific class, using `document.querySelectorAll('.timestamp')` is more efficient than `document.querySelectorAll('*')` followed by filtering for timestamp elements.

- **Safe**: filters must not accidentally remove important content. The generated version should always be checked after adding a filter to ensure it still contains the whole terms content.
