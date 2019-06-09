---
sidebarDepth: 6
---

# API Reference

## `<vue-blocks-container />`

```vue
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
  data: function() {
    return {
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
              name: "out1",
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
          }
        ],
        links: [],
        container: {
          centerX: 0,
          centerY: 0,
          scale: 1
        }
      }
    };
  }
};
</script>
```

## `<vue-blocks-container />` Props

### blocks-content

- type: `Array<Node> | undefined`
- default: `[]`

#### `Node`:

```ts
declare type Node {
    name: string,
    title: string,
    family: string | undefined,
    description: string,
    fields: Array<NodeField>
}
```

#### `NodeField`:

```ts
declare type NodeField {
    name: string,
    type: TypeName,
    attr: AttributeType,
    other: any | undefined
}
```

### scene

- type: `Scene | undefined`
- default:

```js
{
    blocks: [],
    links: [],
    container: {}
}
```

#### `Scene`:

```ts
declare type Scene {
  blocks: Array<Block>,
  links: Array<BlockLinks>,
  container: {
   centerX: number
   centerY: number
   scale: number
  }
}
```

#### `Block`:

```ts
declare type Block {
    id: number,
    x: number,
    y: number,
    name: string,
    title: string,
    values: {
        customAttribute: [ // show "NodeField"
            name: NodeField // (without name and attr fields)
        ]
    }
}
```

#### `BlockLinks`:

```ts
declare type BlockLinks {
  id: number, // ID
  originID: number, // Origin block ID
  originSlot: number, // Origin block slot number
  targetID: number, // Target block ID
  targetSlot: number // Target block slot number
}
```

### options

- type: `Object | undefined`
