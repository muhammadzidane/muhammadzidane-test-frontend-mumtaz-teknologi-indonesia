// Vue
import { ref } from "vue";

const useAppDialog = () => {
  const dialog = ref({
    show: false,
    type: "success",
    title: "",
    desc: "",
    onOk: undefined,
    onCancel: undefined,
  });

  const dialogSetValue = (key, value) => {
    dialog.value[key] = value;
  };

  const dialogSetValues = (options = {}) => {
    dialog.value = {
      ...dialog.value,
      ...options,
    };
  };

  const dialogShowDialog = (options = {}) => {
    dialogSetValues({
      ...options,
      show: true,
    });
  };

  const dialogCloseDialog = (options = {}) => {
    dialogSetValues({
      ...options,
      show: false,
    });
  };

  return {
    dialog,
    dialogShowDialog,
    dialogCloseDialog,
    dialogSetValue,
    dialogSetValues,
  };
};

export default useAppDialog;
