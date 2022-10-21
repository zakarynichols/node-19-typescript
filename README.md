# Node v19.0.0 and TypeScript w/Live Reload

A minimal boilerplate example demonstrating Node utilizing ECMAScript modules with TypeScript. Tests are written in ESNext and compiled to CommonJS to satisfy Jest.

Take note of `"type": "module"` in the `package.json`. Jest will _not_ be able to interpret these files in module format. Emit them in a seprate test folder in CommonJS and then run them.

Everything else in the repository utilizes ECMAScript modules during development and production.

# Development

1. Open a terminal

2. Watch the TypeScript in `/src` and re-compile on save.

```
npm run watch-dev
```

3. Open another terminal.

4. Watch the emitted JavaScript build.

```
npm run watch-build
```

5. Make changes to `/src`, TypeScript will recompile, Node will watch the `/build` folder and live-reload.

# Jest

Set TypeScript to emit CommonJS and resolve modules as node. That is all that's required to satisfy jest.

```json
{
  "module": "CommonJS",
  "moduleResolution": "Node"
}
```

To emit the tests in CommonJS and run them.

```
npm run test
```

# Node

Node has module support for later versions of node and typescript.

Set TS to emit ESNext and resolve modules as NodeNext

```json
{
  "module": "ESNext",
  "moduleResolution": "NodeNext"
}
```
