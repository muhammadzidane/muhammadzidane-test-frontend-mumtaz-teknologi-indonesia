<template>
  <transition name="modal" @after-enter="afterEnter" @after-leave="afterLeave">
    <div
      v-if="show"
      @click="closeModal"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div class="mt-4 flex justify-end">
        <div class="w-[520px] bg-white p-4 rounded-lg shadow-lg">
          <div class="flex justify-end cursor-pointer">
            <Icon
              @click="closeModal"
              width="24"
              icon="material-symbols-light:close"
            />
          </div>

          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: true,
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
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
