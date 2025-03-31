---
title: "Test your declarations"
weight: 4
---

# Test your declarations

When creating or modifying service declarations, it's important to verify they work as expected. Let's see how to test your declarations in different ways.

## Full testing

To test your declarations by actually fetching the documents and validating the entire process:

```sh
npx ota validate declarations
```

It is also possible to test a single service declaration:

```sh
npx ota validate declarations --services "<service-name>"
```

Even a single terms of a service can be tested:

```sh
npx ota validate declarations --services "<service-name>" --terms "<terms-type>"
```

## Schema validation only

For quicker validation that only checks the declaration structure without fetching any documents:

```sh
npx ota validate declarations --schema-only
```

This is useful during initial development to ensure your JSON structure is correct before testing the actual document fetching.

Same options as for the full test are available.

## Linting declarations

To ensure consistency across all declarations, you should also run the linter:

```sh
npx ota lint
```

Same options as for the full test are available.

To automatically fix linting errors:

```sh
npx ota lint --fix
```

This will format your declaration files according to the project's standards.
