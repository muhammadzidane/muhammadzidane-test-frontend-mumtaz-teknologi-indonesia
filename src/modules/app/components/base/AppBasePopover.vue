<template>
  <div class="popover-container">
    <div
      class="text-primary underline cursor-pointer"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      {{ title }}
    </div>
    <div v-if="isHovered" class="popover">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// Vue
import { ref } from "vue";

// Ref
const isHovered = ref(false);

// Props
const props = defineProps({
  title: {
    type: String,
    default: "Hover me",
  },
});
</script>

<style lang="scss" scoped>
.popover {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  z-index: 1000;
  background-color: rgba(82, 82, 82, 1);
  border-radius: 8px;
  color: white;
  min-width: 200px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: none;
  font-weight: 400;

  &-container {
    position: relative;
  }

  &-container:hover .popover {
    display: block;
  }
}
</style>
