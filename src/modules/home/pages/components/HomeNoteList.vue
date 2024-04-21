<template>
  <div>
    <HomeSorting @change="onChangeSorting" />

    <h2 class="text-xl font-bold mb-4">Your Notes</h2>

    <div class="flex flex-col gap-4">
      <div class="flex justify-center" v-if="homeStore.homeLoadingNotes">
        <Icon class="text-[28px]" icon="line-md:loading-loop" />
      </div>
      <HomeNoteCardList
        v-else
        v-for="note in homeStore.homeNotes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :content="note.content"
        @detail="onDetail(note.id)"
        @delete="onDelete(note.id)"
      />
    </div>
  </div>

  <AppBaseDialogAlert
    :show="homeDialog.show"
    @close="homeOnCloseDialogSuccessDeleteNote"
  />
</template>

<script setup>
// Vue
import { watch } from "vue";

// Vue Router
import { useRouter } from "vue-router";

// Components
import { HomeNoteCardList } from "./";

// Services
import useHomeService from "@/modules/home/services/homeService.js";

// Hooks
const router = useRouter();
const {
  homeFilterNotes,
  homeFetchNotes,
  homeStore,
  homeDeleteNote,
  homeDialog,
  homeOnCloseDialogSuccessDeleteNote,
} = useHomeService();

// Watch
watch(
  homeFilterNotes,
  () => {
    homeFetchNotes();
  },
  { immediate: true, deep: true },
);

// Methods
const onChangeSorting = (value) => {
  homeFilterNotes.sort = value;
};
const onDetail = (id) => {
  router.push({ name: "HomeDetail", params: { id } });
};
const onDelete = (id) => {
  homeDeleteNote(id);
};
</script>
