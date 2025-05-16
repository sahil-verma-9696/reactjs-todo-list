import React from "react";

const CheckBox = ({ todo }) => {
  return (
    <div
      className={`size-10 rounded-full border dark:border-white cursor-pointer ${
        todo.label === "completed" ? "bg-green-200" : ""
      } max-sm:size-5`}
    ></div>
  );
};

export default CheckBox;
