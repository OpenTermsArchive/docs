---
title: "Understanding terms types"
linkTitle: Terms types
weight: 1
---

# Terms types: a foundation of a consistent archive

## What are terms types?

Terms types are standardized categories that classify the different kinds of terms and conditions documents, serving as a common language for organizing and comparing terms across services.

## Why standardized terms types are needed

Services often use different names for the same type of terms. For instance, "Terms and Conditions" might be called "Terms of Use" or "Terms of Service" by different services. This kind of inconsistency creates significant challenges in finding and comparing similar terms documents across different services. It also makes it difficult to maintain a consistent structure in all collections, and to ensure a comprehensive coverage of all legal documents. 

Without standardization, activists, journalists, researchers, lawmakers and regulators struggle to track changes, conduct comparative analyses, and maintain organized collections of terms. Standardized terms types serve as a common language that bridges these naming variations, enabling more efficient organization, improved searchability, and clearer understanding of the legal landscape across different services.

## How Open Terms Archive handles terms types

Open Terms Archive maintains an [official list of terms types](https://github.com/OpenTermsArchive/terms-types) that serves as a reference for all collections. This standardization is used for automated validation of service declarations, ensuring that all terms are properly categorized.

When you encounter a validation error related to terms type, it looks like this:

```shell
   1) Service declarations validation
       <service_name>
         valid declaration schema:
      Error:

 data/terms must be equal to one of the allowed values (in entire file)
```

This means the terms type you're trying to use isn't in the official list of supported types.

## When a new terms type needs to be suggested

Situations may arise where a terms type used by a service is not yet included in the official list. Such situations typically occur when:

- A document is specific to a domain that is not yet covered by Open Terms Archive collections
- A service uses a unique name for their document
- A new type of document emerges in the digital landscape
- A service combines multiple documents in an unusual way

## What are the benefits of contributing new terms types

When a new terms type is suggested to the Open Terms Archive community and accepted, it contributes to a larger ecosystem and has the following benefits:

- It makes the new terms type available to all collections
- It eliminates the need for custom solutions or forks for validating terms types
- It helps build a more comprehensive shared vocabulary
- It enables better comparison and analysis of terms across services

To contribute a new terms type, follow the [contribution process](https://github.com/OpenTermsArchive/terms-types/blob/main/CONTRIBUTING.md#add-new-terms-types) in the `terms-types` repository.
