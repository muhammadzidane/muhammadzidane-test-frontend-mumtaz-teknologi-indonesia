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

  const onOpenDialogSuccessEditNote = () => {
    dialogShowDialog({
      okBtnText: "Oke",
      title: "Success!",
      description: "New note has been successfully edited.",
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

  const onCloseDialogEditDeleteNote = () => {
    dialogCloseDialog();
  };

  return {
    dialog,
    onOpenDialogSuccessCreateNote,
    onOpenDialogSuccessEditNote,
    onCloseDialogSuccessCreateNote,
    onOpenDialogSuccessDeleteNote,
    onCloseDialogEditDeleteNote,
    onCloseDialogSuccessDeleteNote,
  };
};

export default useHomeDialogService;
