# logger

[![License][license-badge]][license-url] [![Travis CI][travis-badge]][travis-url] [![Coverage Status][coverage-badge]][coverage-url] [![Commitizen][commitizen-badge]][commitizen-url]

> 💢 Make logging friendlier, simpler and use emojis in your messages. Try logger!

## Installation

logger is available on npm/yarn:

```bash
$ npm install logger.js --save
$ yarn add logger.js
```

## Usage

### With ES6/import

```js
import Logger from 'logger.js';

Logger.success('Success message example.');
Logger.error('Error message example.');
Logger.warn('Warning message example.');
Logger.info('Information message example.');
```

### With require

```js
const Logger = require('logger.js');

Logger.success('Success message example.');
Logger.error('Error message example.');
Logger.warn('Warning message example.');
Logger.info('Information message example.');
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

This project adheres to [Semantic Versioning](https://semver.org/). Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/codevor/logger.js/releases) page.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/codevor/logger.js/issues).

## License

[MIT License](LICENSE) © [Codevor](https://github.com/codevor)

[license-badge]: https://img.shields.io/github/license/codevor/logger.js.svg
[license-url]: https://opensource.org/licenses/MIT
[coverage-badge]: https://coveralls.io/repos/github/codevor/logger.js/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/codevor/logger.js?branch=master
[travis-badge]: https://travis-ci.org/codevor/logger.js.svg?branch=master
[travis-url]: https://travis-ci.org/codevor/logger.js
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
