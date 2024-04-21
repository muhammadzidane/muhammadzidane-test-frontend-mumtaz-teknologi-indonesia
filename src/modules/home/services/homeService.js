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
    onOpenDialogSuccessDeleteNote,
    onCloseDialogSuccessCreateNote,
    onCloseDialogSuccessDeleteNote,
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
      await store.dispatch("homeCreateNote", formData.value);
    } catch (error) {
      //
    }
  };

  const homeDeleteNote = async (id) => {
    try {
      await store.dispatch("homeDeleteNote", id);
      onOpenDialogSuccessDeleteNote();
    } catch (error) {
      //
    }
  };

  const homeFetchNotes = async () => {
    try {
      await store.dispatch("homeFetchNotes", filterNotes);
    } catch (error) {
      //
    }
  };

  const homeFetchDetailNote = async (id) => {
    try {
      await store.dispatch("homeFetchDetailNote", id);
    } catch (error) {
      //
    }
  };

  const homeSubmitCreateNote = async () => {
    const validate = await v$.value.$validate();

    if (validate) {
      onOpenDialogSuccessCreateNote();
      await homeCreateNote();
      formData.value = {
        title: "",
        content: "",
      };
      v$.value.$reset();
    }
  };

  return {
    homeStore,
    homeCreateNote,
    homeFetchNotes,
    homeDeleteNote,
    homeFetchDetailNote,
    homeSubmitCreateNote,
    homeFormValidatorNote: v$,
    homeFormData: formData,
    homeFilterNotes: filterNotes,

    // Dialog
    homeDialog: dialog,
    homeOnCloseDialogSuccessCreateNote: onCloseDialogSuccessCreateNote,
    homeOnCloseDialogSuccessDeleteNote: onCloseDialogSuccessDeleteNote,
  };
};

export default useHomeService;
