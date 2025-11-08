CHANGES
=======

This file documents the recent repository changes that were committed in the last push.

Summary of what was added/changed in the recent commit:

- Added TypeScript support
  - `src/index.ts` (typed implementation)
  - `tsconfig.json` and `tsconfig.jest.json`
  - `dist/` is produced by the build (not tracked in git)

- Testing
  - `jest.config.cjs` (Jest + ts-jest configuration)
  - `tests/` with TypeScript tests (`index.test.ts`, `runtime.test.ts`)
  - `npm test` runs Jest and passes

- Build and packaging
  - `package.json` updated to be TypeScript-first (main -> `dist/index.js`, `types` set)
  - `prepare` script runs `npm run build` before publish
  - `files` includes `dist` and `currencies.json` for publishing

- Misc
  - `.gitignore` added (includes `dist/`, `node_modules/`, etc.)

This file was added to make the intent of the previous commit explicit.
