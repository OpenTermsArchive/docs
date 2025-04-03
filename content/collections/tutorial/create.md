---
title: Create your first collection
weight: 1
aliases:
  - /collections/create/
  - /collections/tutorials/create/
---

# Create your first collection

This tutorial will guide you through creating your first Open Terms Archive collection.

By the end, you'll have a working collection that tracks changes to a service's privacy policy. You will also have a basic understanding of how to create a collection.

## Prerequisites

- [Node.js](https://nodejs.org/en) is installed on your system.
- You have basic familiarity with the command line.
- You know how to use a text editor.

## Create a collection

### Step 1: Set up the directory structure

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

4. Create a file `declarations/Open Terms Archive.json` with the following content. For detailed instructions on how to structure it, follow the [Tracking terms tutorial]({{< relref "/terms/tutorial/track" >}}):
    ```json
    {
      "name": "Open Terms Archive",
      "terms": {
        "Privacy Policy": {
          "fetch": "https://opentermsarchive.org/en/privacy-policy",
          "select": ".textcontent"
        }
      }
    }
    ```

### Step 2: Create the metadata file

5. Create a file `metadata.yaml`:
    ```yaml
    id: ota-tutorial
    name: Tutorial collection
    tagline: Learn how to create a collection
    description: |
      A step-by-step tutorial collection that guides through creating an Open Terms Archive collection.
      Track terms and conditions from websites while learning the basics of declarations, configuration, and metadata.
    languages: [en]
    jurisdictions: [EU]
    ```

### Step 3: Create the configuration file

6. Create a file `config/development.json` and set the tracking schedule to every minute:
    ```json
    {
      "trackingSchedule": "* * * * *"
    }
    ```

### Step 4: Install and run the engine

7. Install the Open Terms Archive engine:
    ```bash
    npm install --save @opentermsarchive/engine
    ```

8. Start the scheduled tracking of the declared terms:
    ```bash
    npx ota track --schedule
    ```

9. After one minute, check the results:
  - Check the extracted version, which should contain the Privacy Policy of Open Terms Archive in Markdown format without any other content (no header, footer…): `./data/versions/Open Terms Archive/Privacy Policy.md`.
  - Check the snapshot, which is the original HTML document of the Open Terms Archive Privacy Policy: `./data/snapshots/Open Terms Archive/Privacy Policy.html`.

Congratulations! You have created your first collection.
