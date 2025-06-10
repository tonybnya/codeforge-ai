import React from "react";

const LoadingSpinner = ({ size = "medium", fullScreen = false }) => {
  let dimensions;
  
  switch (size) {
    case "small":
      dimensions = "h-6 w-6";
      break;
    case "large":
      dimensions = "h-12 w-12";
      break;
    case "medium":
    default:
      dimensions = "h-10 w-10";
  }

  const spinner = (
    <div className={`animate-spin rounded-full ${dimensions} border-t-2 border-b-2 border-[#1ba94c]`}></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0d121f]/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-4">
      {spinner}
    </div>
  );
};

export default LoadingSpinner;

