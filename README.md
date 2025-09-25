Open Terms Archive documentation.

## Styleguide

### Order of menu sections

Pages and sections are ordered on the “end user” to “core team member” spectrum: the more up a page is in the menu, the more it is targeted at consumer end users, the more low it is the more it is targeted at committed contributors.

## Installation

### Dependencies

#### Hugo

[Install Hugo](https://gohugo.io/getting-started/installing/) in version `0.147.1` edition `extended`.

##### With Homebrew

1. Add Open Terms Archive homebrew tap: `brew tap OpenTermsArchive/homebrew-tap https://github.com/OpenTermsArchive/homebrew-tap`
2. Install Hugo: `brew install hugo@0.147.1`

See [Open Terms Archive homebrew tap](https://github.com/OpenTermsArchive/homebrew-tap) for more information.

#### Node.js and npm dependencies

[Install Node.js](https://nodejs.org), then install npm dependencies with the following commands:

```sh
git clone https://github.com/OpenTermsArchive/docs
cd docs
npm install
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

To check for broken links, run the following command:

```sh
npm run test:links
```

### Generate collection metadata reference

To generate collection metadata reference, run the following command:

```sh
npm run generate-metadata-reference
```

## Deployment

The `main` branch is used on production and automatically deployed through GitHub pages. Refer to the configuration file `.github/workflows/gh-pages.yml`.

For each pull request, a preview is automatically deployed through Netlify and a comment on the GitHub pull request display the necessary information, such as the preview URL. The configuration can be found in `netlify.toml` file.

- - -

## License

This work is licensed under the [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/) International License.

This means you are free to share (copy and redistribute the material in any medium or format) and adapt (remix, transform, and build upon the material
for any purpose, even commercially) as long as you credit “Open Terms Archive contributors” as original author, provide a link to the license, and indicate which changes were made; and distribute your contributions under the same license as the original.
