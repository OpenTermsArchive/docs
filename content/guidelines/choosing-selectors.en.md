---
title: "Choosing selectors"
---

# Choosing selectors

Selectors are an important part of the Open Terms Archive mechanism to target the meaningful parts of terms that should be stored, those that affect users rights and duties. And they can eventually be used to remove parts we don't want recorded, such as headers, footer and navigation.

These are CSS Selectors, based on [W3C standard](https://www.w3.org/TR/selectors-3/). If you want to learn how to use them, you will find a very wide range of online resources, but definitly that the Mozilla [learning document](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) could be a good starting point (or reminder).

## What's at stake?

The design of terms web pages evolves over time, leads to changes in the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) which may render ineffective the selectors you choose. That means they may no longer target the desired parts, what we want to avoid in order to continue recording terms changes. When this happens, you will need to redefine a new selector which targets the meaningful parts of the terms, that takes energy and time.

It is possible to reduce the frequency of human intervention on the selectors by choosing those that are the most capable of continuing to target the desired part of the document whatever changes occur on the page.

Let's take a closer look. **But bear in mind that there's no one right way to do this, it remains intrinsically subjective and page contextual.**

## How to choose stable selectors ?

If it is possible, choose selectors:

- which are the simplest possible, for exemple `#pageContent` or `[role="main"]`. You could find helpful to determine the weight of their [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), for exemple `#article` (with 1-0-0 specificity) is better than `.bodyClass .sectionClass .parentClass [id="article"]` (with 0-4-0 specificity)
- whose their names indicate directly what they are targeting, for exemple `.tos` or `#legal-notice` because we can hypothesise that whatever changes are made to the design of the page this type of selector increases the chances to continue to target to the desired content

You should also keep in mind that:

- making a wide selection and then remove the non-significant parts within this selection is an interesting way to avoid missing out some content
- using [range selectors](https://docs.opentermsarchive.org/contributing-terms/#range-selectors) enable to not be constrained by the CSS box model and select content that starts in one box and ends in another box that are not in the same tree.

Avoid, as much as possible:

- class names being or containing series of alphanumeric characters, for exemple `.dez68h` or `.toss-cpoxw7`
- deep nesting of elements, for exemple `main > div > #article > .tos`
- use of CSS pseudo-class, for exemple `.tos > div:nth-child(2)`

### Exemple 1

For the following HTML code

```html
...
  <div id="globalContainer" role="main">
    <div class="tos_title">Privacy Policy</div>
    <div class="article_content clearfix" id="tos_content">
       <div class="_3zdf8p">
          <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat. Labore eiusmod eiusmod irure enim veniam excepteur commodo laborum et deserunt amet incididunt. Duis id ipsum consequat nulla veniam Lorem elit.<p>
          <p>...</p>
        </div>
    </div>
  </div>
...
```

✅ Some stable selectors could be:

```json
"select": "[role="main"]"
```

or

```json
"select": [
  ".tos_title",
  "#tos_content"
]
```

❌ And unstable selectors might look like:

```json
"select": "._3zdf8p"
```

or

```json
"select": "#tos_content > div > p"
```

### Exemple 2

For the following HTML code

```html
...
  <div class="container">
    <div id="navsub">
      <ul>
        <li class="nav-item">Terms and Conditions of Use</li>
        <li class="nav-item"><a href="/us/legal/copyright-policy/">Copyright Policy</a></li>
        <li class="nav-item"><a href="/us/legal/privacy-policy/">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h1>Terms and Conditions of Use </h1>
      <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat. Labore eiusmod eiusmod irure enim veniam excepteur commodo laborum et deserunt amet incididunt. Duis id ipsum consequat nulla veniam Lorem elit.<p>
      <p>...</p>
      <div class="advertising">...</div>
    </div>
  </div>
  <div class="container">
    <footer class=".mh-footer">
      ...
    <footer>
  </div>
...
```

✅ A stable selector could be:

```json
"select": [
  {
    "startAfter": "#navsub",
    "endBefore": ".mh-footer"
  }
],
"remove": ".advertising",
```

❌ And an unstable selector might look like:

```json
"select": ".container:first-child > div",
```
