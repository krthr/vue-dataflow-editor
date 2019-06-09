> Based on [vue-blocks](https://github.com/ghostiam/vue-blocks). A [@ghostiam](https://github.com/ghostiam)'s project.

## npm

```
npm i @krthr/vue-dataflow-editor
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

      components: {
        ...window["vue-dataflow-editor"].default
      }
    });
  </script>
</body>
```
