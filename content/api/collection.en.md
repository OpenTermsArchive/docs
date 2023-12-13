---
title: Collection
weight: 2
---

# Collection Web API [Beta]

As Open Terms Archive is decentralised, each instance embarks its own API. The documentation relevant to the specific version of the engine on that instance is provided on that instance itself.

The Collection API exposes JSON data over HTTP. Its [OpenAPI](https://swagger.io/specification/) specification can be found at `http://localhost:<port>/<basePath>/<API version>/docs`.

That endpoint exposes both the OpenAPI specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

> For example, the [documentation](http://162.19.74.224/api/v1/docs) of the [Demo collection](https://github.com/OpenTermsArchive/demo-declarations) is publicly available for exploration.
