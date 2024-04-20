<template>
  <div class="flex-1 d-flex justify-center">
    <div class="max-w-3xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-center mb-8">Note Taking App</h1>

      <!-- Form to add a new note -->
      <HomeNoteForm />

      <!-- Filter and Sorting Controls -->
      <HomeSorting />

      <!-- List of existing notes -->
      <HomeNoteList />
    </div>
  </div>
</template>

<script setup>
// Components
import { HomeNoteForm, HomeNoteList, HomeSorting } from "./components";
</script>
