<template>
  <button :class="computedClasses" @click="onClick">
    <img
      v-if="iconPosition === 'left'"
      :src="src"
      class="inline mr-3"
      alt="icon"
    />
    <slot></slot>
    <img
      v-if="iconPosition === 'right'"
      :src="src"
      class="inline ml-3"
      alt="icon"
    />
  </button>
</template>

<script setup>
// Vue
import { computed } from "vue";

// Emit
const emit = defineEmits(["click"]);

// Props
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    validator: (value) => ["small", "medium", "large"].includes(value),
    default: "medium",
  },
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String,
    validator: (value) => ["left", "right"].includes(value),
    default: "left",
  },
});

// Computed
const computedClasses = computed(() => {
  return [
    "flex",
    "justify-between",
    "rounded",
    "text-white",
    "font-semibold",
    {
      "px-2 py-0 text-[12px]": props.size === "small",
      "px-4 py-2": props.size === "medium",
      "px-6 py-3": props.size === "large",
    },
    {
      "bg-primary": props.variant === "primary",
      "bg-gray-4": props.variant === "gray-4",
    },
    {
      [`border-2 border-${props.variant} !bg-transparent !text-black`]:
        props.type === "outline",
    },
  ];
});

// Methods
const onClick = () => {
  emit("click");
};

const src = computed(() => `/svg/icon-${props.icon}.svg`);
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}

button:hover {
  filter: brightness(0.9);
}
</style>
