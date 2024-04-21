<template>
  <div class="flex justify-between mb-6">
    <!-- Sorting Dropdown -->
    <div>
      <label for="sort" class="font-semibold">Sort by:</label>
      <AppBaseSelect model-value="recent" @update:model-value="changeSelect">
        <option value="recent">Recent</option>
        <option value="alphabetical">Alphabetical</option>
      </AppBaseSelect>
    </div>
  </div>
</template>

<script setup>
// Emits
const emits = defineEmits(["change"]);

// Methods
const changeSelect = (value) => {
  emits("change", value);
};
</script>
