---
title: "API"
weight: 7
---

# API

## Node.js [Beta]

As a Node module dependency, the engine exposes a JavaScript API that can be called in your own code. The following modules are available.

### `fetch`

The `fetch` module gets the MIME type and content of a document from its URL

```js
import fetch from '@opentermsarchive/engine/fetch';
```

Documentation on how to use `fetch` is provided [as JSDoc](/jsdoc/index.html).

#### Headless browser management

If you pass the `executeClientScripts` option to `fetch`, a headless browser will be used to download and execute the page before serialising its DOM. For performance reasons, the starting and stopping of the browser is your responsibility to avoid instantiating a browser on each fetch. Here is an example on how to use this feature:

```js
import fetch, { launchHeadlessBrowser, stopHeadlessBrowser } from '@opentermsarchive/engine/fetch';

await launchHeadlessBrowser();
await fetch({ executeClientScripts: true, ... });
await fetch({ executeClientScripts: true, ... });
await fetch({ executeClientScripts: true, ... });
await stopHeadlessBrowser();
```

The `fetch` module options are defined as a [`node-config` submodule](https://github.com/node-config/node-config/wiki/Sub-Module-Configuration). The default `fetcher` configuration can be overridden by adding a `fetcher` object to the [local configuration file](#configuration-file).

### `extract`

The `extract` module transforms HTML or PDF content into a Markdown string according to a [declaration](#declarations).

```js
import extract from '@opentermsarchive/engine/extract';
```

The `extract` function documentation is available [as JSDoc](/jsdoc/index.html).

### `SourceDocument`

The `SourceDocument` class encapsulates information about a terms' source document tracked by Open Terms Archive.

```js
import SourceDocument from '@opentermsarchive/engine/sourceDocument';
```

The `SourceDocument` format is defined [in source code](https://github.com/OpenTermsArchive/engine/tree/main/src/archivist/services/sourceDocument.js).

- - -

## Collection API [Beta]

As Open Terms Archive is decentralised, each [instance](/#instances) embarks its own API. The documentation relevant to the specific version of the engine on that instance is provided on that instance itself.

### Documentation

The Collection API exposes JSON data over HTTP. Its [OpenAPI](https://swagger.io/specification/) specification can be found at `http://localhost:<port>/<basePath>/<API version>/docs`.

That endpoint exposes both the OpenAPI specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

> For example, the [documentation](http://162.19.74.224/api/v1/docs) of the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations) is publicly available for exploration.

- - -

## Federated API [Beta]

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection operates its [own API](/#api), and the federated API unifies search and discovery across collections, fostering collaboration with external applications.

### Documentation

The Federated Web API exposes JSON data over HTTP. Its [documentation](http://51.89.136.45/v1/docs/) is provided in a dedicated, interactive interface.

That endpoint exposes both the [OpenAPI](https://swagger.io/specification/) specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

### Beta

This API is offered as a preview, based on a first use case [defined](https://github.com/OpenTermsArchive/engine/issues/1016) with partner [ToS;DR](https://tosdr.org). Unexpected problems or missing functionality may arise. Please provide feedback through [issues](https://github.com/OpenTermsArchive/federated-api/issues) in the dedicated repository.

### Source code

The codebase for the Federated API is available on [`github.com/OpenTermsArchive/federated-api`](https://github.com/OpenTermsArchive/federated-api).

### Deploying

Deployment recipes are available in a [dedicated repository](https://github.com/OpenTermsArchive/deployment). Look at the [Federated API section](https://github.com/OpenTermsArchive/deployment#federated-api-application) on the README to know how to deploy the API.
