---
title: Open Terms Archive documentation
linkTitle: Homepage
weight: 1
---

# Open Terms Archive documentation

Open Terms Archive is a decentralised system that tracks collections of services' terms across multiple servers. Each collection exposes the data it collects through datasets and through its own API. The Federation API unifies search and discovery across collections.

## Required minimal terminology

Before diving into the details, let's first understand the essential terminology used throughout this documentation.

- **Terms:** the contractual documents published by services (such as Terms of Service, Privacy Policy, Community Guidelines…) that users agree to.
- **Collection:** a set of tracked terms grouped by a specific scope (such as language, jurisdiction, industry…).
- **Declaration:** a JSON file that defines which terms to track for a service and how to track them.
- **Snapshot:** the original source document (HTML, PDF…) from which the terms will be extracted.
- **Version:** the textual content of the terms after filtering out irrelevant content (navigation menu, advertisements…) from a snapshot.

## Documentation structure

This documentation follows the [Diátaxis](https://diataxis.fr) approach and structures content in different categories:

- **Tutorials:** step-by-step learning guides that help beginners get started with Open Terms Archive, providing foundational knowledge and hands-on experience.
- **How-to guides:** task-focused instructions that help experienced users accomplish specific goals efficiently and effectively.
- **Reference:** comprehensive technical documentation detailing configuration options and specifications for advanced users.
- **Explanations:** background knowledge that enables understanding the constraints and how choices that are made.

### Table of contents

- **Analysis:** guidance on how to analyze terms changes, from navigating through the history of tracked documents to publishing memos about significant changes.
- **Community:** information on how to participate in the Open Terms Archive community.
- **Terms:** guidance on tracking and maintaining terms declarations.
- **Collections:** guidance on creating and managing collections of tracked terms.
- **Federation:** constraints and benefits of joining the Open Terms Archive federation.
- **Deployment:** guidance on operating an Open Terms Archive instance.
- **Programmatic access:** documentation on the engine CLI and APIs.
- **Concepts and principles:** main concepts, terminology and fundamental design principles of Open Terms Archive.
