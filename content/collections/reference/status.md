---
title: Status
weight: 5
---

# Collection Status

This reference documentation outlines the different status levels that a collection can have within the system. Understanding these statuses is crucial for users to assess a collection's reliability, maintenance level, and current operational state.

## Status Overview

| Status | Tracking | Engine and infrastructure updates | Roles activity | Quality |
|:-----------------|:---------|:------------|:-----------|:------------|
| `Active` | ✅&nbsp;Operational | ✅&nbsp;All | ✅&nbsp;All | ✅&nbsp;Stable |
| `Maintenance requested` | ⚠️&nbsp;May&nbsp;have&nbsp;interupts | ⚠️&nbsp;Critical only | ⚠️&nbsp;Admin&nbsp;only | ⚠️&nbsp;Decreasing |
| `Abandoned` | ⚠️ Unknown | ❌&nbsp;None | ❌&nbsp;None | ❌&nbsp;Poor |
| `Terminated` | ❌ Stopped | N/A | N/A | Depends on maintenance level during active period |

## Detailed status descriptions

### `Active`

- The optimal operational state for a collection.

- The collection maintains regular record saving with actively maintained and updated terms declarations. The number of tracked terms remains stable or increases over time. The tracking quality is high and stable.

- Technical maintenance includes regular dependency updates, access to the latest engine features, and benefits from all infrastructure updates.

- All roles filled and active.

---

### `Maintenance requested`

- Indicates a collection that needs attention but remains functional.

- Regular record saving continues, however, the collection shows signs of strain with limited or no updates to terms declarations. The number of tracked terms is declining, and tracking quality is decreasing.

- Technical maintenance continues but at a reduced level, critical dependency updates are applied, though often with delays. The collection maintains access to essential engine features and infrastructure updates to ensure basic functionality, but may not receive all new feature improvements.

- Some roles are inactive; while hosts and administrators remain partially active, curators and maintainers have become inactive.

---

### `Abandoned`

- Collection may be functional but shows clear signs of neglect.

- Operational status has deteriorated significantly with unknown record saving status, no updates to terms declarations, declining number of tracked terms, and decreasing tracking quality.

- Technical maintenance has ceased completely, with no dependency updates, missing latest engine features, and no infrastructure updates.

- All roles are inactive.

---

### `Terminated`

- Collection has ceased all operational activities.

- Record saving is no longer active, though historical records remain accessible for reference purposes.

- No technical maintenance is performed as the collection is no longer operational.

- No active roles exist as the collection is terminated.
