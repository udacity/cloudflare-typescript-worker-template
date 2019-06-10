# Starter Template for a TypeScript Cloudflare Worker

A preconfigured starter template for building a [Tslint][tslint] strictly
linted/formatted, [Jest][jest] tested, [Webpack][webpack] built,
[TypeScript][typescript] [Cloudflare Worker][cfworker]. Uses the NPM packages
provided by the [`udacity/cloudflare-typescript-workers`][cf-ts-workers]
project.

[tslint]: https://palantir.github.io/tslint/
[jest]: https://jestjs.io/
[webpack]: https://webpack.js.org/
[typescript]: https://www.typescriptlang.org/
[cfworker]: https://www.cloudflare.com/products/cloudflare-workers/
[cf-ts-workers]: https://github.com/udacity/cloudflare-typescript-workers

## Getting Started

[Use this Github Repository Template][gen-template] or fork the repository to
create a new repository.

[Visual Studio Code][vscode] or any other IDE with [TypeScript
IntelliSense][ts-intellisense] or similar support is recommended.

[gen-template]: https://github.com/udacity/cloudflare-typescript-worker-template/generate
[vscode]: https://code.visualstudio.com/
[ts-intellisense]: https://code.visualstudio.com/docs/languages/typescript

### Usage

```bash
# Setup node_modules
npm i
# Run linter
npm run lint
# Run linter and fix where possible
npm run lint-fix
# Run tests
npm test
# Build development readable worker js file
npm run build-dev
# Build production minified worker js file
npm run build
```

The build will generate a `dist/index.js` which you can deploy to Cloudflare.

### Files and Directories

* `src/` - Stores `index.ts` for the worker and any additional workers.
* `test/` - Stores `index.test.ts` to test the worker.
* `package.json` - The `npm` configuration contains common tasks such as `build`
  and `test`.
* `jest.config.js` - A TypeScript configuration for `jest`.
* `tsconfig.json` - A strict TypeScript configuration for building Workers for
  Cloudflare.
* `tslint.json` - A detailed `tslint` configuration with exceptions for common
  Worker needs.
* `webpack.config.js` - A simple `webpack` configuration to agreggate
  dependencies and build a worker.

## License

Licensed under the Apache License, Version 2.0.

© 2019 Udacity, Inc.
