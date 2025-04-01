---
title: "Test your declarations"
weight: 4
---

# Test your declarations

When creating or modifying service declarations, it’s important to verify they work as expected before starting to track in production. The Open Terms Archive engine provides automated testing tools to that end.

The basic usage to test all declarations in a collection is:

```sh
npx ota validate declarations
```

## Testing specific services

When iterating over a specific declaration, or to narrow down testing in larger collections, the `--services` and `--terms` options enable testing a single service declaration, or even single terms:

```sh
npx ota validate declarations --services "<service-name>"
npx ota validate declarations --services "<service-name>" --terms "<terms-type>"
```

## Schema validation only

During initial development, it is useful to check that the JSON structure is correct before even testing the actual document fetching. The `--schema-only` option enables faster validation by only checking the declaration structure without fetching any documents:

```sh
npx ota validate declarations --schema-only
```

The same options for targeting specific services and terms are available.

## Formatting

To ensure formatting consistency across all declarations, a linter is provided:

```sh
npx ota lint
```

To automatically apply the default Open Terms Archive formatting options:

```sh
npx ota lint --fix
```

The same options for targeting specific services and terms are available.
