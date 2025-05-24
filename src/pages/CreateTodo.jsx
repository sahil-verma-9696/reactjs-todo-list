import React from "react";
import { DescriptionInput, TitleInput } from "../components/ui/Input";
import { AddTodoBtn } from "../components/ui/Button";
import { labels } from "../data/Label";
import { todoManager } from "../data/TodoManager";
import { Label } from "../components/ui/Label";
import { Todo } from "../data/Todo";

const CreateTodo = () => {
  const [todo, setTodo] = React.useState({
    title: "",
    description: "",
    label: 5,
  });

  function handleClick() {
    const newTodo = new Todo(todo.title, todo.description, todo.label);
    todoManager.addTodo(newTodo);
    setTodo({ title: "", description: "", label: newTodo.label });
  }
  return (
    <div className="max-sm:p-4 flex-1 flex justify-center items-center dark:bg-[#171717]">
      <div className="w-100">
        <section>
          <h2 className="text-3xl dark:text-white">Labels</h2>
          <div className="my-4 flex items-center flex-wrap gap-2">
            {labels.map((label) => (
              <Label
                key={label.id}
                label={label.name}
                color={label.color}
                onClick={() => setTodo({ ...todo, label: label.id })}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl dark:text-white">Active Labels</h2>
          <div className="my-4 flex items-center flex-wrap gap-2">
            <Label
              label={labels.find((label) => label.id === todo.label).name}
              color={labels.find((label) => label.id === todo.label).color}
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <TitleInput
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <DescriptionInput
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          <div className="flex justify-end">
            <AddTodoBtn onClick={handleClick} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateTodo;
