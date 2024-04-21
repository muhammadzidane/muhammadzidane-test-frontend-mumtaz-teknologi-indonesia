<template>
  <div>
    <HomeSorting @change="onChangeSorting" />

    <h2 class="text-xl font-bold mb-4">Your Notes</h2>

    <div class="flex flex-col gap-4">
      <div class="flex justify-center" v-if="homeStore.homeLoadingNotes">
        <Icon class="text-[28px]" icon="line-md:loading-loop" />
      </div>
      <HomeNoteCardList
        v-for="note in homeStore.homeNotes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :content="note.content"
        :fetchNotes="homeFetchNotes"
      />
    </div>
  </div>
</template>

<script setup>
// Vue
import { watch } from "vue";

// Components
import { HomeNoteCardList } from "./";

// Services
import useHomeService from "@/modules/home/services/homeService.js";

const { homeFilterNotes, homeFetchNotes, homeStore } = useHomeService();

// Methods
const onChangeSorting = (value) => {
  homeFilterNotes.sort = value;
};

watch(
  homeFilterNotes,
  () => {
    homeFetchNotes();
  },
  { immediate: true, deep: true },
);
</script>
