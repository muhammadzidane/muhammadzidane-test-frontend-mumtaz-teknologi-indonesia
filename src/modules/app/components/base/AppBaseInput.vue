<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="updateValue($event.target.value)"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emits("update:modelValue", value);
};
</script>
