import React from "react";
import { dummyTodos } from "../data/mockTodos";
import {
  CompLabel,
  ImpLabel,
  ImpUrgLabel,
  NoneLabel,
  UrgLabel,
} from "../components/ui/Label";

const YourTodos = () => {
  const handleEdit = (todo) => {
    console.log("Edit clicked for:", todo);
    // TODO: open modal / redirect / toggle edit state
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
    // TODO: confirm + delete from list
  };
  // helper function to get border color
  const getBorderColor = (label) => {
    switch (label) {
      case "important":
        return "border-yellow-500";
      case "urgent":
        return "border-purple-500";
      case "important_urgent":
        return "border-red-500";
      case "completed":
        return "border-green-500";
      case "none":
      default:
        return "border-gray-400";
    }
  };

  return (
    <div className="flex-1">
      <div className="w-fit mx-auto">
        <section className="my-6 flex items-center flex-wrap gap-2">
          <span className="px-2 py-1 text-sm font-medium text-slate-800 bg-slate-300 rounded-md">
            All
          </span>
          <ImpLabel />
          <ImpUrgLabel />
          <UrgLabel />
          <CompLabel />
          <NoneLabel />
        </section>

        <section className="grid grid-cols-1 gap-4">
          {dummyTodos.map((todo) => {
            return (
              <div
                key={todo.id}
                className={`cursor-pointer flex items-center justify-between bg-white shadow-md p-4 rounded-xl border hover:border-[#7C3AED] transition-all 
                  ${getBorderColor(todo.label)}  
                 `}
              >
                <div className="flex items-center gap-4 ">
                  <div className="size-10 rounded-full border cursor-pointer"></div>

                  {/* Text */}
                  <div className="w-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {todo.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {todo.description}
                    </p>
                  </div>
                </div>

                {/* Label */}
                <div className="w-50">
                  {todo.label === "important" && <ImpLabel />}
                  {todo.label === "urgent" && <UrgLabel />}
                  {todo.label === "important_urgent" && <ImpUrgLabel />}
                  {todo.label === "completed" && <CompLabel />}
                  {todo.label === "none" && <NoneLabel />}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default YourTodos;
