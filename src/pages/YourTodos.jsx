import React from "react";
import { dummyTodos } from "../data/mockTodos";
import { Label } from "../components/ui/Label"; // Your reusable Label
import Todo from "../components/your-todo/Todo";

const filterConfig = {
  all: { emoji: "", text: "All", color: "slate" },
  important: { emoji: "⚠️", text: "Important", color: "yellow" },
  urgent: { emoji: "⏰", text: "Urgent", color: "purple" },
  important_urgent: { emoji: "🚨", text: "Important & Urgent", color: "red" },
  completed: { emoji: "✅", text: "Completed", color: "green" },
  none: { emoji: "🚫", text: "None", color: "gray" },
};

const YourTodos = () => {
  const [filter, setFilter] = React.useState("all");

  const getFilteredTodos = () => {
    if (filter === "all") return dummyTodos;
    return dummyTodos.filter((todo) => todo.label === filter);
  };

  return (
    <div className="flex-1 dark:bg-[#171717] max-sm:p-4">
      <div className="w-fit mx-auto">
        {/* Filter labels */}
        <section className="my-6 flex items-center flex-wrap gap-2">
          {Object.entries(filterConfig).map(([key, { emoji, text, color }]) => (
            <Label
              color={color}
              active={filter === key}
              key={key}
              onClick={() => setFilter(key)}
            >
              {emoji && `${emoji} `}
              {text}
            </Label>
          ))}
        </section>

        {/* Filtered Todos */}
        <section className="grid grid-cols-1 gap-4">
          {getFilteredTodos().map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default YourTodos;
