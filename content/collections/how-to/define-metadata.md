---
title: Define metadata
weight: 3
---

# How to define metadata

This guide will help you define the metadata for your Open Terms Archive collection.

## Prerequisites

- A text editor.
- Basic understanding of the [YAML syntax](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html).
- Your collection's basic information ready.

## Steps

1. Create a new file named `metadata.yml` in your collection's root directory.

2. Define the required basic information:

    ```yaml
    name: "Your Collection Name"    # Keep it under 3 words
    id: "your-collection-id"        # Create a simple dash-separated identifier
    tagline: "Brief description"    # Write a one-line collection summary
    languages: ["en"]               # List ISO 639 language codes
    jurisdictions: ["US"]           # List ISO 3166-2 country codes
    ```

3. Add detailed description and repositories URLs:

    ```yaml
    description: "A more detailed explanation of your collection's purpose"
    dataset: "https://github.com/YourOrg/your-collection-versions/releases"
    declarations: "https://github.com/YourOrg/your-collection-declarations"
    versions: "https://github.com/YourOrg/your-collection-versions"
    snapshots: "https://github.com/YourOrg/your-collection-snapshots"
    ```

4. Define tracking periods:

    ```yaml
    trackingPeriods:
      - startDate: "YYYY-MM-DD"     # When tracking begins
        schedule: "0 0 * * *"       # Cron expression for frequency
        serverLocation: "City, CC"  # Server location (City, Country code)
    ```

5. Define governance structure:

    ```yaml
    governance:
    - name: "Host entity"
      url: "https://entity-website.com"
      logo: "https://path-to-logo.png"
      roles: ["curator", "maintainer"]
    - name: "Admin entity"
      url: "https://admin-website.com"
      logo: "https://path-to-logo.png"
      roles: ["administrator"]
    ```

6. Add optional fields as needed:

    ```yaml
    logo: "https://path-to-collection-logo.png"
    donations: "https://donation-page-url.com"
    ```

7. Validate your YAML syntax using a YAML validator.
