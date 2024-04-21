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
    dialogSuccessCreate,
    onOpenDialogSuccessCreateNote,
    onCloseDialogSuccessCreateNote,
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
    onOpenDialogSuccessCreateNote();
    // const validate = await v$.value.$validate();

    // if (validate) {
    // await homeCreateNote();
    // formData.value = {
    //   title: "",
    //   content: "",
    // };
    // v$.value.$reset();
    // }
  };

  return {
    homeStore,
    homeCreateNote,
    homeFetchNotes,
    homeFetchDetailNote,
    homeSubmitCreateNote,
    homeFormValidatorNote: v$,
    homeFormData: formData,
    homeFilterNotes: filterNotes,

    // Dialog
    homeDialogSuccessCreate: dialogSuccessCreate,
    homeOnCloseDialogSuccessCreateNote: onCloseDialogSuccessCreateNote,
  };
};

export default useHomeService;
