<template>
  <div class="flex justify-center" v-if="homeStore.homeLoadingDetailNote">
    <Icon class="text-[28px]" icon="line-md:loading-loop" />
  </div>
  <form
    v-else
    @submit.prevent="onCreateNote"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <div class="mb-4">
      <AppBaseFormGroup
        name="Title"
        :validator="homeFormValidatorNote.title"
        name-as-label
      >
        <AppBaseInput
          id="title"
          type="text"
          placeholder="Enter title"
          v-model="homeFormData.title"
        />
      </AppBaseFormGroup>
    </div>
    <div class="mb-6">
      <AppBaseFormGroup
        name="Content"
        :validator="homeFormValidatorNote.content"
        name-as-label
      >
        <AppBaseTextArea
          id="content"
          placeholder="Enter content"
          v-model="homeFormData.content"
        ></AppBaseTextArea>
      </AppBaseFormGroup>
    </div>
    <div class="flex items-center justify-between">
      <AppBaseButton
        type="submit"
        :loading="
          homeStore.homeLoadingCreateNote || homeStore.homeLoadingEditNote
        "
      >
        {{ submitText }}
      </AppBaseButton>
    </div>
  </form>

  <AppBaseDialogAlert
    :type="homeDialog.type"
    :message="homeDialog.description"
    :show="homeDialog.show"
    @close="homeOnCloseDialogSuccessCreateNote"
  />
</template>

<script setup>
// Vue
import { computed, onMounted } from "vue";

// Vue Router
import { useRoute } from "vue-router";

// Services
import useHomeService from "@/modules/home/services/homeService.js";

// Hooks
const route = useRoute();
const {
  homeStore,
  homeFormData,
  homeFormValidatorNote,
  homeSubmitCreateNote,
  homeSubmitEditNote,
  homeDialog,
  homeOnCloseDialogSuccessCreateNote,
  homeFetchDetailNote,
} = useHomeService();

// Computed
const isEditPage = computed(() => route.name === "HomeEdit");
const submitText = computed(() =>
  isEditPage.value ? "Edit Note" : "Add Note",
);

// Methods
const onCreateNote = () => {
  if (isEditPage.value) {
    homeSubmitEditNote(route.params.id);
  } else {
    homeSubmitCreateNote();
  }
};
const fetchDetailNote = async () => {
  const data = await homeFetchDetailNote(route.params.id);
  homeFormData.value = data;
};

onMounted(() => {
  if (isEditPage.value) {
    fetchDetailNote();
  }
});
</script>
