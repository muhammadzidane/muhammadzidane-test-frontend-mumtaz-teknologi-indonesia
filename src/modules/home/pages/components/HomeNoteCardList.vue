<template>
  <div class="flex items-center gap-3">
    <div
      class="flex-1 bg-white shadow overflow-hidden sm:rounded-md cursor-pointer"
      @click="onRedirectToDetail"
    >
      <div
        class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-sm leading-5 font-medium text-indigo-600 truncate">
              {{ title }}
            </p>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p
                class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"
              >
                {{ content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cursor-pointer" @click="onDeleteNote">
      <Icon class="text-[24px]" icon="carbon:close-outline" />
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    default: null,
  },
});

// Emits
const emits = defineEmits(["detail", "delete"]);

const onRedirectToDetail = () => {
  emits("detail");
};

const onDeleteNote = () => {
  emits("delete");
};
</script>
