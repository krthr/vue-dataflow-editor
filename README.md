# [DEPECRATED] vue-dataflow-editor

## Hey, you can use https://github.com/jagenjo/litegraph.js.

![](https://raw.githubusercontent.com/krthr/vue-dataflow-editor/master/docs/.vuepress/public/img.PNG)
> Based on [vue-blocks](https://github.com/ghostiam/vue-blocks). A [@ghostiam](https://github.com/ghostiam)'s project.

## npm

```
npm i @krthr/vue-dataflow-editor
```

Import the lib on `app.js`

```js
// app.js or main.js, or the main file
// where you create the vue app
import Vue from "vue";
// other imports

import "@krthr/vue-dataflow-editor";
import "@krthr/vue-dataflow-editor/dist/vue-dataflow-editor.css";

const app = new Vue({
  /* ... */
});
```

```html
<template>
  <vue-blocks-container
    class="container"
    :blocks-content="[]"
    :scene.sync="{}"
  />
</template>
```

## browser

```html
<body>
  <div id="app">
    <vue-blocks-container
      ref="container"
      :blocks-content="[]"
      :scene.sync="{}"
      class="container"
    />
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/@krthr/vue-dataflow-editor@latest/dist/vue-dataflow-editor.umd.min.js"></script>
  <script>
    new Vue({
      el: "#app",

      // ...
    });
  </script>
</body>
```
