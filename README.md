# @neos21/req-cmd

`require()` API and CLI in one JS.

This npm package is made from one file `index.js` only.

# How to use

## `require()` API

```javascript
const reqCmd = require('@neos21/req-cmd');

reqCmd();

// -> '@neos21/req-cmd by Neo (@Neos21) http://neo.s21.xrea.com/'
```

## CLI

```sh
$ npm install -D @neos21/req-cmd
```

Add npm-scripts:

```json
{
  "name": "test-project",
  "scripts": {
    "exec": "req-cmd"
  },
}
```

```sh
$ npm run exec

> test-project@0.0.0 exec
> req-cmd

@neos21/req-cmd by Neo (@Neos21) http://neo.s21.xrea.com/
```

# Author

[Neo](http://neo.s21.xrea.com/) ([@Neos21](https://twitter.com/neos21))

- [npmjs - @neos21/req-cmd](https://www.npmjs.com/package/@neos21/req-cmd)