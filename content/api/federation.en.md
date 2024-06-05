---
title: Federation
weight: 3
aliases: /api/federated/
---

# Federation Web API [Beta]

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection operates its own API, and the federation API unifies search and discovery across collections, fostering collaboration with external applications.

The Federation Web API exposes JSON data over HTTP. Its [documentation](http://162.19.74.224/federation-api/v1/docs/) is provided in a dedicated, interactive interface.

That endpoint exposes both the [OpenAPI](https://swagger.io/specification/) specification if the requested `Content-Type` is JSON, and a Swagger UI for visual and interactive documentation otherwise.

## Beta

This API is offered as a preview, based on a first use case [defined](https://github.com/OpenTermsArchive/engine/issues/1016) with partner [ToS;DR](https://tosdr.org). Unexpected problems or missing functionality may arise. Please provide feedback through [issues](https://github.com/OpenTermsArchive/federation-api/issues) in the dedicated repository.

## Source code

The codebase for the Federation API is available on [`github.com/OpenTermsArchive/federation-api`](https://github.com/OpenTermsArchive/federation-api).

## Configuring

The default configuration can be found in `config/default.json`. The full reference is given below. In the vast majority of cases, the default values should be sufficient and only the email sending data should be changed.

```js
{
  "@opentermsarchive/federation-api": {
    "logger": { // Logging mechanism to be notified upon error
      "smtp": {
        "host": "SMTP server hostname", // Hostname of the SMTP server for sending emails
        "username": "User for server authentication" // Password for server authentication is defined in environment variables, see the “Environment variables” section below
      },
      "sendMailOnError": { // Can be set to `false` to disable sending email on error
        "to": "The address to send the email to in case of an error",
        "from": "The address from which to send the email",
        "sendWarnings": "Boolean. Set to true to also send email in case of warning. Default: false",
      }
    }
    "port": "Port number on which the server will listen for incoming connections. Default: 3333",
    "basePath": "The base path for the API endpoints",
    "collections": [  // Overriding this value creates a risk of splintering the federation, make sure to fully understand what happens when changing this value
      "List of collections to federate; see below for how to configure. Default: https://opentermsarchive.org/collections.json"
    ]
  }
}
```

The default configuration is merged with (and overridden by) environment-specific configuration that can be specified at startup with the `NODE_ENV` environment variable. See [node-config](https://github.com/node-config/node-config) for more information about configuration files.

For development, in order to have a local configuration that overrides the existing config, it is recommended to create a `config/development.json` file.

### `collections` configuration key

The `collections` configuration key is an array containing URLs or specific collections. Each item in the collections array can be either a URL pointing to a JSON file containing Collections objects, or a Collection object.

#### Structure

- **URLs**: URLs pointing to JSON files containing collections description. Each URL should respond with a JSON array containing collection objects.

- **Collection objects**: the description of a collection, in the form of an object with required properties: `name`, `id`, and `endpoint`.

```json
{
  …
  {
    "name": "The name of the collection",
    "id": "An identifier for the collection that must be unique across the whole federation",
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
    "name": "My Collection",
    "id": "mycollection",
    "endpoint": "https://domain.example/api"
  }
]
```

#### Conflict Resolution

If multiple collections share the same `id`, the latest defined collection in the array will be used and others with the same `id` will be ignored.

## Deploying

Deployment recipes are available in a [dedicated repository](https://github.com/OpenTermsArchive/deployment).
