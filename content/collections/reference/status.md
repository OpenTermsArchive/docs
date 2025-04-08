---
title: Status
weight: 5
---

# Collection Status

This reference documentation outlines the different status levels that a collection can have within the system. Understanding these statuses is crucial for users to assess a collection's reliability, maintenance level, and current operational state.

## Status types

Each status represents a distinct state of collection health and maintenance, ranging from fully operational to terminated.

### `Active`
The optimal operational state for a collection.

##### ✅ Operational characteristics
- Regular record saving
- Terms declarations actively maintained and updated
- Consistent growth or stability in tracked terms
- High and stable tracking quality

##### ✅ Technical maintenance
- Regular dependency updates
- Access to latest engine features
- Benefits from infrastructure updates

##### ✅ Team status
- All roles are filled and active

---

### `Maintenance requested`

Indicates a collection that needs attention but remains functional.

##### ⚠️ Operational characteristics

- Regular record saving
- Limited or no updates to terms declarations
- Declining number of tracked terms
- Decreasing tracking quality

##### ✅ Technical maintenance

- Critical dependency updates maintained
- Access to latest engine features
- Benefits from infrastructure updates

##### ⚠️ Team status

- Host and administrator remain active
- Curators and maintainers are inactive

---

### `Abandoned`

Collection is functional but showing signs of neglect.

##### ❌ Operational characteristics

- Unknown record saving status
- No updates to terms declarations
- Declining number of tracked terms
- Decreasing tracking quality

##### ❌ Technical maintenance

- No dependency updates
- Missing latest engine features
- Missing infrastructure updates

##### ❌ Team status

- All roles are inactive

---

### `Terminated`

Collection has ceased operations, it cannot be used for new records but may still be accessible for historical reference. Tracking quality reflects the collection's maintenance level during its active period.
