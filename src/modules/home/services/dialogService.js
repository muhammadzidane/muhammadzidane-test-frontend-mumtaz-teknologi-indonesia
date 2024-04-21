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

  const onOpenDialogSuccessDeleteNote = () => {
    dialogShowDialog({
      okBtnText: "Oke",
      title: "Success!",
      description: "New note has been successfully deleted.",
    });
  };

  const onCloseDialogSuccessCreateNote = () => {
    dialogCloseDialog();
  };

  const onCloseDialogSuccessDeleteNote = () => {
    dialogCloseDialog();
  };

  return {
    dialog,
    onOpenDialogSuccessCreateNote,
    onCloseDialogSuccessCreateNote,
    onOpenDialogSuccessDeleteNote,
    onCloseDialogSuccessDeleteNote,
  };
};

export default useHomeDialogService;
