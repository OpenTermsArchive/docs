---
title: Node.js module
weight: 1
---

# Node.js module

As a Node module dependency, the engine exposes a JavaScript API that can be called in your own code.

<!-- markdownlint-disable -->

#### Classes

* [Record](#Record)
    * [`new Record()`](#new_Record_new)

#### Constants

* [`router`](#router)

#### Functions

* [`extract(sourceDocument)`](#extract) ⇒ <code>Promise.&lt;string&gt;</code>
* [`fetch(params)`](#fetch) ⇒ <code>Promise</code>
* ~~[`normalizeConfig()`](#normalizeConfig)~~

---

<a name="Record"></a>

#### Record
**Kind**: global class  
<a name="new_Record_new"></a>

##### `new Record()`
Abstract Class Record.

<a name="router"></a>

#### `router`
**Kind**: global constant  
**Swagger**: tags:
  name: Versions
  description: Versions API
components:
  schemas:
    Version:
      type: object
      description: Version content and metadata
      properties:
        fetchDate:
          type: string
          format: date-time
          description: The ISO 8601 datetime string when the version was recorded.
        id:
          type: string
          description: The ID of the version.
        content:
          type: string
          description: The JSON-escaped Markdown content of the version.  
<a name="extract"></a>

#### `extract(sourceDocument)` ⇒ <code>Promise.&lt;string&gt;</code>
Extract content from source document and convert it to Markdown

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - Promise which is fulfilled once the content is extracted and converted in Markdown. The promise will resolve into a string containing the extracted content in Markdown format  

| Param | Type | Description |
| --- | --- | --- |
| sourceDocument | <code>string</code> | Source document from which to extract content, see [./src/archivist/services/sourceDocument.js](./src/archivist/services/sourceDocument.js) |

<a name="fetch"></a>

#### `fetch(params)` ⇒ <code>Promise</code>
Fetch a resource from the network, returning a promise which is fulfilled once the response is available

**Kind**: global function  
**Returns**: <code>Promise</code> - @returns {Promise<Object>} Promise which will be resolved with an object containing the `mimeType` and the `content` of the URL as string or Buffer  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Fetcher parameters |
| params.url | <code>string</code> | URL of the resource you want to fetch |
| [params.executeClientScripts] | <code>boolean</code> | Enable execution of client scripts. When set to `true`, this property loads the page in a headless browser to load all assets and execute client scripts before returning its content |
| [params.cssSelectors] | <code>string</code> \| <code>Array</code> | List of CSS selectors to await when loading the resource in a headless browser. Can be a CSS selector or an array of CSS selectors. Only relevant when `executeClientScripts` is enabled |
| [params.config] | <code>Object</code> | Fetcher configuration |
| [params.config.navigationTimeout] | <code>number</code> | Maximum time (in milliseconds) to wait before considering the fetch failed |
| [params.config.language] | <code>string</code> | Language (in [ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) to be passed in request headers |
| [params.config.waitForElementsTimeout] | <code>number</code> | Maximum time (in milliseconds) to wait for selectors to exist on page before considering the fetch failed. Only relevant when `executeClientScripts` is enabled |

<a name="normalizeConfig"></a>

#### ~~`normalizeConfig()`~~
***Deprecated***

Support for legacy config format where reporter configuration was nested under `githubIssues`
Example:

```json
{
  "githubIssues": {
    "repositories": {
      "declarations": "OpenTermsArchive/sandbox-declarations"
    }
  }
}
```

**Kind**: global function  
<!-- markdownlint-enable -->
