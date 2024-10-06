import React from "react";

interface WorkSpaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

function WorkSpaceIdPage({ params }: WorkSpaceIdPageProps) {
  return <div> ID {params.workspaceId}</div>;
}

export default WorkSpaceIdPage;
