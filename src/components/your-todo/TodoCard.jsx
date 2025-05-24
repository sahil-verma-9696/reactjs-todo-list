import React from "react";
import CheckBox from "./CheckBox";
import Text from "./Text";
import Action from "./Action";
import { todoManager } from "../../data/TodoManager";
import { useTodos } from "../../hooks/useTodos";

const getBorderColor = {
  3: "border-yellow-500",
  2: "border-purple-500",
  1: "border-red-500",
  4: "border-green-500",
  5: "border-gray-400",
};

const TodoCard = ({ todo,removeTodo }) => {
  if (!todo) return <SkeletonTodo />;
  function handleTodoEdit() {}

  function handleTodoDelete() {
    removeTodo(todo.id);
  }

  return (
    <div
      className={`dark:bg-[#171717] cursor-pointer flex items-center justify-between bg-white shadow-md p-4 rounded-xl border hover:border-black hover:bg-purple-50 dark:hover:dark:bg-[#242424] dark:hover:border-white transition-all 
      ${getBorderColor[todo.label]}`}
    >
      <div className="flex items-center gap-4 ">
        <CheckBox todo={todo} />
        <Text title={todo.title} description={todo.description} />
      </div>
      <Action
        editTodoCallback={handleTodoEdit}
        deleteTodoCallback={handleTodoDelete}
      />
    </div>
  );
};

export default TodoCard;

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
