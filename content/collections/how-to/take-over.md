---
title: Take over abandoned collection
weight: 2
---

# How to take over maintenance of abandoned collection

Before starting, ensure the collection is [abandoned]({{< relref "collections/reference/status#abandoned" >}}).

## Steps

1. Get owners' approval by contacting them via email if publicly available, a GitHub issue on the collection repository or on the [community chat]({{< relref "federation/how-to/join" >}}).

2. Ask the owner to transfer the repositories to your organization.

3. Verify that the declarations, snapshots and versions repositories are transferred and properly configured by taking a look at [this guide]({{< relref "collections/how-to/create-repositories/" >}}).

3. Update Readme, and follow [this guide to update collection metadata]({{< relref "collections/how-to/define-metadata" >}}) inside the declarations repository.

4. Follow [this guide to deploy the collection]({{< relref "deployment/how-to/deploy" >}}) on your server.

5. Ensure continous integration and deployment is working.

Congratulations! You can now start maintaining the collection.

Keep original licenses and attributions.
