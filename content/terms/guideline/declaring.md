---
title: "Declaring terms"
aliases:
  - /guidelines/declaring/
  - /terms/guidelines/declaring/
---

# Declaring terms

## Service name

### Casing

- In order to find the service name casing, rely first on the page title (easily found in search results). Do not rely on the logo as it can be stylised differently. Example with Facebook:
![Facebook search](https://user-images.githubusercontent.com/222463/91416484-baaa3a00-e84f-11ea-94cf-8805d17aa711.png)
- If it is still ambiguous, rely on Wikipedia as a source. However, make sure to differentiate the _service_ from the _provider_ company's name. Example with “DeviantArt”, a service (which used to be stylised deviantArt until 2014) by the limited liability company “deviantArt”:
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

- - -

## Usual noise

Noise is unwanted content in versions.

### Irrelevant content

The first type of noise we try to remove is content that is not **relevant legally speaking**, and that harms **terms readability**.

**CSS selectors** are a first step as they permit to select an area instead of the whole page, but they let pass through content such as headers, footers, buttons, drop-down lists...

**Filtering** permits to get rid of the remaining irrelevant content.

A drop-down list lets users select which terms they would like to see but this list doesn't interest us in the final version.

**HTML file :**

```html
<div class="filter-holder">
  <select class="filter-options">
      <option value="https://www.redditinc.com/policies/user-agreement" selected>User Agreement</option>
      <option value="https://www.redditinc.com/policies/privacy-policy">Privacy Policy</option>
      <option value="https://www.redditinc.com/policies/content-policy">Content Policy</option>
      <option value="https://www.redditinc.com/policies/broadcasting-content-policy">Broadcasting Content Policy</option>
  </select>
</div>
<h1>Reddit User Agreement</h1>
```

**Markdown file :**

```markdown
User Agreement Privacy Policy Content Policy Broadcasting Content Policy Moderator Guidelines Transparency Report 2017 Transparency Report 2018 Guidelines for Law Enforcement Transparency Report 2019

Reddit User Agreement
=====================
```

**Wished Markdown file :**

```markdown
Reddit User Agreement
=====================
```

#### Solution

Target elements in the `remove` property of a declaration.

### Invisible HTML elements

The second type of noise we try to remove are **elements invisible in the original HTML page** that **become visible in Markdown** or that **disrupt Markdown rendering**.

- **Invisible elements that become visible in Markdown** are usually hidden in the original page via CSS stylesheets.

An invisible paragraph (with display:none style) visible in the Markdown.

**HTML file :**

```html
<h1>Twitter Terms of Service</h1>
<p style="display: none;">goglobalwithtwitterbanner</p>
```

**Markdown file :**

```markdown
Twitter Terms of Service
========================
goglobalwithtwitterbanner
```

**Wished Markdown file :**

```markdown
Twitter Terms of Service
========================
```

**Invisible elements that disrupt Markdown rendering** usually do so by being taken into account by HTML to Markdown conversion, whereas they were not in the original page.

Invisible links disrupts numbering.

**HTML file :**

```html
<h2>AGREEMENT</h2>
<ol>
  <a id="1"></a>
  <li>
    <span>Eligibility</span>
  </li>
  <div class="divider"></div>
  <a id="2"></a>
  <li>
    <span>Term, Terms and Termination</span>
  <li>
</ol>
```

**Markdown file :**

```markdown
AGREEMENT
---------

2.  Eligibility

5.  Term, Terms and Termination
```

**Wished Markdown file :**

```markdown
AGREEMENT
---------

1.  Eligibility

2.  Term, Terms and Termination
```

#### Solution

Target elements in the `remove` property of a declaration.

### Content generating frequent and legally irrelevant changes

The third type of noise we try to remove is **content whose changes are both too frequent and legally irrelevant**.
We found that those contents are usually hypertext links, since two links can point to the same website yet they can be written differently. A case in point are links passing parameters : a change in parameters will not change where the link point at.

A link has a parameter 'h=' changing too frequently and irrelevant to the adress the link point to.

**HTML file :**

```html
You can only use our copyrights or <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fen.facebookbrand.com%2Ftrademarks%2F&amp;h=AT0_izDHO3yJuXJuJJeWQyJFVilQqIDOA3oMwr51t6gEq1q4UbyH2VtU7UhNzhg1LH0YzUHAjw0TADuoufWgb_YEuzoFpvyIR8_4rkUfjDXxUw3q1KmpsYL_H3C4OIm3xHzrUZRatmWQ6PAk">trademarks (or any similar marks)</a>
```

**Markdown file :**

```markdown
You can only use our copyrights or [trademarks (or any similar marks)](https://l.facebook.com/l.php?u=https%3A%2F%2Fen.facebookbrand.com%2Ftrademarks%2F&h=AT1XEFWtw25SbFSSD7W2MOS1LQIsUwaUrq4qh5dNmI21qm42JE5lUiv9g8MsTSnvi3DjYfJxOPoBxEKyBQjo7qkxfcUkDzedQzBLWgGJYWC6CwDBI0S5pefB4oiuh8Jo63phreoUKQ3BF4O5)
```

**Wished Markdown file :**

```markdown
You can only use our copyrights or [trademarks (or any similar marks)](https://l.facebook.com/l.php?u=https%3A%2F%2Fen.facebookbrand.com%2Ftrademarks%2F)
```

#### Solution

Write a filter in the declaration.
