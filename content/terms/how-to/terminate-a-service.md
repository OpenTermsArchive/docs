---
title: How to terminate a service
linkTitle: Terminate a service
weight: 6
---

# How to terminate a service

If the service provider stops offering a service, the associated terms will become unavailable. To mark that service termination in Open Terms Archive and ensure tracking attempts are stopped, while maintaining the possibility to explore the history:

1. Move the existing terms declaration to the service [history file]({{< relref "declarations-maintenance#service-history-reference" >}}).
2. Update the declaration to stop tracking all terms, by removing every `<terms type>` entries from the  `terms` key in the declaration:

```json
{
  "name": "<service name>",
  "terms": {}
}
```
