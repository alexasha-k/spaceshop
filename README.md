# SpaceShop

A VueJS project for imaginary shop that offers a space-tours and space souvenirs.

## Architecture

### Styles

```
"src/assets/scss"
```

All common styles and variables.
Import variables to component scoped styles:

```
@import "@/assets/scss/_variables.scss";
```

Then, all styles are imported in App.vue

### Components

```
"src/components"
```

All reusable components or independent blocks of pages.

```
"src/components/common"
```

This components are based components and that can be applied to different components.

### Services

Common functions

### Views

Components to build pages. Represent structure of website and correspond to Router paths.
Don't include functions except getting data from server and passing it to components.

### Static pages

Static pages are rendered with BaseRenderPage component that takes an pageId property = wp page id.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
