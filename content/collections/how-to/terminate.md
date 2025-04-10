---
title: Terminate a collection
weight: 3
---

# How to terminate a collection

If you don't have the resources to maintain a collection anymore, follow these steps to properly terminate it. This will make it clear to users and potential successors that it is no longer actively maintained and can be taken over.

## Steps

1. Announce the intention to terminate the collection in the [community chat]({{< relref "/federation/how-to/join" >}}) to inform users and make potential new maintainers aware. Give at least one month notice to that others have time to share their intention to take over the collection before proceeding to the next step.

If no-one has come forward after one month, you can proceed to the next step.

2. In the declarations repository's README, state that the collection is [terminated]({{< relref "collections/reference/status#terminated" >}}), encourage community to take it over. It can be done by adding the following snippet on the top of the file:

> This collection is no longer actively maintained since `<date>`. New maintainers are encouraged to take over the operation of this collection in order to resume tracking its terms. Guidance on [taking over maintenance]({{< relref "collections/how-to/take-over" >}}) can be found in the Open Terms Archive documentation, and help is available in the Open Terms Archive [community chat]({{< relref "/federation/how-to/join" >}}).

3. [Archive](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories) the collection's repositories (declarations, snapshots, versions) to prevent further commits and signal the end of activity.

Congratulations, the collection is now officially terminated! Thank you for clearly labelling it as inactive while keeping its contents accessible and enabling others to continue your work.
