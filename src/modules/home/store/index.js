import { http } from "@/plugins/axios";

const homeStore = {
  state: () => ({
    // Notes
    homeLoadingNotes: false,
    homeNotes: [],

    // Note Detail
    homeLoadingDetailNote: false,
    homeLoadingDetail: {},

    // Create
    homeLoadingCreateNote: false,

    // Delete
    homeLoadingDeleteNote: false,
  }),
  mutations: {
    // Notes
    homeSetLoadingNotes(state, homeNotes) {
      state.homeLoadingNotes = homeNotes;
    },
    homeSetNotes(state, homeNotes) {
      state.homeNotes = homeNotes;
    },

    // Note Detail
    homeSetLoadingDetailNote(state, homeNotes) {
      state.homeLoadingDetailNote = homeNotes;
    },
    homeSetDetailNote(state, homeNotes) {
      state.homeLoadingDetail = homeNotes;
    },

    // Note Create
    homeSetLoadingCreateNote(state, homeNotes) {
      state.homeLoadingCreateNote = homeNotes;
    },

    // Note Delete
    homeSetLoadingDeleteNote(state, homeNotes) {
      state.homeLoadingDeleteNote = homeNotes;
    },
  },
  actions: {
    async homeFetchNotes({ commit }, params = {}) {
      try {
        commit("homeSetLoadingNotes", true);

        const response = await http.get("/notes", {
          params,
        });
        const data = response.data.data;

        commit("homeSetNotes", data);

        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        commit("homeSetLoadingNotes", false);
      }
    },

    async homeFetchDetailNote({ commit }, id, params = {}) {
      try {
        commit("homeSetLoadingDetailNote", true);

        const response = await http.get(`/notes/${id}`, {
          params,
        });
        const data = response.data.data;

        commit("homeSetDetailNote", data);

        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        commit("homeSetLoadingDetailNote", false);
      }
    },

    async homeCreateNote({ commit }, params = {}) {
      try {
        commit("homeSetLoadingCreateNote", true);

        const response = await http.post("/notes", params);
        const data = response.data.data;

        return Promise.resolve(data);
      } catch (error) {
        return Promise.resolve(error);
      } finally {
        commit("homeSetLoadingCreateNote", false);
      }
    },

    async homeDeleteNote({ commit }, id) {
      try {
        commit("homeSetLoadingDeleteNote", true);

        const response = await http.delete(`/notes/${id}`);
        const data = response.data.data;

        return Promise.resolve(data);
      } catch (error) {
        return Promise.resolve(error);
      } finally {
        commit("homeSetLoadingDeleteNote", false);
      }
    },
  },
  getters: {},
};

export default homeStore;
