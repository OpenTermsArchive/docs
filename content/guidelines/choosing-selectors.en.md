---
title: "Choosing selectors"
---

# Choosing selectors

Selectors are used in Open Terms Archive declarations to specify the parts of documents that should be recorded.

## What are selectors

The “selectors” referred to are those defined by the [W3C Selectors standard](https://www.w3.org/TR/selectors/), more commonly known as “CSS Selectors”.

A good introduction to CSS Selectors can be found on [mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## What's at stake?

The design of web pages containing terms can evolve over time, leading to changes in their HTML (more precisely, to their [DOM](https://en.wikipedia.org/wiki/Document_Object_Model)) which may render ineffective the selectors that were initially chosen. That means they may no longer target the significant parts, breaking the ability to continuously record terms changes. When this happens, selectors must be updated to specify the meaningful parts of the terms.

It is possible to reduce the frequency of human intervention on the selectors by choosing some that are least likely to become obsolete even when changes occur on the document structure.

## How to choose stable selectors?

While there is no single right way to choose stable selectors, as it remains intrinsically subjective and dependent on the document itself, following the guidelines below is likely to yield stable selectors.

### Choose selectors

- Which are the simplest possible, for example `#pageContent` or `[role="main"]`. You could find helpful to determine the weight of their [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), for example `#article` (with 1-0-0 specificity) is better than `.bodyClass .sectionClass .parentClass [id="article"]` (with 0-4-0 specificity)
- Whose names are representative of the parts they select. For example: `.tos` or `#legal-notice`. Indeed, we can assume that no matter which changes are made to the design of the page, this type of selector is most likely to still select the desired content.

### Keep in mind

- Using [range selectors](https://docs.opentermsarchive.org/contributing-terms/#range-selectors) enables to select content that starts in one block and ends in another block that are not in the same tree.

### Avoid

- Class names being or containing series of alphanumeric characters, such as `.dez68h` or `.toss-cpoxw7`. Those are most likely to be generated and to change on the next page update.
- Deep nesting of elements, such as `main > div > #article > .tos`. The likelihood that at least one block in the tree changes on a page update increases, making the selector brittle.
- Pseudo-classes, such as `div:nth-child(2)`. Such selectors rely not only on the targeted content structure but also on the content around it, making the selector brittle.

## Strategies

### Start wide, narrow down over time

If in doubt about a selector, prefer making a wide selection and then removing the non-significant parts within this selection: obsolete selectors that include too much are more likely to be spotted than too specific ones that will not include new content, as anyone reading the versions changes will spot irrelevant content being added, but will not see content that is not tracked.

### “Good enough”

Do not spend too much time trying to find the perfect selectors. Reviewers, in particular, will often have to conclude to “good enough” where their preference or the other authors are equally valid, since assumptions are made about the website DOM structure and how it may change in the future. It is more important to regularly review versions and react quickly to correct selectors than to find the perfect ones up front.

## Examples

### Example 1

For the following HTML code:

```html
...
  <div id="globalContainer" role="main">
    <div class="tos_title clearfix">Privacy Policy</div>
    <div class="article_content" id="tos_content">
       <div class="_3zdf8p">
          <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat.<p>
          <p>...</p>
        </div>
    </div>
  </div>
...
```

✅ Some stable selectors could be:

```json
"select": "[role=main]"
```

or

```json
"select": ".tos_title, #tos_content"
```

❌ Some unstable selectors could be:

```json
"select": ".clearfix, ._3zdf8p"
```

or

```json
"select": "#globalContainer > div:first-child, div#tos_content > div"
```

### Example 2

For the following HTML code:

```html
...
  <div class="container">
    <div id="nav-menu">
      <ul>
        <li class="nav-item">Terms and Conditions of Use</li>
        <li class="nav-item"><a href="/us/legal/copyright-policy/">Copyright Policy</a></li>
        <li class="nav-item"><a href="/us/legal/privacy-policy/">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h1>Terms and Conditions of Use </h1>
      <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat.<p>
      <p>...</p>
      <div class="advertising">...</div>
    </div>
  </div>
  <div class="container">
    <footer class=".footer">
      ...
    <footer>
  </div>
...
```

✅ A stable selector could be:

```json
"select": [
  {
    "startAfter": "#nav-menu",
    "endBefore": ".footer"
  }
],
"remove": ".advertising",
```

❌ And an unstable selector could be:

```json
"select": ".container:first-child > div",
```
