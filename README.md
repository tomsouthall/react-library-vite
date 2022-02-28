# react-library-vite

This repository accompanies the blog entry [Publishing a React component to npm using Vite](https://tomsouthall.com/blog/publishing-react-component-using-vite/).

This is a scaffold application for building a React library/component using Vite, that can be published to npm.

Feel free to clone this repository. Simply replace all instances of `react-library-vite` in `/package.json` and in `/vite.config.js` with the name of your npm package.

Replace `version`, `description` and `author` in `/package.json`.

## To run in development

```bash
npm run dev
```

## To run tests

```bash
npm test
```

or

```bash
npm run watch
```

## To build and publish

```bash
npm run build
```

followed by

```bash
npm publish
```

## License

MIT © [tomsouthall](https://github.com/tomsouthall)
