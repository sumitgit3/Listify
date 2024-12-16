import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-12 h-12 border-4 border-purple-600 border-t-pink-500 border-t-4 rounded-full animate-spin"
        role="status"
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
