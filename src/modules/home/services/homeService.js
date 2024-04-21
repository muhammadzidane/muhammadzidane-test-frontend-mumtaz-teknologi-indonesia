// Vue
import { ref, reactive, computed } from "vue";

// Vuex
import { useStore } from "vuex";

// Services
import useHomeDialogService from "@/modules/home/services/dialogService.js";

// Vuelidate
import { required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const useHomeService = () => {
  // Hooks
  const store = useStore();

  // Dialog
  const {
    dialog,
    onOpenDialogSuccessCreateNote,
    onOpenDialogSuccessEditNote,
    onOpenDialogSuccessDeleteNote,
    onCloseDialogSuccessCreateNote,
    onCloseDialogSuccessDeleteNote,
    onCloseDialogEditDeleteNote,
  } = useHomeDialogService();

  // Ref
  const formData = ref({
    title: "",
    content: "",
  });
  const filterNotes = reactive({ sort: "recent" });

  // Computed
  const homeStore = computed(() => store.state.home);

  // Validation Rules
  const rules = computed(() => ({
    title: { required },
    content: { required, minLength: minLength(6) },
  }));
  const v$ = useVuelidate(rules, formData, { $autoDirty: true });

  const homeCreateNote = async () => {
    try {
      const response = await store.dispatch("homeCreateNote", formData.value);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const homeDeleteNote = async (id) => {
    try {
      const response = await store.dispatch("homeDeleteNote", id);
      onOpenDialogSuccessDeleteNote();

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const homeEditNote = async (id, body) => {
    try {
      const response = await store.dispatch("homeEditNote", {
        id,
        body,
      });

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const homeFetchNotes = async () => {
    try {
      const response = await store.dispatch("homeFetchNotes", filterNotes);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const homeFetchDetailNote = async (id) => {
    try {
      const response = await store.dispatch("homeFetchDetailNote", id);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const homeSubmitCreateNote = async () => {
    const validate = await v$.value.$validate();

    if (validate) {
      await homeCreateNote();
      onOpenDialogSuccessCreateNote();
      homeFetchNotes();
      formData.value = {
        title: "",
        content: "",
      };
      v$.value.$reset();
    }
  };

  const homeSubmitEditNote = async (id) => {
    const validate = await v$.value.$validate();

    if (validate) {
      await homeEditNote(id, formData.value);
      onOpenDialogSuccessEditNote();
    }
  };

  return {
    homeStore,
    homeCreateNote,
    homeEditNote,
    homeFetchNotes,
    homeDeleteNote,
    homeFetchDetailNote,
    homeSubmitCreateNote,
    homeSubmitEditNote,
    homeFormValidatorNote: v$,
    homeFormData: formData,
    homeFilterNotes: filterNotes,

    // Dialog
    homeDialog: dialog,
    homeOnCloseDialogSuccessCreateNote: onCloseDialogSuccessCreateNote,
    homeOnCloseDialogSuccessDeleteNote: onCloseDialogSuccessDeleteNote,
    homeOnCloseDialogEditDeleteNote: onCloseDialogEditDeleteNote,
  };
};

export default useHomeService;
