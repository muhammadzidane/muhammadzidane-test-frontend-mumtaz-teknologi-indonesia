import { http } from "@/plugins/axios/index";

const homeStore = {
  state: () => ({
    // Notes
    homeLoadingNotes: false,
    homeNotes: [],

    // Note Detail
    homeLoadingDetailNote: false,
    homeLoadingDetail: {},
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
  },
  actions: {
    async homeFetchNotes({ commit }, params = {}) {
      try {
        commit("homeSetLoadingNotes", true);
        const response = await http.get("/notes", {
          params,
        });
        commit("homeSetNotes", response.data.data);
      } catch (error) {
        //
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
        commit("homeSetDetailNote", response.data.data);
      } catch (error) {
        //
      } finally {
        commit("homeSetLoadingDetailNote", false);
      }
    },
  },
  getters: {},
};

export default homeStore;
