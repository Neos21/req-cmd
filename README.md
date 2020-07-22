# req-cmd : @neos21/req-cmd

[![NPM Version](https://img.shields.io/npm/v/@neos21/req-cmd.svg)](https://www.npmjs.com/package/@neos21/req-cmd) [![GPR Version](https://img.shields.io/github/package-json/v/neos21/req-cmd?label=github)](https://github.com/Neos21/req-cmd/packages/324560)

`require()` API and CLI in one JS.

This npm package is made from one file `index.js` only.


## How to use

### `require()` API

```javascript
const reqCmd = require('@neos21/req-cmd');

reqCmd();

// -> '@neos21/req-cmd by Neo (@Neos21) http://neo.s21.xrea.com/'
```

### CLI

```sh
$ npm install -D @neos21/req-cmd
```

Add npm-scripts:

```json
{
  "name": "test-project",
  "scripts": {
    "exec": "req-cmd"
  }
}
```

```sh
$ npm run exec

> test-project@0.0.0 exec
> req-cmd

@neos21/req-cmd by Neo (@Neos21) http://neo.s21.xrea.com/
```


## Author

[Neo](http://neo.s21.xrea.com/)

- [GitHub - req-cmd](https://github.com/Neos21/req-cmd)
- [npmjs - @neos21/req-cmd](https://www.npmjs.com/package/@neos21/req-cmd)


## Links

- [Neo's World](http://neo.s21.xrea.com/)
- [Corredor](https://neos21.hatenablog.com/)
- [Murga](https://neos21.hatenablog.jp/)
- [El Mylar](https://neos21.hateblo.jp/)
- [Neo's GitHub Pages](https://neos21.github.io/)
- [GitHub - Neos21](https://github.com/Neos21/)
