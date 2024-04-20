// Vuex
import { createStore } from "vuex"

import homeStore from "@/modules/home/store/index";

// Create a new store instance.
const store = createStore({
  modules: {
    home: homeStore,
  }
});

export default store;