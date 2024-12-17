---
title: Define metadata
weight: 2
---

# How to define metadata

This guide will help you create the metadata.yml file for your Open Terms Archive collection.

## Prerequisites

- A text editor
- Basic understanding of YAML syntax
- Your collection's basic information ready

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

3. Add detailed description and URLs:
   ```yaml
   description: "A more detailed explanation of your collection's purpose"
   dataset: "https://github.com/YourOrg/your-collection-versions/releases"
   declarations: "https://github.com/YourOrg/your-collection-declarations"
   versions: "https://github.com/YourOrg/your-collection-versions"
   snapshots: "https://github.com/YourOrg/your-collection-snapshots"
   ```

4. Configure tracking periods:
   ```yaml
   trackingPeriods:
     - startDate: "YYYY-MM-DD"    # When tracking begins
       schedule: "0 0 * * *"      # Cron expression for frequency
       serverLocation: "City, CC"  # Server location (City, Country code)
   ```

5. Define governance structure:
   ```yaml
   governance:
     hosts:
       - name: "Host Organization"
         url: "https://organization-website.com"
         logo: "https://path-to-logo.png"
     administrators:
       - name: "Admin Organization"
         url: "https://admin-website.com"
         logo: "https://path-to-logo.png"
   ```

6. Add optional fields as needed:
   ```yaml
   logo: "https://path-to-collection-logo.png"
   donation: "https://donation-page-url.com"
   ```

7. Validate your YAML syntax using a YAML validator.

## Validation

Ensure your metadata file:
- Contains all required fields
- Uses correct YAML syntax
- Has valid URLs
- Uses proper date formats (YYYY-MM-DD)
- Contains valid language and jurisdiction codes

## Result

A properly configured `metadata.yml` file in your collection's root directory that defines your collection's essential characteristics and operational parameters.

## Next Steps

After creating your metadata.yml file:
1. Commit it to your collection's repository
2. Test it with the Open Terms Archive engine
3. Update as needed based on validation results
