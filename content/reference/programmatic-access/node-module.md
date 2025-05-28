---
title: Node.js module
weight: 1
---

# Node.js module

As a Node module dependency, the engine exposes a JavaScript API that can be called in your own code.

<!-- markdownlint-disable -->

#### Classes

* [SourceDocument](#SourceDocument)
    * [`new SourceDocument(params)`](#new_SourceDocument_new)

#### Functions

* [`extract(sourceDocument)`](#extract) ⇒ <code>Promise.&lt;string&gt;</code>
* [`launchHeadlessBrowser()`](#launchHeadlessBrowser) ⇒ <code>Promise.&lt;puppeteer.Browser&gt;</code>
* [`stopHeadlessBrowser()`](#stopHeadlessBrowser) ⇒ <code>Promise.&lt;void&gt;</code>
* [`fetch(params)`](#fetch) ⇒ <code>Promise.&lt;{mimeType: string, content: (string\|Buffer)}&gt;</code>

---

<a name="SourceDocument"></a>

#### SourceDocument
**Kind**: global class  
<a name="new_SourceDocument_new"></a>

##### `new SourceDocument(params)`
Represents a source document containing web content and metadata for extraction.
Includes the document location, selectors for content inclusion/exclusion,
content filters, raw content data, and MIME type information.


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | The source document parameters |
| params.location | <code>string</code> | The URL location of the document |
| params.executeClientScripts | <code>boolean</code> | Whether to execute client-side scripts |
| params.contentSelectors | <code>string</code> \| <code>object</code> \| <code>Array</code> | CSS selectors for content to include |
| params.insignificantContentSelectors | <code>string</code> \| <code>object</code> \| <code>Array</code> | CSS selectors for content to exclude |
| params.filters | <code>Array</code> | Array of filters to apply |
| params.content | <code>string</code> | The document content |
| params.mimeType | <code>string</code> | The MIME type of the content |

<a name="extract"></a>

#### `extract(sourceDocument)` ⇒ <code>Promise.&lt;string&gt;</code>
Extract content from source document and convert it to Markdown

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - Promise which is fulfilled once the content is extracted and converted in Markdown. The promise will resolve into a string containing the extracted content in Markdown format  

| Param | Type | Description |
| --- | --- | --- |
| sourceDocument | <code>string</code> | Source document from which to extract content, see [SourceDocument](#SourceDocument) |

<a name="launchHeadlessBrowser"></a>

#### `launchHeadlessBrowser()` ⇒ <code>Promise.&lt;puppeteer.Browser&gt;</code>
Launches a headless browser instance using Puppeteer if one is not already running. Returns the existing browser instance if one is already running, otherwise creates and returns a new instance.

**Kind**: global function  
**Returns**: <code>Promise.&lt;puppeteer.Browser&gt;</code> - The Puppeteer browser instance.  
<a name="stopHeadlessBrowser"></a>

#### `stopHeadlessBrowser()` ⇒ <code>Promise.&lt;void&gt;</code>
Stops the headless browser instance if one is running. If no instance exists, it does nothing.

**Kind**: global function  
<a name="fetch"></a>

#### `fetch(params)` ⇒ <code>Promise.&lt;{mimeType: string, content: (string\|Buffer)}&gt;</code>
Fetch a resource from the network, returning a promise which is fulfilled once the response is available

**Kind**: global function  
**Returns**: <code>Promise.&lt;{mimeType: string, content: (string\|Buffer)}&gt;</code> - Promise containing the fetched resource's MIME type and content  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Fetcher parameters |
| params.url | <code>string</code> | URL of the resource you want to fetch |
| [params.executeClientScripts] | <code>boolean</code> | Enable execution of client scripts. When set to `true`, this property loads the page in a headless browser to load all assets and execute client scripts before returning its content |
| [params.cssSelectors] | <code>string</code> \| <code>Array</code> | List of CSS selectors to await when loading the resource in a headless browser. Can be a CSS selector or an array of CSS selectors. Only relevant when `executeClientScripts` is enabled |
| [params.config] | <code>object</code> | Fetcher configuration |
| [params.config.navigationTimeout] | <code>number</code> | Maximum time (in milliseconds) to wait before considering the fetch failed |
| [params.config.language] | <code>string</code> | Language (in [ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) to be passed in request headers |
| [params.config.waitForElementsTimeout] | <code>number</code> | Maximum time (in milliseconds) to wait for selectors to exist on page before considering the fetch failed. Only relevant when `executeClientScripts` is enabled |

<!-- markdownlint-enable -->
