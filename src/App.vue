<template>
  <div id="app">
    <vue-blocks-container
      ref="container"
      :blocks-content="blocks"
      :scene.sync="scene"
      class="container"
    />
  </div>
</template>

<script>
export default {
  name: "app",

  components: {
    VueBlocksContainer: () => import("./components/VueBlocksContainer")
  },

  data: () => ({
    blocks: [
      {
        name: "test",
        title: "Test block",
        family: "Test",
        description: "Description text",
        fields: [
          {
            name: "in1",
            type: "event",
            attr: "input"
          },
          {
            name: "in2",
            type: "event",
            attr: "input"
          },
          {
            name: "out1",
            type: "event",
            attr: "output"
          },
          {
            name: "out2",
            type: "event",
            attr: "output"
          }
        ]
      }
    ],
    scene: {
      blocks: [
        {
          id: 1,
          x: 0,
          y: 0,
          name: "test",
          title: "Test block",
          values: {
            property: [
              {
                name: "message",
                type: "string"
              }
            ]
          }
        },
        {
          id: 2,
          x: 0,
          y: 50,
          name: "test",
          title: "Test block 2",
          values: {
            property: [
              {
                name: "message",
                type: "string"
              }
            ]
          }
        }
      ],
      links: [],
      container: {
        centerX: 0,
        centerY: 0,
        scale: 1
      }
    }
  })
};
</script>

