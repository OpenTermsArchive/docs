---
title: "Filters"
weight: 3
---

# Filters

Filters solve noise issues in terms versions that cannot be addressed with direct selection or removal of content using CSS selectors or range selectors.

## Why filters are needed

Web pages often contain dynamically generated content or content that cannot be targeted with CSS selectors that creates noise in the archive:

- Tracking parameters in URLs, for example `utm_source`, `utm_medium`, …
- Content that are date based and can change between visits, for example "Updated X days ago" can be converted to a "Last updated on YYYY-MM-DD".
- Dynamic elements with changing classes or IDs

Without filters, this dynamic content creates changes that are not meaningful to the terms.

## How filters work

Filters are JavaScript functions that receive a JSDOM document instance and can manipulate the DOM structure directly. They modify the document structure and content in-place and they run sequentially in the order specified in the declaration.

## Filter design principles

When designing filters, follow these core principles:

- **Be specific**: Target only the noise you want to remove. Avoid broad selectors that might accidentally remove important content.
- **Be safe**: Ensure your filter doesn't accidentally remove important content. Always check that the generated version still contains the whole terms content.
- **Be idempotent**: Your filter should produce the same result even if run multiple times on its own output. This ensures consistency and prevents unexpected behavior.
- **Be efficient**: Use efficient DOM queries and avoid unnecessary operations. Process only the elements you need to modify.

## When to use filters

Use filters when:

- **CSS selectors are insufficient**: When noise appears within content that can't be targeted with selectors or [range selectors]({{< relref "terms/explanation/range-selectors" >}}) with the [`select`]({{< relref "terms/reference/declaration/#ref-select" >}}) and [`remove`]({{< relref "terms/reference/declaration/#ref-remove" >}}) properties.
- **Meaningful content is dynamic**: When elements change on each page load, for example "Updated X days ago" can be converted to a "Last updated on YYYY-MM-DD".
- **Patterns are complex**: When simple removal isn't possible, for example removing all the tracking parameters in URLs.
