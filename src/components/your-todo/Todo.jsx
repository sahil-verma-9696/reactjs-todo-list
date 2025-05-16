import React from "react";
import CheckBox from "./CheckBox";
import Text from "./Text";
import Action from "./Action";
import LabelOptions from "./LabelOptions";

const Todo = ({ todo }) => {
  if (!todo) return <SkeletonTodo />;
  const getBorderColor = {
    important: "border-yellow-500",
    urgent: "border-purple-500",
    important_urgent: "border-red-500",
    completed: "border-green-500",
    none: "border-gray-400",
  };

  return (
    <div
      className={`cursor-pointer flex items-center justify-between bg-white shadow-md p-4 rounded-xl border hover:border-black hover:bg-purple-50 transition-all 
      ${getBorderColor[todo.label]}  
     `}
    >
      <div className="flex items-center gap-4 ">
        <CheckBox todo={todo} />
        <Text title={todo.title} description={todo.description} />
      </div>
      <LabelOptions todo={todo} />
      <Action />
    </div>
  );
};

export default Todo;

const SkeletonTodo = () => {
  return (
    <div className="animate-pulse bg-white shadow-md p-4 rounded-xl border border-gray-200 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 bg-gray-300 rounded" />
        <div>
          <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
      <div className="h-4 w-20 bg-gray-300 rounded" />
      <div className="h-6 w-6 bg-gray-300 rounded-full" />
    </div>
  );
};
