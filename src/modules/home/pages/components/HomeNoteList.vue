<template>
  <div>
    <HomeSorting @change="onChangeSorting" />

    <h2 class="text-xl font-bold mb-4">Your Notes</h2>

    <div class="flex flex-col gap-4">
      <div class="flex justify-center" v-if="home.homeLoadingNotes">
        <Icon class="text-[28px]" icon="line-md:loading-loop" />
      </div>
      <HomeNoteCardList
        v-for="note in home.homeNotes"
        v-else
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :content="note.content"
      />

      <HomeNoteCardList id="123" title="wwww" content="wwww" />
    </div>
  </div>
</template>

<script setup>
// Vue
import { computed, reactive, watch } from "vue";

// Vuex
import { useStore } from "vuex";

// Components
import { HomeSorting, HomeNoteCardList } from "./";

// Hooks
const store = useStore();

// Ref
const filter = reactive({ sort: "recent" });

// Computed
const home = computed(() => store.state.home);

// Methods
const onChangeSorting = (value) => {
  filter.sort = value;
};

// Lifecycle
const fetchNotes = () => {
  // store.dispatch("homeFetchNotes", filter);
};

watch(
  filter,
  () => {
    fetchNotes();
  },
  { immediate: true, deep: true },
);
</script>
