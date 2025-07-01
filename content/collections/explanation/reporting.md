---
title: Reporting
weight: 1
---

# Reporting

Once services are declared in a collection and this collection starts tracking these terms, it becomes crucial to monitor whether the tracking is functioning properly. It is important to know if there are any terms whose tracking has been interrupted or has failed.

## How the reporting system works

To address this need, the Open Terms Archive engine implements an automated reporting system that creates issues in the declarations repository. This system helps maintainers stay informed about which terms are not being tracked and why.

When tracking is interrupted for a specific term, the system opens an issue that explains why the term is not being tracked and associates labels to categorize the cause of the tracking interruption. The system automatically closes issues when tracking resumes after declarations are fixed and deployed.

## Understanding labels

The reporting system uses labels to categorize issues and indicate what action is needed.

### Auto-managed labels

All labels that are marked with `- Auto-managed by OTA engine` in their description are managed by the engine. These labels should:

- **Not** be manually added to issues by maintainers
- **Not** be modified or removed from issues by maintainers
- **Not** have their descriptions or colors edited by maintainers

The engine will automatically manage these labels as needed.

### Issues requiring intervention

The label `⚠ needs intervention` indicates that manual contributor intervention is required to restore tracking. When this label appears on an issue, it means the problem won't be resolved automatically and requires human action to fix the declarations or configuration.

Issues without this label represent tracking interruptions that need investigation to determine the appropriate course of action. These issues may resolve themselves automatically once the underlying problem (such as a temporary network outage or service downtime) is fixed. However, some may not be fixable at all, for example when the tracking engine is detected and blocked as a bot by the target service.
