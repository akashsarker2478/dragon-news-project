import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200">
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>
      
      {/* Text */}
      <p className="mt-4 text-lg font-semibold text-secondary animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
