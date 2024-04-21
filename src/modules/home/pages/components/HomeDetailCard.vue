<template>
  <!-- Loading -->
  <div class="flex justify-center" v-if="homeStore.homeLoadingDetailNote">
    <Icon class="text-[28px]" icon="line-md:loading-loop" />
  </div>
  <div v-else class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ homeStore.homeDetailNote.title }}
      </h3>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Note Content
          </dt>
          <div class="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
            {{ homeStore.homeDetailNote.content }}
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
// Vue
import { onMounted } from "vue";

// Vue Router
import { useRoute } from "vue-router";

// Services
import useHomeService from "@/modules/home/services/homeService.js";

// Hooks
const route = useRoute();
const { homeFetchDetailNote, homeStore } = useHomeService();

// Lifecyle
const fetchDetailNote = () => {
  homeFetchDetailNote(route.params.id);
};

onMounted(() => {
  fetchDetailNote();
});
</script>
