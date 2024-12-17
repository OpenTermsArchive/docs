---
title: Create your first collection
weight: 1
---

# Create your first collection

This tutorial will guide you through creating your first Open Terms Archive collection.

By the end, you'll have a working collection that tracks changes to a service's privacy policy. You will also have a basic understanding of how to create a collection.

## Prerequisites

- Node.js installed on your system
- Basic familiarity with the command line
- A text editor

## Create a collection

### Step 1: Set up the project structure

1. Create a new directory:
    ```bash
    mkdir ota-tutorial-declarations
    cd ota-tutorial-declarations
    ```

2. Create a `declarations` directory inside the project. This is where you will declare the service and terms you want to track:
    ```bash
    mkdir declarations
    ```

3. Create the configuration file for the collection:
    ```bash
    mkdir config
    ```

### Step 2: Create the service declaration

4. Create a file `declarations/Open Terms Archive.js` with the basic structure, the first thing to declare is the service name:
    ```json
    {
      "name": "Open Terms Archive",
      "documents": {
        "Privacy Policy": {
          "fetch": "https://opentermsarchive.org/en/privacy-policy",
          "select": ".textcontent"
        }
      }
    }
    ```

### Step 2: Create the metadata file

6. Create a file `metadata.yaml`:
    ```yaml
    id: ota-tutorial
    name: Tutorial collection
    tagline: Learn how to create an Open Terms Archive collection
    description: |
      A step-by-step tutorial collection that guides through creating an Open Terms Archive collection.
      Track terms and conditions from websites while learning the basics of declarations, configuration, and metadata.
    languages: [en]
    jurisdictions: [EU]
    ```

### Step 3: Create the configuration file

5. Create a file `config/development.json` and set the tracking schedule to every minute:
    ```json
    {
      "trackingSchedule": "* * * * *"
    }
    ```

### Step 4: Install and run the engine

1. Install the Open Terms Archive engine:
    ```bash
    npm install --save @opentermsarchive/engine
    ```

2. Start the scheduled tracking of the declared terms:
    ```bash
    npx ota track --schedule
    ```

3. After one minute, check the results:
  - Check the extracted version, which should contain the Privacy Policy of Open Terms Archive in the markdown format without insignificant content (like the header, footer, etc.): `./data/versions/Open Terms Archive/Privacy Policy.md`
  - Check the snapshot, which is the original html document of the Open Terms Archive Privacy Policy: `./data/snapshots/Open Terms Archive/Privacy Policy.html`

Congratulations! You have created your first collection.
