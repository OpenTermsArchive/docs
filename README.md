Open Terms Archive documentation.

# Installation

## Dependencies

This website is built using [Hugo](https://gohugo.io), a static website editor, and uses [Node.js](https://nodejs.org).

To build it, [install Hugo](https://gohugo.io/getting-started/installing/) and [Node.js](https://nodejs.org), and then:

```sh
git clone https://github.com/OpenTermsArchive/docs
cd docs
hugo
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
hugo serve --watch --verbose --disableFastRender
```

### Linting Markdown files

To view errors:

```sh
npm run lint:markdown
```

To automatically fix, where possible, problems reported:

```sh
npm run lint:markdown --fix
```

---

## License

This work is licensed under the [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/) International License.

This means you are free to share (copy and redistribute the material in any medium or format) and adapt (remix, transform, and build upon the material
for any purpose, even commercially) as long as you credit “Open Terms Archive contributors” as original author, provide a link to the license, and indicate which changes were made; and distribute your contributions under the same license as the original.
