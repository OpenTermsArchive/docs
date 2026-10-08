---
title: Environment variables
weight: 4
---

## Environment variables

This reference documentation details the environment variables used to configure sensitive credentials and the runtime behaviour of the engine. These variables can be defined in a `.env` file at the root of the collection repository.

### Engine

{{< refItem name="OTA_ENGINE_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications." />}}

{{< refItem name="OTA_ENGINE_GITHUB_TOKEN" type="string" description="GitHub token for dataset publishing. If both GitHub and GitLab tokens are configured, GitHub takes precedence." />}}

{{< refItem name="OTA_ENGINE_GITLAB_RELEASES_TOKEN" type="string" description="GitLab token for dataset publishing. Used only if GitHub token is not configured." />}}

{{< refItem name="OTA_ENGINE_DATAGOUV_API_KEY" type="string" description="API key for data.gouv.fr dataset publishing." />}}

{{< refItem name="OTA_ENGINE_FETCHER_NO_SANDBOX" type="string" description="Set to any value to launch the headless browser without its sandbox, for containerised environments such as Docker where the sandbox cannot run." />}}

{{< refItem name="OTA_ENGINE_FETCHER_NO_HEADLESS" type="string" description="Set to any value to run the browser with a visible window instead of headless, which is useful for debugging fetching issues." />}}

{{< refItem name="HTTPS_PROXY" type="string" description="Proxy URL for the engine's outgoing HTTPS traffic, such as document fetching and dataset publishing to GitLab. The lowercase `https_proxy` variable is also supported and takes precedence." />}}

{{< refItem name="HTTP_PROXY" type="string" description="Proxy URL for the engine's outgoing HTTP traffic. Also used as a fallback when `HTTPS_PROXY` is not set. The lowercase `http_proxy` variable is also supported and takes precedence." />}}

---

### Issue reporter

{{< refItem name="OTA_ISSUE_REPORTER_GITHUB_TOKEN" type="string" description="GitHub token of the account managing the issues of the declarations repository, required when the reporter type is `github`." />}}

{{< refItem name="OTA_ISSUE_REPORTER_GITLAB_TOKEN" type="string" description="GitLab token of the account managing the issues of the declarations repository, required when the reporter type is `gitlab`." />}}

{{< refItem name="HTTPS_PROXY" anchorPrefix="issue-reporter" type="string" description="Proxy URL for the issue reporter's requests to GitLab. Not used with GitHub." />}}

{{< refItem name="OTA_ISSUE_REPORTER_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications of the reporter." />}}

---

### Federation API

{{< refItem name="OTA_FEDERATION_API_SMTP_PASSWORD" type="string" description="SMTP password for email error notifications." />}}
