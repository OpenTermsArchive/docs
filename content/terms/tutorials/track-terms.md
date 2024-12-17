---
title: Track your first terms
weight: 1
---

# Track your first terms

This tutorial will guide you through creating your first Open Terms Archive collection.

By the end, you'll have a working collection that tracks changes to a service's privacy policy. You will also have a basic understanding of how to create a collection and how to set up the API.

## Prerequisites

- Node.js installed on your system
- Basic familiarity with the command line
- A text editor

## Track a terms

### Step 1: Set up the project structure

1. Create a new directory for your collection:
   ```bash
   mkdir ota-tutorial-declarations
   cd ota-tutorial-declarations
   ```

2. Create a `declarations` directory inside your project. This is where you will declare the services and terms you want to track:
   ```bash
   mkdir declarations
   ```

### Step 2: Create your first service declaration

For this tutorial, we will use the Privacy Policy of Open Terms Archive as an example.
1. Create a file `declarations/Open Terms Archive.js` with this basic structure, the first thing to declare is the service name:
   ```json
   {
     "name": "Open Terms Archive"
   }
   ```

Now, you can add a terms you want to track to the declaration. For this example, we will use the Privacy Policy of Open Terms Archive. 

2. Add the Privacy Policy document configuration:
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
   - Check the extracted version, which should contain the Privacy Policy of Open Terms Archive in the markdown format without insignificant content (like the header, footer, etc.): `./data/versions/Open Terms Archive/Privacy Policy.md`
   - Check the snapshot, which is the original html document of the Open Terms Archive Privacy Policy: `./data/snapshots/Open Terms Archive/Privacy Policy.html`

