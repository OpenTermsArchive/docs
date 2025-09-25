import { writeFile, readFile } from 'fs/promises';

import fetch from 'node-fetch';

async function fetchOpenApiSpec() {
  const url = 'http://localhost:3000/collection-api/v1/docs/';
  
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' } });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error.code === 'ECONNREFUSED' || error.cause?.code === 'ECONNREFUSED') {
      console.error(`
❌ Unable to connect to the collection API server at ${url}

To generate the metadata reference documentation, you need to start the collection API server manually:

1. In a separate terminal, navigate to a the engine directory at the latest version
2. Start the server with: npm run start:api
3. Then run this script again: npm run generate-metadata-reference

The server must be running and accessible before generating the documentation.
`);
    } else {
      console.error(`Failed to fetch OpenAPI specification from ${url}:`, error.message);
    }
    
    throw error;
  }
}

function generateConfigOption(propertyName, propertyData, requiredProperties, indent = '') {
  let propertyType = propertyData.type || 'string';

  // Use format as type if it exists for strings
  if (propertyData.type === 'string' && propertyData.format) {
    propertyType = propertyData.format;
  }
  // Handle arrays by using their item type
  if (propertyData.type === 'array') {
    const itemType = (propertyData.items && propertyData.items.type) || 'string';

    propertyType = `array of ${itemType}s`;
  }
  // Handle objects with additionalProperties (object of object)
  if (propertyData.type === 'object' && propertyData.additionalProperties) {
    const valueType = propertyData.additionalProperties.type || 'object';

    propertyType = `object of ${valueType}s`;
  }

  // Add section link if the object has properties or additionalProperties with properties
  let description = propertyData.description || '';

  if ((propertyData.type === 'object' && (propertyData.properties || (propertyData.additionalProperties && propertyData.additionalProperties.properties)))
      || (propertyData.type === 'array' && propertyData.items && propertyData.items.type === 'object' && propertyData.items.properties)) {
    const sectionName = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
    const sectionLink = sectionName.toLowerCase();

    description += description ? ' ' : '';
    description += `See [${sectionName}]({{< relref \"#${sectionLink}\" >}}) section.`;
  }

  const allowedValues = (propertyData.enum || (propertyData.type === 'array' && propertyData.items && propertyData.items.enum))
    ? `${indent}    allowedValues="${(propertyData.enum || (propertyData.items && propertyData.items.enum)).map(v => `\`${v}\``).join(', ')}"\n`
    : '';

  // Check if example is multiline (contains newlines)
  const hasMultilineExample = propertyData.example && propertyData.example.includes('\n');

  const example = propertyData.example && !hasMultilineExample
    ? `${indent}    example=${Array.isArray(propertyData.example)
      ? `"[${propertyData.example.join(', ')}]"`
      : `"${propertyData.example}"`}\n`
    : '';

  // Use self-closing tag for single-line examples, opening/closing tags for multiline examples
  if (hasMultilineExample) {
    const multilineExample = propertyData.example.replace(/\\n/g, '\n');

    return `<!-- GENERATED DOCUMENTATION DO NOT EDIT THIS MANUALLY -->
${indent}{{< refItem
${indent}    name="${propertyName.replace(/"/g, '\\"')}"
${indent}    type="${propertyType}"
${indent}    description="${description.replace(/"/g, '\\"')}"
${allowedValues}${indent}    required=${requiredProperties.includes(propertyName)}
${indent}>}}
\`\`\`yaml
${multilineExample}
\`\`\`
${indent}{{< /refItem >}}
`;
  }

  return `<!-- GENERATED DOCUMENTATION DO NOT EDIT THIS MANUALLY -->
${indent}{{< refItem
${indent}    name="${propertyName.replace(/"/g, '\\"')}"
${indent}    type="${propertyType}"
${indent}    description="${description.replace(/"/g, '\\"')}"
${allowedValues}${example}${indent}    required=${requiredProperties.includes(propertyName)}
${indent}/>}}
`;
}

function generateNestedProperties(propertyName, propertyData, requiredProperties) {
  let result = '';

  // Handle array item properties
  if (propertyData.type === 'array' && propertyData.items && propertyData.items.properties) {
    result = Object.entries(propertyData.items.properties)
      .filter(([ _, propData ]) => !propData['x-ota-generated'])
      .map(([ name, propData ]) =>
        generateConfigOption(name, propData, propertyData.items.required || []))
      .join('\n');
  }

  // Handle object properties
  if (propertyData.type === 'object' && propertyData.properties) {
    result = Object.entries(propertyData.properties)
      .filter(([ _, propData ]) => !propData['x-ota-generated'])
      .map(([ name, propData ]) =>
        generateConfigOption(name, propData, propertyData.required || []))
      .join('\n');
  }

  // Handle additionalProperties
  if (propertyData.additionalProperties && typeof propertyData.additionalProperties === 'object') {
    const propData = propertyData.additionalProperties;

    if (propData.properties) {
      const additionalProps = Object.entries(propData.properties)
        .filter(([ _, propData ]) => !propData['x-ota-generated'])
        .map(([ name, propData ]) =>
          generateConfigOption(name, propData, propertyData.additionalProperties.required || []))
        .join('\n');

      if (additionalProps) {
        result += additionalProps;
      }
    }
  }

  return result;
}

function generateMarkdown(spec) {
  const metadataSchema = (spec.components && spec.components.schemas && spec.components.schemas.Metadata) || {};
  const requiredProperties = metadataSchema.required || [];

  // First generate all top-level properties
  const mainConfigOptions = Object.entries(metadataSchema.properties || {})
    .filter(([ _, propertyData ]) => !propertyData['x-ota-generated'])
    .map(([ propertyName, propertyData ]) =>
      // Always generate the basic configOption, even for objects
      generateConfigOption(propertyName, propertyData, requiredProperties))
    .join('\n');

  // Then generate nested properties sections
  const nestedSections = Object.entries(metadataSchema.properties || {})
    .filter(([ _, propertyData ]) => !propertyData['x-ota-generated'])
    .map(([ propertyName, propertyData ]) => {
      if (propertyData.type === 'object'
          || (propertyData.type === 'array' && propertyData.items && propertyData.items.type === 'object')) {
        const nestedDocs = generateNestedProperties(propertyName, propertyData, requiredProperties);

        if (nestedDocs) {
          return `\n---\n\n### ${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}\n\n${nestedDocs}`;
        }
      }

      return '';
    })
    .filter(section => section) // Remove empty sections
    .join('\n');

  return mainConfigOptions + nestedSections;
}

async function main() {
  try {
    console.log('Fetching OpenAPI specification from collection API server…');
    const spec = await fetchOpenApiSpec();
    
    console.log('Generating metadata documentation…');
    const configOptions = generateMarkdown(spec);

    const existingContent = await readFile('content/collections/reference/metadata.md', 'utf8');

    const fieldsIndex = existingContent.indexOf('## Fields');

    const headerContent = fieldsIndex !== -1
      ? `${existingContent.slice(0, fieldsIndex)}## Fields\n\n`
      : existingContent;

    const finalContent = headerContent + configOptions;

    await writeFile('content/collections/reference/metadata.md', finalContent);
    console.log('✅ Documentation generated successfully!');
  } catch (error) {
    // The detailed error message is already shown in fetchOpenApiSpec
    // Just exit with error code for CI/scripts
    process.exit(1);
  }
}

main();
