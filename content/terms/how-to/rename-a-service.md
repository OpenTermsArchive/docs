---
title: How to rename a service
linkTitle: Rename a service
---

# How to rename a service

The consensus is to consider that a service provider renaming a service (for example, `Twitter` to `X`) is akin to terminating the previous service and opening a new one. Therefore, to apply a service renaming, open a pull request that both [terminates the previous service](#how-to-terminate-a-service) and adds a new [service declaration]({{< relref "terms/how-to/track-new-terms#declaring-a-new-service" >}}) with the new service name. You can reuse the `documents` part of the original declaration, but should double-check that the selectors and URLs still match, as a service rename is most often accompanied by a new page layout, a new domain name, and sometimes entirely new terms.
