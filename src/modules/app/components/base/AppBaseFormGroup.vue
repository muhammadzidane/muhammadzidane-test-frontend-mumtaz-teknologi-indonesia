<template>
  <div>
    <div class="block text-gray-700 text-sm font-bold mb-2" v-if="nameAsLabel">
      {{ name }}
    </div>
    <slot :placeholder="name" />
    <div class="mt-1 text-danger">{{ errors }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { VALIDATION_MESSAGE } from "@/modules/app/constants";

const props = defineProps({
  validator: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    default: "Field",
  },
  nameAsLabel: {
    type: Boolean,
    default: false,
  },
});

const invalid = computed(
  () => props.validator.$dirty && props.validator.$invalid,
);

const errors = computed(() => {
  if (!invalid.value) {
    return "";
  }
  const error = props.validator.$errors[0];
  const message = VALIDATION_MESSAGE[error.$validator];
  const attribute = message?.replace(/{attribute}/g, props.name);
  const attributeMatch = attribute.match(/{.+}/g);
  const paramName =
    attributeMatch !== null ? attributeMatch[0] : attributeMatch;
  const paramValue = error.$params[paramName?.replace(/{|}/g, "")];

  return attribute.replace(paramName, paramValue);
});
</script>
