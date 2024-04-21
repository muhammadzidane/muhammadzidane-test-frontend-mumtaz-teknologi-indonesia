import useAppDialog from "@/modules/app/composables/dialog";

const useHomeDialogService = () => {
  const { dialog, dialogShowDialog, dialogCloseDialog } = useAppDialog();
  const onOpenDialogSuccessCreateNote = () => {
    dialogShowDialog({
      okBtnText: "Oke",
      title: "Success!",
      description: "New note has been successfully created.",
    });
  };

  const onCloseDialogSuccessCreateNote = () => {
    dialogCloseDialog();
  };

  return {
    dialogSuccessCreate: dialog,
    onOpenDialogSuccessCreateNote,
    onCloseDialogSuccessCreateNote,
  };
};

export default useHomeDialogService;
