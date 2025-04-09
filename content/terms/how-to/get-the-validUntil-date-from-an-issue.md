---
title: How to get the `validUntil` date
linkTitle: Get the `validUntil` date
weight: 7   
---

# How to get the `validUntil` date

## From a GitHub issue

1. Go to the open issue and scroll to the last action from `OTA-Bot` (comment or issue opening).

   ![]({{< relref "." >}}declarations-maintenance-ota-bot-comment.png)

   Note that sometimes:

   - the date is not quite precise, it can be written "last month"
   ![]({{< relref "." >}}declarations-maintenance-ota-bot-comment-last-month.png)
   - the last comment may be the announcement of the reopening of the issue
   ![]({{< relref "." >}}declarations-maintenance-ota-bot-comment-reopened-issue.png)

2. On the date of this comment, right-click "inspect" to open your browser's code inspector.

3. The value to use as `validUntil` is the value of the `datetime` attribute from the `<relative-time>` element.

   ![]({{< relref "." >}}declarations-maintenance-inspector-open-get-datetime.png)
