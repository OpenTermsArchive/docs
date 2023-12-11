---
title: "Federated API"
weight: 7
---

# Federated API [Beta]

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection operates its [own API](/#api), and the federated API unifies search and discovery across collections, fostering collaboration with external applications.

## Documentation

The Federated Web API exposes JSON data over HTTP. Its [documentation](http://51.89.136.45/v1/docs/) is provided in a dedicated, interactive interface.

That endpoint exposes both the [OpenAPI](https://swagger.io/specification/) specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

## Beta

This API is offered as a preview, based on a first use case [defined](https://github.com/OpenTermsArchive/engine/issues/1016) with partner [ToS;DR](https://tosdr.org). Unexpected problems or missing functionality may arise. Please provide feedback through [issues](https://github.com/OpenTermsArchive/federated-api/issues) in the dedicated repository.

## Source code

The codebase for the Federated API is available on [`github.com/OpenTermsArchive/federated-api`](https://github.com/OpenTermsArchive/federated-api).
