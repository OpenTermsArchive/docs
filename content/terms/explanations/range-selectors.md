---
title: Range selectors
---

## Range selectors

When no unique wrapper element exists for the whole terms content, there is no easy way to select the content with only CSS selectors. Content between two elements in a document can be selected using a range selector, regardless of their DOM position. The concept is inspired by the DOM [Range API](https://developer.mozilla.org/en-US/docs/Web/API/Range), where content is defined by start and end points that may be included or excluded. The format is defined as a JSON object:

```json
{
  "start[Before|After]": "CSS selector that marks where to begin capturing content",
  "end[Before|After]": "CSS selector that marks where to stop capturing content"
}
```

### Example

Let's take an example to see when range selectors can be useful. Given the following HTML:

```html
<html>

<body>
  <main>
    <!-- Breadcrumb Navigation -->
    <ul>
      <li><a href="/">Home</a></li>
      <li>Terms and Conditions</li>
    </ul>

    <!-- Main Content -->
    <h1 id="terms-title">Example Terms</h1>
    <p>Effective as of: January 1, 2024</p>

    <h2>Authorized uses</h2>
    <p>You can use this service in the following cases:</p>

    <ul>
      <li>At home</li>
      <li>In your office</li>
      <li>In a coffee shop</li>
    </ul>
  </main>
  <div>
    <ul id="footer-menu">
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</body>

</html>
```

In this case, there is no unique wrapper element for the terms content which is represented by all elements after the main title in the `main` element. Here selecting the whole `main` would result in selecting elements that are not part of the terms content, like the breadcrumb and sub navigation. The range selector can be used to select the terms content by specifying the main title `#terms-title` as the start point and the footer `#footer-menu` as the end point. The selection starts *before* the main title, so it includes it, and ends *before* the footer, so it excludes it.

So the resulting range selector is:

```json
{
  "startBefore": "#terms-title",
  "endBefore": "#footer-menu"
}
```

This range selector will select the terms content between the main title and the footer element.
