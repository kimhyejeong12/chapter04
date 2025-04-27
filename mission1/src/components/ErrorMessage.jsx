import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Error!</h2>
      <p className="text-gray-700">{message}</p>
    </div>
  );
};

export default ErrorMessage;
