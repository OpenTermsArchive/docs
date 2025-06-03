---
title: Service naming
weight: 5
---

## Service name

### Casing

- In order to find the service name casing, rely first on the page title (easily found in search results). Do not rely on the logo as it can be stylized differently. Example with Facebook:
![facebook search](https://user-images.githubusercontent.com/222463/91416484-baaa3a00-e84f-11ea-94cf-8805d17aa711.png)
- If it is still ambiguous, rely on Wikipedia as a source. However, make sure to differentiate the _service_ from the _provider_ company's name. Example with “DeviantArt”, a service (which used to be stylized deviantArt until 2014) by the limited liability company “deviantArt”:
![deviantArt search](https://user-images.githubusercontent.com/222463/91416936-5b98f500-e850-11ea-80fe-a50be27356e3.png)

### Terms used by several services

- If you want to add terms which happen to be shared with another service from the same parent company, be specific in naming the exact service you want to track. For instance, you may find that a company like Github uses the same terms for its code hosting and its AI assistant. While this does not mean that the terms for GitHub (code hosting) are the only terms of GitHub Copilot (assistant), it does mean that these two services have terms that are represented in the same document. In tracking terms for one of these services, say Github Copilot, be specific in naming it as the service you want to track. This way, if GitHub was to introduce dedicated terms for each of these services in the future, their locations can be updated without having to create new terms since the service already existed before.

- - -

## Service ID

### Normalisation

1. For non-roman alphabets (Cyrillic, ideograms…), use the service-provided transliteration.
2. For diacritics: normalise the string to its `NFD` normal UTF form, then remove the entire combining character class. [Details](https://stackoverflow.com/a/37511463/594053).
3. As a last resort, use the domain name.

### Provider prefixing

- If you encounter terms you want to add to a service, yet find that it would override already-declared terms for this service such as Terms of Service or Privacy Policy, and that the only solution you see would be to create a new terms type that would contain the name of the feature, then it is likely you should declare a new service, potentially duplicating existing terms.

> Example: the Facebook Community Payments terms are Terms of Service. The only way to declare them in the Facebook service would be to add a “Community Payments Terms” terms type as they would otherwise conflict with Facebook's Terms of Service. It is better to declare a new service called “Facebook Payments” with its own Terms of Service. It turns out that this service also has a developer agreement, independent from the main Facebook service.

![Facebook Community Payments](https://user-images.githubusercontent.com/222463/91419033-3a85d380-e853-11ea-8468-42a536b7e87b.png)

- As a last resort, rely on the trademark.

Example: Apple's App Store uses only generic terms (“app” and “store”). However, it is of common use to mention “the App Store” as Apple's. To help us decide whether it should be prefixed or not, we can check that [Apple has trademarked “App Store”](https://www.apple.com/legal/intellectual-property/trademark/appletmlist.html). The service can thus be named “App Store”, without prefixing.

