---
title: Node.js module
weight: 1
---

# Node.js module

As a Node module dependency, the engine exposes a JavaScript API that can be called in your own code.

## `fetch`

`fetch` gets the MIME type and content of a document from its URL

```js
import fetch from '@opentermsarchive/engine/fetch';
```

Documentation on how to use `fetch` is provided [as JSDoc](/jsdoc/index.html).

### Headless browser management

If you pass the `executeClientScripts` option to `fetch`, a headless browser will be used to download and execute the page before serialising its DOM. For performance reasons, the starting and stopping of the browser is your responsibility to avoid instantiating a browser on each fetch. Here is an example on how to use this feature:

```js
import fetch, { launchHeadlessBrowser, stopHeadlessBrowser } from '@opentermsarchive/engine/fetch';

await launchHeadlessBrowser();
await fetch({ executeClientScripts: true, ... });
await fetch({ executeClientScripts: true, ... });
await fetch({ executeClientScripts: true, ... });
await stopHeadlessBrowser();
```

The `fetch` options are defined as a [`node-config` submodule](https://github.com/node-config/node-config/wiki/Sub-Module-Configuration). The default `fetcher` configuration can be overridden by adding a `fetcher` object to the local configuration file.

## `extract`

`extract` transforms HTML or PDF content into a Markdown string according to a declaration.

```js
import extract from '@opentermsarchive/engine/extract';
```

The `extract` function documentation is available [as JSDoc](/jsdoc/index.html).

## `SourceDocument`

The `SourceDocument` class encapsulates information about a terms' source document tracked by Open Terms Archive.

```js
import SourceDocument from '@opentermsarchive/engine/sourceDocument';
```

The `SourceDocument` format is defined [in source code](https://github.com/OpenTermsArchive/engine/tree/main/src/archivist/services/sourceDocument.js).
