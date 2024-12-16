import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md">
      <strong className="font-bold">Error: </strong>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
