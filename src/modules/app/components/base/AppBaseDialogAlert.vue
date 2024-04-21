<template>
  <transition name="fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div
      v-if="show"
      @click="closeModal"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white w-96 rounded-lg shadow-lg overflow-hidden">
        <div
          :class="[
            'px-4',
            'py-6',
            'flex',
            'items-center',
            'justify-between',
            'border-b',
            'border-gray-200',
            'bg-' + getTypeBgColor(type),
          ]"
        >
          <div class="flex items-center">
            <Icon :icon="getIcon(type)" class="text-4xl mr-2" />
            <h2 class="text-lg font-semibold text-gray-800">
              {{ getTitle(type) }}
            </h2>
          </div>
          <button @click="closeModal" class="text-gray-500 focus:outline-none">
            <Icon icon="bx:bx-x" class="text-xl" />
          </button>
        </div>
        <div class="px-6 py-12">
          <p class="text-gray-700">{{ message }}</p>
        </div>
        <div class="px-4 py-2 flex justify-end">
          <AppBaseButton class="w-full" @click="closeModal">
            Oke
          </AppBaseButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: "This is an alert message!",
  },
  type: {
    type: String,
    default: "info",
  },
});

// Emits
const emit = defineEmits(["close"]);

// Methods
const closeModal = () => {
  emit("close");
};

const afterEnter = () => {
  // Handle actions after modal enter animation
};

const afterLeave = () => {
  // Handle actions after modal leave animation
};

const getTypeBgColor = (type) => {
  if (type === "success") return "green-100";
  if (type === "error") return "red-100";
  return "blue-100"; // Default type
};

const getTitle = (type) => {
  if (type === "success") return "Success";
  if (type === "error") return "Error";
  return "Information"; // Default type
};

const getIcon = (type) => {
  if (type === "success") return "ep:success-filled";
  if (type === "error") return "uil:exclamation-circle";
  return "uil:info-circle"; // Default type
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
