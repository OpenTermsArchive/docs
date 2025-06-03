---
title: Take over a collection
weight: 6
---

# How to take over a collection

Before starting, ensure the collection is either [abandoned]({{< relref "/reference/collection/status#abandoned" >}}) or [terminated]({{< relref "/reference/collection/status#terminated" >}}). In any case, keep all original licenses, history, and attributions.

## Steps

1. If the approval is not explicitly given in the collection's README, get it by contacting owners via email if publicly available, a GitHub issue on the collection repository, or on the community chat.

2. Ask the owners to transfer the repositories to your organization.

3. Check that the transferred declarations, snapshots and versions repositories are [properly configured]({{< relref "/how-to/collection-lifecycle/create-repositories" >}}).

4. Update the governance in the README files and in the [collection metadata]({{< relref "/how-to/collection-lifecycle/define-metadata" >}}) in the declarations repository.

5. Set up continous integration and deployment to deploy the collection on your servers.

Congratulations and thanks! You are now officially maintaining the collection.
