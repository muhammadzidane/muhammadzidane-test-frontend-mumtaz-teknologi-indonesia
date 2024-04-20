<template>
  <div class="input-container">
    <input
      @input="handleInput"
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      :style="{ width: width }"
      class="indent-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
    />
    <span class="input-icon">
      <img :src="`/svg/icon-${icon}.svg`" alt="icon" class="icon-image" />
    </span>
  </div>
</template>

<script setup>
// Vue
import { ref, defineProps } from "vue";

// Props
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Enter text...",
  },
  icon: {
    type: String,
    default: null,
  },
  width: {
    type: String,
    default: "100%",
  },
});

const emit = defineEmits(["change"]);

// Ref
const inputValue = ref("");

// Methods
const handleInput = (event) => {
  inputValue.value = event.target.value;
  emit("change", inputValue.value);
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;

  .input-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    .icon-image {
      width: 20px;
      height: 20px;
      transition:
        opacity 0.2s ease-in-out,
        color 0.2s ease-in-out;
      opacity: 0.3;
    }
  }

  &:focus-within .input-icon .icon-image {
    opacity: 1;
  }
}
</style>
