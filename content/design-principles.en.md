---
title: "Design principles"
---

# Design principles

These overarching principles guide technical and governance decisions. They are fundamental and can only be changed through community consensus, based on a thorough impact assessment.

Each principle has a name, a rationale, and potential implementation examples or guidelines.

## 1. Never trust the services

A major goal of Open Terms Archive is to enable assessing the loyalty of services towards their end users. Since loyalty is not assumed, trust can not be warranted.

### Cases

Several services have been observed:

- changing the content of the same page based on user agent properties or source IP geolocation;
- blocking an IP or a user agent randomly;
- pretending to encounter technical errors (`500`, `502`…) instead of being explicit about their intention (`robots.txt`, `403`…);
- to not reflect actual updates in the “last update” date of their contractual documents.

### Examples of consequential choices

- Do not use “last update” date in documents or headers for metadata.

## 2. Do not require trust

Open Terms Archive data should not need to be trusted by users more than the services it enables assessing.

### Cases

- Collections can be unmaintained and improperly filter out relevant content.
- A server can go down and miss updates.

### Examples of consequential choices

- Always keep an untouched snapshot of the source documents.
- Use cryptographic signatures to ensure the database can be authenticated.
- Enable replication of tracking.

## 3. Obtain documents like a user would

In order to guarantee legal relevance, source documents should only be ones that end users of the service are themselves receiving. Following principle 1, technical workarounds to obtain some version of the source documents that are more easily handled by machines cannot be trusted to have the same content as the ones intended for end users.

### Cases

- Accessing the same URL from a differently geolocated IP address will change the contents in some services.

### Examples of consequential choices

- Scrape HTML even if one could obtain the contractual content from an API.
