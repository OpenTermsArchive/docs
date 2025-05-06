---
title: Manage a custom terms type
weight: 6
---

# How to manage a custom terms type

When tracking terms and conditions across different services, you might encounter situations where a service uses terms types that aren't yet supported by Open Terms Archive.
This guide will help you handle these custom terms types effectively, whether you're working on a new collection or expanding an existing one.

## Prerequisites

Before proceeding with using a custom terms type, please double-check that the type you're considering doesn't already exist in the supported terms types list. Different services often use different names for the same type of terms. For instance, "Terms and Conditions" might be called "Terms of Use" or "Terms of Service" by different services.

Review the [supported types list](https://github.com/OpenTermsArchive/terms-types/blob/main/termsTypes.json) carefully to ensure the terms type you want to track is not already supported under a different name. If it does, use the associated type in your declaration. If you are sure it's not supported, you can proceed with the following steps. If you're unsure, you can ask for help in the [Open Terms Archive community]({{< relref "community/how-to/join" >}}).

## Long-term solution

The recommended approach is to contribute your new terms type to the official list. This enables collections interoperability and comparison of terms across different services.

You can suggest new terms type for the official list via the dedicated [contribution process](https://github.com/OpenTermsArchive/terms-types/blob/main/CONTRIBUTING.md#add-new-terms-types).

Inclusion in the official terms types list has a delay for consensus building. In the meantime, you can proceed with the following temporary solutions.

## Temporary solutions

### For proof of concept or development

As the validation is primarily intended for production environments to maintain consistency, if you're working on a proof of concept or development environment that won't be deployed to production, you can safely ignore terms types validation errors, the whole tracking process will still work.

### Using a forked version

If you need a faster solution for production use, you can fork the terms-types repository and add your custom type:

1. Fork the [terms-types repository](https://github.com/OpenTermsArchive/terms-types)
2. Add your custom terms type to the `termsTypes.json` database file
3. Update your collection's `package.json` to use your fork:

```json
{
  "dependencies": {
    "@opentermsarchive/engine": "5.0.3",
    "@opentermsarchive/terms-types": "<your-organization-or-username>/terms-types#main"
  }
}
```

This solution is only recommended as a **temporary** solution, it is strongly recommended that you also submit the new terms type through the process describe in previous section. This way, you'll contribute to the community by helping maintain consistency across collections and enables better comparison of terms across different services, and also eventually stop maintaining a custom fork.
