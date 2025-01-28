# grade-education-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Attention!!!!
```sh
I will add .env file to this repo. I KNOW that this is unsecure, but it`s test task and i will make it to simplify inspection process
```

### API description

Api has only one endpoint, it`s GET request to get required reviews data. Final url to endpoint is https://my.api.mockaroo.com/grade_education_schema.json.
In request headers you should send X-API-Key, which you can get on mockaroo, while setuping your test API.
What data comes from the API? An array of objects of the required feedback comes from the API, there only 2 fields in object: evaluation and reviewsNumber, both have number type. The evaluation value is in the range from 1 to 5, with 1 decimals. The reviewsNumber value is in the range from 1 to 500.

### What second button do?

The condition said that you can perform any action by pressing the 2nd button, so I switched the localization.
