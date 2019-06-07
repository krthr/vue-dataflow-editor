import * as Vue from "vue";
import VueBlock from "./VueBlock.vue";
import VueBlockProperty from "./VueBlockProperty.vue";
import VueBlocksContainer from "./VueBlocksContainer.vue";
import VueLink from "./VueLink.vue";

Vue.compone

const Components = {
  VueBlock,
  VueBlockProperty,
  VueBlocksContainer,
  VueLink
};

Object.keys(Components).forEach(name => {
  Vue.component(name, components[name]);
});

export default Components;
