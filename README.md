# Node v19.0.0 and TypeScript w/Live Reload

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
