---
title: How to be notified of terms changes
weight: 4
linkTitle: Be notified of changes
aliases:
  - /subscribe-rss/
  - /terms/how-to-be-notified-of-terms-changes/
---

# How to be notified of terms changes

An Atom feed is a type of web page that contains information about the latest content published by a website, such as the date of publication and the address where you can view it. When this resource is updated, a feed reader app automatically notifies you and you can see the update. You can receive notification for a specific service or terms type by subscribing to Atom feeds.

Each collection exposes Atom feeds through its [Collection API]({{< relref "/api/collection" >}}). The endpoint of a collection's API can be found in the [collections list](https://opentermsarchive.org/collections.json) under the `endpoint` property.

## For all terms of a collection

Subscribe to changes across the entire collection: `{collection-api-endpoint}/feed`

> For example, for all terms of the Demo collection: `http://162.19.74.224/collection-api/v1/feed`

## For all the terms of a service

Subscribe to changes for all terms of a specific service: `{collection-api-endpoint}/feed/{serviceId}`

> For example, for all terms of GitHub in the Demo collection: `http://162.19.74.224/collection-api/v1/feed/GitHub`

## For one terms type of a service

Subscribe to changes for a specific terms type of a service: `{collection-api-endpoint}/feed/{serviceId}/{termsType}`

Terms types that contain spaces or special characters must be URL-encoded. For example, "Privacy Policy" becomes `Privacy%20Policy`.

> For example, for the GitHub Privacy Policy of the Demo collection: `http://162.19.74.224/collection-api/v1/feed/GitHub/Privacy%20Policy`
