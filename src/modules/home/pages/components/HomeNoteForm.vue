<template>
  <form
    @submit.prevent="submitForm"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <div class="mb-4">
      <AppBaseFormGroup name="Title" :validator="v$.title" name-as-label>
        <AppBaseInput
          id="title"
          type="text"
          placeholder="Enter title"
          v-model="formData.title"
        />
      </AppBaseFormGroup>
    </div>
    <div class="mb-6">
      <AppBaseFormGroup name="Content" :validator="v$.content" name-as-label>
        <AppBaseTextArea
          id="content"
          placeholder="Enter content"
          v-model="formData.content"
        ></AppBaseTextArea>
      </AppBaseFormGroup>
    </div>
    <div class="flex items-center justify-between">
      <AppBaseButton type="submit" :loading="home.homeLoadingCreateNote">
        Add Note
      </AppBaseButton>
    </div>
  </form>
</template>

<script setup>
// Vue
import { computed, ref } from "vue";

// Vuex
import { useStore } from "vuex";

// Vuelidate
import { required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import AppBaseInput from "@/modules/app/components/base/AppBaseInput.vue";

// Hooks
const store = useStore();

// Ref
const formData = ref({
  title: "",
  content: "",
});

// Computed
const home = computed(() => store.state.home);

const rules = computed(() => ({
  title: { required },
  content: { required, minLength: minLength(6) },
}));
const v$ = useVuelidate(rules, formData, { $autoDirty: true });

// Methods
const createNote = async () => {
  await store.dispatch("homeCreateNote", formData.value);
};

const fetchNotes = () => {
  store.dispatch("homeFetchNotes", {});
};

const submitForm = async () => {
  const validate = await v$.value.$validate();

  if (validate) {
    await createNote();
    // fetchNotes();
  }
};
</script>
