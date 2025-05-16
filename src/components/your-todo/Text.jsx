import React from "react";

const Text = ({ title, description }) => {
  return (
    <div className="w-50">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {title || "Title Not Found"}
      </h3>
      <p className="text-sm text-gray-600 mb-2">
        {description || "Description Not Found"}
      </p>
    </div>
  );
};

export default Text;
