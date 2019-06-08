module.exports = {
  title: "Vue Dataflow Editor",
  description: "Vue 2 dataflow graph editor",

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
  }
};
