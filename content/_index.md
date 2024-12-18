---
title: Open Terms Archive documentation
linkTitle: Homepage
weight: 1
---

# Open Terms Archive documentation

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection operates its own API, and the Federation API unifies search and discovery across collections, fostering collaboration with external applications.

## Required minimal terminology

Before diving into the details, let's first understand the essential terminology used throughout this documentation.

- **Service**: An entity that provide a service to users.
- **Terms**: The contractual or non-contractual documents published by services (such as Terms of Service, Privacy Policy, Community Guidelines) that users agree to.
- **Collection**: A set of tracked terms defined by a specific scope (such aslanguage, jurisdiction, industry, …).
- **Declaration**: A JSON file that defines which terms to track for a service and how to track them.
- **Snapshot**: The original document (HTML, PDF, …) where the terms will be extracted.
- **Version**: The actual terms from a snapshot after removing irrelevant elements and noise.

## Documentation structure

In this documentation you can find the following kind of content to support users at different levels:

- **Tutorials:** Step-by-step learning guides that help beginners get started with Open Terms Archive, providing foundational knowledge and hands-on experience.
- **How-to guides:** Task-focused instructions that help experienced users accomplish specific goals efficiently and effectively.
- **Reference:** Comprehensive technical documentation detailing system components, configuration options, and specifications for advanced users.

## Main contents

- **Analysis:** Provides guidance on how to analyze terms changes, from navigating through the history of tracked documents to publishing memos about significant changes, along with copywriting guidelines for creating analysis content.
- **Community:** Provides information on how to join and participate in the Open Terms Archive community.
- **Terms:** Provides guidance on tracking and maintaining terms declarations, reference documentation for declaration formats, and guidelines for selecting selectors and reviewing contributions.
- **Collections:** Provides guidance on creating and managing collections of tracked terms, creating repositories and defining metadata, and detailed reference documentation for configuration options, environment variables, governance roles, and collection metadata formats.
- **Federation:** Explains the benefits of joining the Open Terms Archive federation, and the criteria that collections must meet to be part of the federated ecosystem.
- **Deployment:** Guides to deploy a collection.
- **Programmatic access:** Provides documentation for programmatically interacting with Open Terms Archive.
- **Concepts and principles:** Explains the main concepts and terminology of Open Terms Archive and fundamental design principles.
