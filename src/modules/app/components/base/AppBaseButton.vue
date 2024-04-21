<template>
  <button v-bind="$attrs" :class="computedClasses" @click="onClick">
    <Icon v-if="loading" class="text-[18px] mr-2" icon="line-md:loading-loop" />
    <slot></slot>
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
  loading: {
    type: Boolean,
    default: false,
  },
});

// Computed
const computedClasses = computed(() => {
  return [
    "flex",
    "justify-between",
    "items-center",
    "rounded",
    "text-white",
    "font-semibold",
    // Size
    {
      "px-2 py-0 text-[12px]": props.size === "small",
      "px-4 py-2": props.size === "medium",
      "px-6 py-3": props.size === "large",
    },
    // Variant
    {
      "bg-primary": props.variant === "primary",
      "bg-gray-4": props.variant === "gray-4",
    },
    // Type
    {
      [`border-2 border-${props.variant} !bg-transparent !text-black`]:
        props.type === "outline",
    },
    // Loading
    {
      "opacity-80": props.loading,
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
