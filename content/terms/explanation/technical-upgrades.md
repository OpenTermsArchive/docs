---
title: "Technical upgrades"
weight: 5
---

# Technical upgrades

## What is the technical upgrades process

The technical upgrade process creates new versions by re-extracting content from the latest snapshots when there are changes not in service terms content, but in the system that extracts them (declarations, filters, engine, or dependencies).

## Why technical upgrades are important

Technical upgrades solve the critical problem of **distinguishing between actual content changes and extraction improvements**.

Without technical upgrades, improving a declaration would trigger false notifications. For example, if terms have sections A, B, and C but the declaration only extracted A and B, adding section C would make the next version appear to include new content, triggering a notification even though the service's terms never changed.

With technical upgrades, the system re-extracts from the current snapshot using the improved declaration and creates a new version, that includes section C, marked as a technical upgrade. Next regular tracking then compares against this upgraded version, so only actual content changes trigger notifications.

## How technical upgrades work

For each tracked terms:

1. Retrieve the latest snapshot for each source document of the terms
2. Re-extract content using latest declarations and engine code
3. Create a new version marked as a technical upgrade

## Types of changes handled

1. Declaration changes: updates to selectors, filters, or removal rules
2. Engine changes: updates to the core extraction logic
3. Dependency changes: updates to libraries affecting extraction (e.g., HTML-to-Markdown conversion)

## Behavior for different scenarios

### Selector or filter changes

Example:

```json
// Before: missing section C
{
  "Privacy Policy": {
    "fetch": "https://example.com/privacy",
    "select": ".section-a, .section-b"
  }
}

// After: includes all relevant sections
{
  "Privacy Policy": {
    "fetch": "https://example.com/privacy",
    "select": ".section-a, .section-b, .section-c"
  }
}
```

What happens:

- Retrieves the latest snapshot
- Re-extracts content using updated selectors and/or filters
- Creates a new version marked as a technical upgrade

### Adding new source documents to combined terms

Example:

```json
// Before: 2 source documents
{
  "Community Guidelines": {
    "combine": [
      { "id": "main", "fetch": "https://example.com/community" },
      { "id": "hate-speech", "fetch": "https://example.com/community/hate-speech" }
    ]
  }
}

// After: 3 source documents
{
  "Community Guidelines": {
    "combine": [
      { "id": "main", "fetch": "https://example.com/community" },
      { "id": "hate-speech", "fetch": "https://example.com/community/hate-speech" },
      { "id": "violence", "fetch": "https://example.com/community/violence" }  // NEW
    ]
  }
}
```

What happens:

- Fetches and records snapshots **only for new source documents**
- Retrieves latest snapshots for existing source documents
- Extracts all documents and creates one new combined version marked as a technical upgrade

### Location changes

What happens:

Nothing, technical upgrades do not fetch from new locations. Location changes represent a genuine change in how the service publishes their terms and should be tracked as a regular content change.

### Engine and dependency changes

When you upgrade the engine or dependencies, extraction logic may change even if declarations remain the same.

Examples:

- Engine improves HTML entity decoding so `&nbsp;` entities are converted to regular spaces instead of appearing literally in versions
- Library improves table support so complex tables preserve their structure as Markdown tables instead of being converted to plain text

What happens:

- Retrieves the latest snapshot for each terms
- Re-extracts using updated code
- Creates a new version marked as a technical upgrade if output differs

## Technical upgrade markers

Versions created during technical upgrades are marked with:

- `isTechnicalUpgrade: true` in version metadata
- Commit message specify it by starting by `Apply technical or declaration upgrade on …`

## Running technical upgrades

Technical upgrades run automatically with `npx ota track`.

To run them separately, see the [apply-technical-upgrades command]({{< relref "api/cli#applying-technical-upgrades" >}}).
