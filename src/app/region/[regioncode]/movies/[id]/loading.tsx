import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <CircularProgress
        sx={{
          color: "rgb(30 41 59 / var(--tw-bg-opacity))",
        }}
      />
    </div>
  );
};

export default Loading;
