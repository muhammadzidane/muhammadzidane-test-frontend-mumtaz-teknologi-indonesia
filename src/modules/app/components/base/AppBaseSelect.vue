<template>
  <select
    v-bind="$attrs"
    class="rounded border px-2 py-1 ml-2"
    :value="modelValue"
    @input="updateValue($event.target.value)"
  >
    <slot />
  </select>
</template>

<script setup>
// Props
const props = defineProps({
  modelValue: String,
});

// Emits
const emits = defineEmits(["update:modelValue"]);

// Methods
const updateValue = (value) => {
  emits("update:modelValue", value);
};
</script>
