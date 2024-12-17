---
title: "Choosing selectors"
---

# Choosing selectors

Selectors are used in Open Terms Archive declarations to specify the parts of documents that should be recorded.

## What are selectors

Selectors are used in the [`select`]({{< relref "terms/reference#select" >}}) and [`remove`]({{< relref "terms/reference#remove" >}}) keys of an Open Terms Archive declaration.

The “selectors” referred to are defined by the [W3C Selectors standard](https://www.w3.org/TR/selectors/), more commonly known as “CSS Selectors”.

An easy-to-read introduction to CSS Selectors can be found on [mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## Choosing durable selectors eases maintenance

The design of web pages containing terms can evolve over time, leading to changes in their HTML (more precisely, to their [DOM](https://en.wikipedia.org/wiki/Document_Object_Model)) which may render ineffective the selectors that were initially chosen. That means they may no longer target the significant parts, breaking the ability to continuously record terms changes. When this happens, selectors must be updated to specify the meaningful parts of the terms.

It is possible to reduce the frequency of human intervention on the selectors by choosing some that are least likely to become obsolete even when changes occur on the document structure. Decreasing the cost of this maintenance increases the likelihood that terms are continuously tracked.

## Guidelines

While there is no single right way to choose durable selectors, as it remains intrinsically subjective and dependent on the document itself, following the guidelines below is likely to yield durable selectors.

### Simple

Prefer [simple selectors](https://www.w3.org/TR/selectors/#simple) over compound ones, and compound ones over [combinator](https://www.w3.org/TR/selectors/#combinators) ones, as they are more readable and make less assumptions on future changes.

In particular, avoid deep nesting of elements and pseudo-classes. Such selectors rely not only on the targeted content structure but also on the content around it. The likelihood that at least one block in the tree changes on a page update increases, making the selector brittle.

#### Examples

- `#content` or `[role="main"]` are better than `#content .inner` or `[role="main"] > .content-block`.
- `main > div > #article > .tos` is a bad selector because of deep nesting.
- `div:nth-child(2)` is a bad selector because of the usage of a pseudo-class.

### Named

Prefer selectors whose names are representative of the parts they select, as they are evidence of an intention by the service provider, and thus more likely to stay valid through design changes.

Conversely, avoid class names being or containing series of alphanumeric characters. Those are most likely to be generated and to change on the next page update.

#### Examples

- `.tos` or `#legal-notice` are better than `main` or `.content`.
- `.dez68h` or `.tos-cpoxw27` are bad selectors because they are likely automatically generated.

{{< details summary="Example with HTML" >}}

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

✅ Some durable selectors could be:

```json
"select": "[role=main]"
```

or

```json
"select": [
  ".tos_title",
  "#tos_content"
]
```

❌ Some brittle selectors could be:

```json
"select": [
  ".clearfix",
  "._3zdf8p"
]
```

or

```json
"select": [
  "#globalContainer > div:first-child",
  "div#tos_content > div"
]
```

{{< /details >}}

### Higher specificity

Prefer selectors with higher [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), as they are less likely to select other content when the rest of the document changes.

#### Examples

- `#article .section` (with 1-1-0 specificity) is better than `body .section .tos` (with 0-2-1 specificity).

### Accuracy over durability, durability over exhaustiveness

It should be clear that the most important point of a declaration is to track entire terms. Legitimate considerations on selector durability can not be used as arguments justifying not tracking content that impacts users rights and duties.

On the other hand, content that is usually tracked but is not directly impactful on rights and duties, such as last updated date or document title, may be occasionally ignored if it makes selectors excessively brittle.

#### Example

{{< details summary="Example with HTML" >}}

For the following HTML code:

```html
<body>
  <p>Terms and Conditions of Use </p>
  <p class="af23jf45">This one weird trick will make your belly thinner! Click here!</p>
  <div id="inner-container">
    <p>Deserunt ea reprehenderit esse dolor adipisicing consectetur aliquip ex magna consequat.<p>
    <p>...</p>
  </div>
  <p class="xlms051">For a limited time only, get 50% off our yearly plans!</div>
  <p>Last update: 11 January 2013</p>
</body>
```

✅ A durable selector could be:

```json
"select": [
  "#inner-container"
]
```

❌ And a brittle selector could be:

```json
"select": [
  "body"
],
"remove": [
  ".af23jf45",
  ".xlms051"
]
```

{{< /details >}}

## Strategies

### Start wide, narrow down over time

If in doubt about a selector, prefer making a wide selection and then removing the non-significant parts within this selection: obsolete selectors that include too much are more likely to be spotted than too specific ones that will not include new content, as anyone reading the versions changes will spot irrelevant content being added, but will not see content that is not tracked.

### Use range selectors

[Range selectors]({{< relref "terms/reference#range-selectors" >}}) enable to select content that starts in one block and ends in another block that are not in the same tree. While they are more complex than element selectors, it is preferable to use a range selector whose start and end abide by the guidelines above than to use a bad plain selector.

#### Example

{{< details summary="Example with HTML" >}}

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

✅ A durable selector could be:

```json
"select": [
  {
    "startAfter": "#nav-menu",
    "endBefore": ".footer"
  }
],
"remove": ".advertising",
```

❌ And a brittle selector could be:

```json
"select": ".container:first-child > div",
```

{{< /details >}}

### “Good enough”

Do not spend too much time trying to find the perfect selectors. Reviewers, in particular, will often have to conclude to “good enough” where their preference or the other authors are equally valid, since assumptions are made about the website DOM structure and how it may change in the future. It is more important to regularly review versions and react quickly to correct selectors than to find the perfect ones up front.
