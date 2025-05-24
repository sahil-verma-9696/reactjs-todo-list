import React from "react";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";

const Action = ({ editTodoCallback, deleteTodoCallback }) => {
  return (
    <div className="flex gap-2 items-center">
      <EditIcon onClick={editTodoCallback} />
      <TrashIcon onClick={deleteTodoCallback} />
    </div>
  );
};

export default Action;
