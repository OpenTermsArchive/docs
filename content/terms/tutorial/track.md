---
title: Track your first terms
aliases:
  - /terms/tutorials/track/
---

# Track your first terms

This tutorial will guide you through tracking your first terms.

By the end, you'll have tracked a service's privacy policy. You will also have a basic understanding of how to run the engine to track terms.

## Prerequisites

- [Node.js](https://nodejs.org/en) (version {{< engine-package key="engines.node" >}}) is installed on your system.
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

1. Create a file `declarations/Open Terms Archive.json`. The name of the file is the name of the service that will be tracked. The first thing to declare is the tracked service name:

    ```json
    {
      "name": "Open Terms Archive"
    }
    ```

2. Find the URL of Open Terms Archive Privacy Policy by browsing [the website](https://opentermsarchive.org), copy the URL and fill the `fetch` field with.

    ```json
    {
      "name": "Open Terms Archive",
      "terms": {
        "Privacy Policy": {
          "fetch": "https://opentermsarchive.org/en/privacy-policy"
        }
      }
    }
    ```

3. [Use a DOM inspector](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#using_a_dom_inspector) on the Open Terms Archive [Privacy Policy page](https://opentermsarchive.org/en/privacy-policy) to get the [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) of the content you want to extract. Add it to the `select` field. The final declaration should look like this:

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

3. Verify the results by checking the extracted version in `./data/versions/Open Terms Archive/Privacy Policy.md` file, which should contain only the meaningful content of the Privacy Policy in Markdown format.

Congratulations! You have tracked your first terms locally.

