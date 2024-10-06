"use client";

import CreateWorkspaceModal from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
  //to fix hydration error
  //to show models only in CSR
  const [mounted, setMounted] = useState(false);

  //useEffect only be called once we are doing CSR
  //so it won't happen on server side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
