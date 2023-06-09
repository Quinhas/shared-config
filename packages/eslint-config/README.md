# Quinhas ESLint configuration

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install this package as devDependency

```sh
# with Yarn
$ yarn add -D @quinhas/config-eslint

# with npm
$ npm i -D @quinhas/config-eslint

# with pnpm
$ pnpm add -D @quinhas/config-eslint
```

2. Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ['@quinhas/config-eslint/react'],
  // extends: ["@quinhas/config-eslint/node"],
};
```

> You can also use a `.eslintrc.json` instead of js if you prefer.
