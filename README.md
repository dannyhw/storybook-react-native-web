To reproduce issue:

```sh
yarn
cd packages/storybook
yarn storybook
```

Build should hang at 69% on the file `preview.js-generated-config-entry.js`.