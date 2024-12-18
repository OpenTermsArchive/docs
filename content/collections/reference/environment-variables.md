---
title: Environment variables
weight: 3
---

## Environment variables

This reference documentation details all available environment variables that can be used to configure sensitive information. These variables can be defined in a `.env` file at the root of the collection repository.

### Engine

{{< configOption name="OTA_ENGINE_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications." >}}

{{< configOption name="OTA_ENGINE_SENDINBLUE_API_KEY" type="string" description="API key for SendInBlue." >}}

{{< configOption name="OTA_ENGINE_GITHUB_TOKEN" type="string" description="GitHub token for API access." >}}

{{< configOption name="OTA_ENGINE_GITLAB_TOKEN" type="string" description="GitLab token for API access." >}}

{{< configOption name="OTA_ENGINE_GITLAB_RELEASES_TOKEN" type="string" description="GitLab token for dataset releases." >}}

---

### Federation API 

{{< configOption name="OTA_FEDERATION_API_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications." >}}
