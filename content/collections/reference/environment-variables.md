---
title: Environment variables
weight: 4
---

## Environment variables

This reference documentation details all available environment variables that can be used to configure sensitive information. These variables can be defined in a `.env` file at the root of the collection repository.

### Engine

{{< refItem name="OTA_ENGINE_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications." />}}

{{< refItem name="OTA_ENGINE_SENDINBLUE_API_KEY" type="string" description="API key for SendInBlue." />}}

{{< refItem name="OTA_ENGINE_GITHUB_TOKEN" type="string" description="GitHub token for API access and dataset publishing. If both GitHub and GitLab tokens are configured, GitHub takes precedence for dataset publishing." />}}

{{< refItem name="OTA_ENGINE_GITLAB_TOKEN" type="string" description="GitLab token for API access and dataset publishing. Used only if GitHub token is not configured." />}}

{{< refItem name="OTA_ENGINE_GITLAB_RELEASES_TOKEN" type="string" description="GitLab token for dataset releases." />}}

{{< refItem name="OTA_ENGINE_DATAGOUV_API_KEY" type="string" description="API key for data.gouv.fr dataset publishing." />}}

---

### Federation API

{{< refItem name="OTA_FEDERATION_API_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications." />}}
