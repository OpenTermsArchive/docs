---
title: "Federated API"
weight: 7
---

# Federated API [Beta]

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection operates its [own API](/#api), and the federated API simplify searching across these collections, fostering collaboration with external applications. This provides a simplified method for discovering service terms within the Open Terms Archive decentralized system.

## Documentation

The Federated Web API exposes JSON data over HTTP(S). The [documentation](http://51.89.136.45/v1/docs/) is publicly available for exploration. That endpoint exposes both the [OpenAPI](https://swagger.io/specification/) specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

## Source code

The codebase for this Federated API is available on [https://github.com/OpenTermsArchive/federated-api](https://github.com/OpenTermsArchive/federated-api).
