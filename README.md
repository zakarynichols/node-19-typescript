# Node v19.0.0 TypeScript and Jest w/Live Reload

A minimal boilerplate example demonstrating Node utilizing ECMAScript modules with TypeScript and Jest.

Take note of `"type": "module"` in the `package.json`. Jest will be able to interpret compiled ESNext code so long as the `--experimental-vm-modules` flag is used.

# Development

1. Open a terminal

2. Watch the TypeScript in and re-compile on save.

```
npm run watch-typescript
```

3. Open another terminal.

4. Watch the emitted JavaScript during runtime.

```
npm run watch-development
```

5. Make changes to `/src`, TypeScript will re-compile, Node will watch the `/build` folder and live-reload.

# Jest

Tests are written in TS with ECMAScript modules, compiled to JS modules, and watched by Jest for live-reload. Support for JS modules in Jest is experimental, but very workable.

```
npm run test
```

# Node

Node has ECMAScript module support for later versions of Node and TypeScript.
