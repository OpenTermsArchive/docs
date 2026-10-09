---
title: Reporting
weight: 1
---

# Reporting

Over the lifetime of a collection, services will change the location, layout or distribution of their terms. This can impact tracking. In order to ensure continuous data collection, maintainers need to know if the tracking of any terms fails. To address this need, the [issue reporter]({{< relref "collections/how-to/report-tracking-failures" >}}) module automatically reports failures by opening issues in the declarations repository.

## How the reporting system works

The engine records the outcome of each tracking in the [tracking results]({{< relref "collections/reference/configuration#tracking-results" >}}) and exposes them through the [Collection API]({{< relref "api/collection" >}}). The issue reporter runs alongside the engine and checks regularly whether a new tracking run has completed. When one has, it reconciles the whole state of the issues with the tracking results of that run:

- The terms whose latest tracking failed get an issue that explains the reason for failure and is labelled based on the cause of the tracking interruption. The issue is created if it does not exist, reopened if it was closed, and commented when the failure reasons change.
- The terms whose latest tracking succeeded get their issue closed, if any, with a comment stating that tracking resumed.
- The terms that are no longer declared in the collection get their issue closed, unless the Collection API seems to have been started on an incomplete set of declarations. The Collection API tells declared terms from the declarations it loaded when it started, so it has to be restarted along with the tracker when they change, as a deployment does.
- The terms that have no tracking result are left untouched.

Issues are identified by their title, which names the service and the terms type. An issue is only opened, updated or closed on the positive evidence of a tracking result, so restarting the issue reporter or synchronizing the same run twice is harmless. If some issues could not be updated, for example because the forge was unavailable, the synchronization is retried at the next check.

Issues thus appear once a tracking run completes rather than at the moment each failure happens. If no tracking run completes for more than twice the tracking schedule interval, the issue reporter reports an error, as the issues cannot reflect the current tracking status until the engine completes a run.

## Understanding labels

The reporting system uses labels to categorize issues and indicate what action, if any, is needed to resume tracking.

### Automatically managed labels

Labels that are automatically managed by the issue reporter say so in their description, which is visible by hovering the mouse cursor over the label name.

**These labels should not be manually added to issues, modified or removed from them, nor should their descriptions or colors be edited by maintainers.** Otherwise, duplication of labels can appear. The issue reporter will automatically manage these labels as needed, ensuring that the cause for interruption is as precisely identified as possible.

### Issues requiring intervention

The label `⚠ needs intervention` indicates that manual contributor intervention is required to restore tracking. When this label appears on an issue, it means the problem won't be resolved automatically and requires human action to fix the declarations or configuration.

Issues without this label may resolve themselves automatically once the underlying problem, such as a temporary network outage or service downtime, is fixed. However, some may not be fixable at all, for example when the tracking engine is detected and blocked as a bot by the target service.
