# Node v19.0.0 and TypeScript w/Live Reload

A minimal boilerplate example demonstrating Node utilizing ECMAScript modules with TypeScript. Tests are written in ESNext and compiled to modules then ran in experimental vm-modules mode.

Take note of `"type": "module"` in the `package.json`. Jest will be able to interpret compiled ESNext code as long as the experimental vm-module flag is used.

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

Tests live next to their implementatations. Set TypeScript to emit tests files in a new `/tests` directory.

```json
{
  "module": "ESNext",
  "moduleResolution": "NodeNext"
}
```

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
