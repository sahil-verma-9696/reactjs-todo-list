import React from "react";

const CheckBox = ({ todo }) => {
  return (
    <div
      className={`size-10 rounded-full border cursor-pointer ${
        todo.label === "completed" ? "bg-green-200" : ""
      }`}
    ></div>
  );
};

export default CheckBox;
