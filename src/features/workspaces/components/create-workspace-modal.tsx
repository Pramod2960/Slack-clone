"use client";
import { Button } from "@/components/ui/button";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function CreateWorkspaceModal() {
  const [open, setOpen] = useCreateWorkspaceModal();

  const handleClose = () => {
    setOpen(false);

    //TODO: clear form
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            value=""
            disabled={false}
            onClick={() => {}}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal"
          />
          <div className="flex justify-end">
            <Button disabled={false}>Creaate</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateWorkspaceModal;
