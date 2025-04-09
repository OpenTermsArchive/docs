---
title: Terminate a collection
weight: 3
---

# How to terminate a collection

Follow these steps to properly terminate a collection you own, making it clear to users and potential successors that it is no longer actively maintained and can be taken over.

## Steps

1. Announce the intention to terminate the collection in the [community chat]({{< relref "/federation/how-to/join" >}}) to inform users and make potential new maintainers aware. Let some time, one month is recommended, for users to explicit their intenttion to take over the collection before proceeding to the next step.

If no-one has come forward after one month, you can proceed to the next step.

2. In the declarations repository's main `README.md` file, state that the collection is [terminated]({{< relref "collections/reference/status#terminated" >}}), encourage community to [take it over]({{< relref "collections/how-to/take-over" >}}). It can be done by adding the following snippet on the top of the file:

```
This collection is no longer actively maintained. If you are interested in taking over maintenance, please let us know in the [community chat]({{< relref "/federation/how-to/join" >}}).
```

3. [Archive the collection's repositories](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories) (declarations, snapshots, versions) to prevent further commits and signal the end of activity.

Once these steps are completed, the collection is officially terminated. It remains accessible but marked as inactive.
