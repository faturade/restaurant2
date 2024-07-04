import React from "react";

const Loading = ({ color }) => {
  const borderColorVariants = {
    white: "border-white",
    black: "border-black",
    grayBlue: "border-gray-blue-500",
    orange: "border-orange-500",
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center h-screen w-screen z-50 bg-black opacity-75">
      <div
        className={`animate-spin rounded-full h-32 w-32 border-b-2 ${borderColorVariants[color]}`}
      ></div>
    </div>
  );
};

export default Loading;
