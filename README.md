Open Terms Archive documentation.

## Installation

### Dependencies

This website is built using [Hugo](https://gohugo.io), a static website editor, and uses [Node.js](https://nodejs.org).

To build it, [install Hugo](https://gohugo.io/getting-started/installing/) (>= v0.114.0) and [Node.js](https://nodejs.org), and then:

```sh
git clone https://github.com/OpenTermsArchive/docs
cd docs
npm install
hugo
```

## Usage

### Building the site

```sh
hugo
```

The website will be built in the `public` directory.

### Serving the app locally

For development purposes:

```sh
npm run start:dev
```

### Linting Markdown files

To lint the Markdown files use the following command:

```sh
npm run lint:markdown
```

To apply automatic corrections use the following command:

```sh
npm run lint:markdown -- --fix
```

### Linting CSS files

To lint the CSS files use the following command:

```sh
npm run lint:css
```

To apply automatic corrections use the following command:

```sh
npm run lint:css -- --fix
```

### Linting JavaScript files

To lint the JavaScript files use the following command:

```sh
npm run lint:js
```

To automatically fix, where possible, problems reported:

```sh
npm run lint:js -- --fix
```

### Check for broken links

Build the site

```sh
hugo --minify
```

and run

```sh
npm run test:links
```

- - -

## License

This work is licensed under the [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/) International License.

This means you are free to share (copy and redistribute the material in any medium or format) and adapt (remix, transform, and build upon the material
for any purpose, even commercially) as long as you credit “Open Terms Archive contributors” as original author, provide a link to the license, and indicate which changes were made; and distribute your contributions under the same license as the original.
