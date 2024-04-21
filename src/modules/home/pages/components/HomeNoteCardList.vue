<template>
  <div
    class="bg-white shadow overflow-hidden sm:rounded-md cursor-pointer"
    @click="onClickRedirectToDetail"
  >
    <ul>
      <li>
        <div
          class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
        >
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm leading-5 font-medium text-indigo-600 truncate">
                {{ title }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                >
                  New
                </span>
              </div>
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
      </li>
    </ul>
  </div>
</template>

<script setup>
// Vue Router
import { useRouter } from "vue-router";

// Props
const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    default: null,
  },
});

// Hooks
const router = useRouter();

// Methods
const onClickRedirectToDetail = () => {
  router.push({ name: "HomeDetail", params: { id: props.id } });
};
</script>
