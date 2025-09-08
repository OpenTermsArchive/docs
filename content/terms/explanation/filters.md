---
title: "Filters"
weight: 3
---

# Filters

Filters solve [noise]({{< relref "/terms/guideline/declaring/#usual-noise" >}}) issues in terms versions that cannot be addressed with direct selection or removal of content using CSS selectors or range selectors.

## When filters are needed

Filters are necessary when standard CSS selectors and range selectors cannot adequately address noise in terms versions. They provide a solution for complex content manipulation that goes beyond simple selection and removal.

Use filters when:

- **CSS selectors are insufficient**: When noise appears within content that can't be targeted with selectors or [range selectors]({{< relref "terms/explanation/range-selectors" >}}) with the [`select`]({{< relref "terms/reference/declaration/#ref-select" >}}) and [`remove`]({{< relref "terms/reference/declaration/#ref-remove" >}}) properties.
- **Content is dynamically generated**: When elements change on each page load, such as:
  - Tracking parameters in URLs (e.g., `utm_source`, `utm_medium`)
  - Dynamic elements with changing classes or IDs
- **Complex tasks are needed**: When content transformation is needed such as:
  - Converting images to base64 to store them in the terms version.
  - Converting date-based content to a more stable format (e.g., "Updated X days ago" to "Last updated on YYYY-MM-DD")

## How filters work

Filters are JavaScript functions that receive a JSDOM document instance and can manipulate the DOM structure directly. They modify the document structure and content in-place and they run sequentially in the order specified in the declaration.

## Filter design principles

When designing filters, follow these core principles:

- **Be specific**: Target only the noise you want to remove. Avoid broad selectors that might accidentally remove important content. 

  > For example, if your filter converts relative dates to absolute dates, use `.metadata time` not `time` which might also affect important effective dates within the terms content.

- **Be idempotent**: Filters should produce the same result even if run multiple times on their own output. This ensures consistency and prevents unexpected behavior.

  > For example, if your filter adds section numbers like "1." to headings, check if numbers already exist to prevent "1. Privacy Policy" from becoming "1. 1. Privacy Policy" on repeated runs.

- **Be efficient**: Use efficient DOM queries and avoid unnecessary operations. Process only the elements you need to modify.  
  
  > For example, if your filter updates timestamp elements with a specific class, use `document.querySelector('.timestamp')` instead of `document.querySelectorAll('*')` followed by filtering for timestamp elements.

- **Be safe**: Filters should not accidentally remove important content. The generated version should always be checked after adding a filter to ensure it still contains the whole terms content.
