---
title: How to terminate a service
linkTitle: Terminate a service
---

# How to terminate a service

If the service provider stops offering a service, the associated terms will become unavailable. To mark that service termination in Open Terms Archive and ensure tracking tentatives are stopped, while maintaining the possibility to explore the history:

1. Move the existing documents declaration to the service [history file](#terms-declaration-history).
2. Update the declaration to stop tracking all terms, by removing every `<terms type>` entries from the  `documents` key in the declaration:

```json
{
  "name": "<service name>",
  "documents": {}
}
```
