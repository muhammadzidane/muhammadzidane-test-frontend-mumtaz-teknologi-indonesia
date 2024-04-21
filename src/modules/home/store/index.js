import { http } from "@/plugins/axios";

const homeStore = {
  state: () => ({
    // Notes
    homeLoadingNotes: false,
    homeNotes: [],

    // Note Detail
    homeLoadingDetailNote: false,
    homeDetailNote: {},

    // Create
    homeLoadingCreateNote: false,

    // Delete
    homeLoadingDeleteNote: false,

    // Edit
    homeLoadingEditNote: false,
  }),
  mutations: {
    // Notes
    homeSetLoadingNotes(state, value) {
      state.homeLoadingNotes = value;
    },
    homeSetNotes(state, value) {
      state.homeNotes = value;
    },

    // Note Detail
    homeSetLoadingDetailNote(state, value) {
      state.homeLoadingDetailNote = value;
    },
    homeSetDetailNote(state, value) {
      state.homeDetailNote = value;
    },

    // Note Create
    homeSetLoadingCreateNote(state, value) {
      state.homeLoadingCreateNote = value;
    },

    // Note Delete
    homeSetLoadingDeleteNote(state, value) {
      state.homeLoadingDeleteNote = value;
    },

    // Note Edit
    homeSetLoadingEditNote(state, value) {
      state.homeLoadingEditNote = value;
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

    async homeFetchDetailNote({ commit }, id) {
      try {
        commit("homeSetLoadingDetailNote", true);

        const response = await http.get(`/notes/${id}`);
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

    async homeEditNote({ commit }, params) {
      try {
        commit("homeSetLoadingEditNote", true);

        const response = await http.put(`/notes/${params.id}`, params.body);
        const data = response.data.data;

        return Promise.resolve(data);
      } catch (error) {
        return Promise.resolve(error);
      } finally {
        commit("homeSetLoadingEditNote", false);
      }
    },
  },
  getters: {},
};

export default homeStore;
