# helpfinder-app

## Installation

Requires npm v3. If you don't want to conflict with an existing npm v2 installation, try [npm3](https://www.npmjs.com/package/npm3). [linklocal](https://www.npmjs.com/package/linklocal) is used to avoid crazy relative paths. Just run it before `npm install` and it will create a symbolic link to `app/` in `node_modules`.

```
$ npm install -g linklocal
$ linklocal
$ npm3 install
```

## Distribution

### Web

To build for the web, run

```bash
$ npm run bundle-web
```

To deploy to the web, run

```bash
$ npm run deploy-web
```

That will deploy it to gh-page branch of [github.com/rreusser/helpfinder](https://github.com/rreusser/helpfinder). You can see the result at [rreusser.github.io/helpfinder/](https://rreusser.github.io/helpfinder/)
