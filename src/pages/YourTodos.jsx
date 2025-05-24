import React from "react";
import { todoManager } from "../data/TodoManager";
import { Label } from "../components/ui/Label";
import TodoCard from "../components/your-todo/TodoCard";
import { getLabel, labels } from "../data/Label";
import { useTodos } from "../hooks/useTodos";

const YourTodos = () => {
  const [filterId, setFilterId] = React.useState(0);
  const { todos, removeTodo } = useTodos();
  const filteredTodos = React.useMemo(() => {
    return filterId === 0
      ? todos
      : todos.filter((todo) => todo.label === filterId);
  }, [filterId, todos]);

  return (
    <div className="flex-1 dark:bg-[#171717] max-sm:p-4">
      <div className="w-fit mx-auto">
        {/* Filter labels */}
        <section className="my-6 flex items-center flex-wrap gap-2">
          <Label
            label="All"
            color="gray"
            onClick={() => setFilterId(0)}
            className={filterId === 0 ? "" : "bg-transparent dark:text-white"}
          />

          {labels.map((label) => (
            <Label
              key={label.id}
              label={label.name}
              color={label.color}
              onClick={() => setFilterId(label.id)}
              className={filterId === label.id ? "" : "bg-transparent"}
            />
          ))}
        </section>

        {/* Filtered Todos */}
        <section className="grid grid-cols-1 gap-4">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))
          ) : (
            <p className="text-2xl text-center dark:text-white">
              No {getLabel(filterId)?.name} todos found
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default YourTodos;
