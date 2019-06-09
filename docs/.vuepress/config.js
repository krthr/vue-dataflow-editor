module.exports = {
  base: "/vue-dataflow-editor/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" }
    ],

    repo: "https://github.com/krthr/vue-dataflow-editor",
    docsDir: "docs",
    editLinks: true,

    sidebar: "auto",

    serviceWorker: {
      updatePopup: true
    }
  },

  markdown: {
    lineNumbers: true
  },

  locales: {
    "/": {
      lang: "en-US",
      title: "Vue Dataflow Editor",
      description: "Vue 2 dataflow graph editor"
    },
    "/es": {
      lang: "es-CO",
      title: "Vue Dataflow Editor",
      description: "Editor grafico para Vue 2"
    }
  }
};
