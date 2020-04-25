# mithril-htm-typescript

This is a tiny discovery. Apparently Mithril.js can be used with `developit/htm`. I guess it makes sense as Mithril uses Hyperscript.

This template is highly flexible, and only requires mithril and htm for runtime, and they are packed with webpack in build-time.

Entrypoint: `src/index.ts`, Static index.html at `public`.

## Disclaimer

I am a novice programmer. This is a product of toying around with new fresh libs and different build tools.

Perhaps you might also be interested in [lit-element-webpack-ts-sample](https://github.com/lexffe/lit-element-webpack-ts-sample).

## Dev

```bash
# Traditional build and webserver provided by express
$ npm test

# With hot-reloading provided by webpack-dev-server
$ npm run dev
```
