import React from "react";
import { DescriptionInput, TitleInput } from "../components/ui/Input";
import { AddTodoBtn } from "../components/ui/Button";
import {
  CompLabel,
  ImpLabel,
  ImpUrgLabel,
  NoneLabel,
  UrgLabel,
} from "../components/ui/Label";

const CreateTodo = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-100">
        <section>
          <h2 className="text-3xl">Labels</h2>
          <div className="my-4 flex items-center flex-wrap gap-2">
            <ImpLabel />
            <ImpUrgLabel />
            <UrgLabel />
            <CompLabel />
            <NoneLabel />
          </div>
        </section>
        <section>
          <h2 className="text-3xl">Active Labels</h2>
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
