<template>
  <form
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
      <AppBaseButton type="submit" :loading="homeStore.homeLoadingCreateNote">
        Add Note
      </AppBaseButton>
    </div>
  </form>

  <AppBaseDialogAlert
    :show="homeDialog.show"
    @close="homeOnCloseDialogSuccessCreateNote"
    type="success"
  />
</template>

<script setup>
// Services
import useHomeService from "@/modules/home/services/homeService.js";

// Hooks
const {
  homeStore,
  homeFormData,
  homeFormValidatorNote,
  homeSubmitCreateNote,
  homeDialog,
  homeOnCloseDialogSuccessCreateNote,
} = useHomeService();

const onCreateNote = () => {
  homeSubmitCreateNote();
};
</script>
