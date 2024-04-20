<template>
  <div class="lg:w-[65%] mx-auto px-4 py-8">
    <!-- Back Button -->
    <router-link to="/">
      <a href="#" class="text-indigo-600 hover:underline mb-4 block"
        >&larr; Back to Notes</a
      >
    </router-link>

    <HomeDetailCard />
  </div>
</template>

<script setup>
// Vuex
import { useStore } from "vuex";

// Components
import { HomeDetailCard } from "./components";

const store = useStore();
</script>
