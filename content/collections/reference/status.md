---
title: Status
weight: 5
---

# Collection status

This reference documentation outlines the different status levels that a collection can have within the system. Understanding these statuses is crucial for users to assess a collection's quality and reliability.

### Active

The optimal operational state for a collection.

- The collection saves records regularly through actively maintained and updated terms declarations. The number of tracked terms remains stable or increases over time. The versions quality is high.
- Technical maintenance includes regular dependency updates, access to the latest engine features, and benefits from all infrastructure updates.
- All [roles]({{< relref "collections/reference/roles" >}}) are fulfilled.

---

### Abandoned

Collection may be functional but shows clear signs of neglect.

- Operational status has deteriorated significantly with unknown record saving status, no updates to terms declarations, declining number of tracked terms, and decreasing versions quality.
- Technical maintenance has ceased completely, with no dependency updates, missing latest engine features, and no infrastructure updates.
- All [roles]({{< relref "collections/reference/roles" >}}) are inactive.

---

### Terminated

Collection has voluntarily ceased all operational activities.

- No terms are tracked any more, though historical records remain accessible for reference purposes.
- No technical maintenance is performed.
- All [roles]({{< relref "collections/reference/roles" >}}) are inactive.
