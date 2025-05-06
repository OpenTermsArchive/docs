---
title: Deployment architecture
linkTitle: Architecture
weight: 1
---

# Deployment architecture

This document provides an overview of the key components and elements involved in the deployment process of a collection.

## Repository structure

A collection is defined by three repositories that work together to manage and track terms.

The declarations repository, `<collection_name>-declarations`, serves as the primary workspace for collection maintainers, containing declarations of the terms to track along with engine and deployment configurations.

This repository is complemented by two automatically managed repositories:

- The versions repository, `<collection_name>-versions`, which maintains a chronological history of terms changes in their readable format
- The snapshots repository, `<collection_name>-snapshots`, which maintains a chronological history of the original source document (HTML, PDF…) from which the terms will be extracted

These repositories must be considered as databases and are automatically updated by the engine whenever changes are detected in the tracked terms.

## Infrastructure

The server is where the Open Terms Archive engine runs.

The server requires administrative access to allow setting up the system in the appropriate state.

It has an Ed25519 SSH host key pair, `ssh_host_ed25519_key`, which provides a unique server fingerprint, `<server_ssh_fingerprint>`, for identity verification.

There is also a dedicated deployment user account, `<deployment_user>`, with passwordless sudo access to facilitate automated deployment tasks while maintaining security.

Process management is handled through [PM2](https://pm2.keymetrics.io/) and ensures the Open Terms Archive engine runs continuously and reliably.

The engine itself is the core application that performs the actual term tracking and repository management tasks.

## Security elements

### Authentication

Security is maintained through multiple layers of authentication.

The server's SSH host key pair, `ssh_host_ed25519_key`, generates a unique server fingerprint, `<server_ssh_fingerprint>`. This fingerprint verifies server identity and prevents man-in-the-middle attacks during deployment.

The deployment process uses a dedicated SSH key pair, `ota-deploy`, for secure server connections during the continuous deployment workflow.

A separate collection-specific SSH key pair, `<collection_name>-key`, enables the engine to perform GitHub actions as a bot user.

Access to GitHub repositories is controlled through a fine-grained access token, `OTA_ENGINE_GITHUB_TOKEN`, that provides specific permissions for repository management.

### Secret management

Sensitive information is protected by the [Ansible Vault](https://docs.ansible.com/ansible/latest/vault_guide/index.html) encryption system.

The vault system uses a master password, `vault.key` to encrypt and decrypt sensitive data. This includes the environment configuration file, `.env`, and the GitHub bot's private key, `github-bot-private-key`, ensuring that sensitive credentials remain secure while still being accessible to the deployment process.

## Automation tools

[GitHub Actions](https://docs.github.com/en/actions) and [Ansible](https://www.ansible.com/) automate the deployment process. GitHub Actions runs the workflow while Ansible configures the server and deploys the engine.

A dedicated GitHub user account is used for bot-related actions such as committing entries in versions and snapshots repositories, reporting issues when tracking fails, and publishing releases. This account is configured with specific permissions to perform these automated tasks.

The engine sends email notifications to collection administrators when errors or issues occur during the tracking process, enabling prompt intervention when needed.

The engine automatically creates issues in the declarations repository to notify collection maintainers when terms can no longer be tracked. These issues provide details about the tracking failure to allow maintainers to investigate and resolve the problem.

## Configuration files

The system's behavior is controlled through several key configuration files:

- `inventory.yml`: Defines server address and deployment parameters
- `production.json`: Stores application-specific settings
- `vault.key`: Protects sensitive data through encryption

## Maintenance

The Open Terms Archive system is designed for continuous operation with minimal intervention.

The engine automatically tracks changes in terms, commits updates to the appropriate repositories, reports issues and sends notifications when issues occur.

System health is maintained through PM2's process management capabilities.

Regular administrative maintenance involves updating collections dependencies such as engine and deployment recipes. It also includes monitoring email notifications and reviewing application logs in case of issues or tracking interruptions.
