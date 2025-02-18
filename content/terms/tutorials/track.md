---
title: Track your first terms
---

# Track your first terms

This tutorial will guide you through tracking your first terms.

By the end, you'll have tracked a service's privacy policy. You will also have a basic understanding of how to run the engine to track terms.

## Prerequisites

- [Node.js](https://nodejs.org/en) is installed on your system.
- You have basic familiarity with the command line.
- You have basic familiarity with HTML and CSS selectors.
- You know how to use a text editor.

## Track terms

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

### Step 2: Create the service declaration

For this tutorial, we will use the Privacy Policy of Open Terms Archive as an example.

Create a file `declarations/Open Terms Archive.json`. The name of the file is the name of the service that will be tracked. The first thing to declare is the tracked service name:
    ```json
    {
      "name": "Open Terms Archive"
    }
    ```

Now, you can add terms you want to track to the declaration. For this example, we will use the Privacy Policy.

You can go on the Open Terms Archive [website](https://opentermsarchive.org/) and copy the URL of its [Privacy Policy](https://opentermsarchive.org/en/privacy-policy/) to fill the `fetch` field.

And you can inspect the HTML of the page to get the selector of the content you want to extract to fill the `select` field.

The resulting declaration should look something like this:
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

### Step 3: Install and run the engine

1. Install the Open Terms Archive engine:
    ```bash
    npm install --save @opentermsarchive/engine
    ```

2. Start a one time tracking of the declared terms:
    ```bash
    npx ota track
    ```

3. Verify the results:
  - Check the extracted version, which should contain the Privacy Policy of Open Terms Archive in Markdown format without any other content (no header, footer…): `./data/versions/Open Terms Archive/Privacy Policy.md`.
  - Check the snapshot, which is the original HTML document of the Open Terms Archive Privacy Policy: `./data/snapshots/Open Terms Archive/Privacy Policy.html`.

Congratulations! You have tracked your first terms.
