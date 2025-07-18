---
title: Reporting
weight: 1
---

# Reporting

Over the lifetime of a collection, services will change the location, layout or distribution of their terms. This can impact tracking. In order to ensure continuous data collection, maintainers need to know if the tracking of any terms fails. To address this need, the Open Terms Archive engine automatically reports failures by opening issues in the declarations repository.

## How the reporting system works

When some terms fail to track, an issue is opened that explains the reason for failure and is labelled based on the cause of the tracking interruption. The system also automatically closes issues when tracking resumes.

## Understanding labels

The reporting system uses labels to categorize issues and indicate what action, if any, is needed to resume tracking.

### Automatically managed labels

Labels that are automatically managed by the engine say so in their description, which is visible by hovering the mouse cursor over the label name.

**These labels should not be manually added to issues, modified or removed from them, nor should their descriptions or colors be edited by maintainers.** Otherwise, duplication of labels can appear. The engine will automatically manage these labels as needed, ensuring that the cause for interruption is as precisely identified as possible.

### Issues requiring intervention

The label `⚠ needs intervention` indicates that manual contributor intervention is required to restore tracking. When this label appears on an issue, it means the problem won't be resolved automatically and requires human action to fix the declarations or configuration.

Issues without this label may resolve themselves automatically once the underlying problem, such as a temporary network outage or service downtime, is fixed. However, some may not be fixable at all, for example when the tracking engine is detected and blocked as a bot by the target service.
