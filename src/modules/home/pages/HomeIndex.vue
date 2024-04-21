<template>
  <div class="w-[760px] mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Note Taking App</h1>

    <!-- Form to add a new note -->
    <HomeCreateFormNote />

    <!-- List of existing notes -->
    <HomeNoteList />
  </div>
</template>

<script setup>
// Components
import { HomeCreateFormNote, HomeNoteList } from "./components";
</script>
