import React from "react";
import { DescriptionInput, TitleInput } from "../components/ui/Input";
import { AddTodoBtn } from "../components/ui/Button";
import {
  CompLabel,
  ImpLabel,
  ImpUrgLabel,
  Label,
  NoneLabel,
  UrgLabel,
} from "../components/ui/Label";
const filterConfig = {
  important: { emoji: "⚠️", text: "Important", color: "yellow" },
  urgent: { emoji: "⏰", text: "Urgent", color: "purple" },
  important_urgent: { emoji: "🚨", text: "Important & Urgent", color: "red" },
  completed: { emoji: "✅", text: "Completed", color: "green" },
  none: { emoji: "🚫", text: "None", color: "gray" },
};
const CreateTodo = () => {
  return (
    <div className="max-sm:p-4 flex-1 flex justify-center items-center dark:bg-[#171717]">
      <div className="w-100">
        <section>
          <h2 className="text-3xl dark:text-white">Labels</h2>
          <div className="my-4 flex items-center flex-wrap gap-2">
            {Object.entries(filterConfig).map(
              ([key, { emoji, text, color }]) => (
                <Label
                  color={color}
                  active={true}
                  key={key}
                  onClick={() => setFilter(key)}
                >
                  {emoji && `${emoji} `}
                  {text}
                </Label>
              )
            )}
          </div>
        </section>
        <section>
          <h2 className="text-3xl dark:text-white">Active Labels</h2>
          <div className="my-4 flex items-center flex-wrap gap-2">
            <NoneLabel />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <TitleInput />
          <DescriptionInput />

          <div className="flex justify-end">
            <AddTodoBtn />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateTodo;
