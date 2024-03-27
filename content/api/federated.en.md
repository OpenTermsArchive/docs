---
title: Federated
weight: 3
---

# Federated Web API [Beta]

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection operates its own API, and the federated API unifies search and discovery across collections, fostering collaboration with external applications.

The Federated Web API exposes JSON data over HTTP. Its [documentation](http://51.89.136.45/v1/docs/) is provided in a dedicated, interactive interface.

That endpoint exposes both the [OpenAPI](https://swagger.io/specification/) specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

## Beta

This API is offered as a preview, based on a first use case [defined](https://github.com/OpenTermsArchive/engine/issues/1016) with partner [ToS;DR](https://tosdr.org). Unexpected problems or missing functionality may arise. Please provide feedback through [issues](https://github.com/OpenTermsArchive/federated-api/issues) in the dedicated repository.

## Source code

The codebase for the Federated API is available on [`github.com/OpenTermsArchive/federated-api`](https://github.com/OpenTermsArchive/federated-api).

## Configuring

The default configuration can be found in `config/default.json`. The full reference is given below. You are unlikely to want to edit all of these elements.

```js
{
  "port": "Port number on which the server will listen for incoming connections",
  "collections": "Collections configuration key; see below",
  "logger": { // Logging mechanism to be notified upon error
    "smtp": {
      "host": "SMTP server hostname", // Hostname of the SMTP server for sending emails
      "username": "User for server authentication" // Password for server authentication is defined in environment variables, see the “Environment variables” section below
    },
    "sendMailOnError": { // Can be set to `false` if sending email on error is not needed
      "to": "The address to send the email to in case of an error",
      "from": "The address from which to send the email",
      "sendWarnings": "Boolean. Set to true to also send email in case of warning",
    }
  },
}
```

The default configuration is merged with (and overridden by) environment-specific configuration that can be specified at startup with the `NODE_ENV` environment variable. See [node-config](https://github.com/node-config/node-config) for more information about configuration files.

For development, in order to have a local configuration that overrides the existing config, it is recommended to create a `config/development.json` file.

### `collections` configuration key

The `collections` configuration key is an array containing URLs and directly specified collections. Each item in the collections array can be either a URL pointing to a JSON file containing collections or a directly specified collection object.

#### Structure

- **URLs**: URLs pointing to JSON files containing collections description. Each URL should respond with a JSON array containing collection objects.

- **Directly specified collections**: Collection objects directly specified within the configuration. These collections must include properties: `name`, `id`, and `endpoint`.

```json
{
  …
  {
    "name": "The name of the collection",
    "id": "A unique identifier for the collection",
    "endpoint": "The endpoint or URL where the collection API can be accessed"
  }
  …
}
```

#### Example

```json
"collections": [
  "https://opentermsarchive.org/collections.json",
  {
    "name": "Direct Collection",
    "id": "directCollection",
    "endpoint": "https://domain.example/api"
  }
]
```

#### Conflict Resolution

If multiple collections share the same `id`, the latest defined collection in the array will be used and others with the same `id` will be ignored.

## Deploying

Deployment recipes are available in a [dedicated repository](https://github.com/OpenTermsArchive/deployment). Look at the [Federated API section](https://github.com/OpenTermsArchive/deployment#federated-api-application) on the README to know how to deploy the API.
