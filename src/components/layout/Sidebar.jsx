import React from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import ListIcon from "../icons/ListIcon";
import AddTodoIcon from "../icons/AddTodoIcon";
const Sidebar = ({ setPage, page }) => {
  return (
    <aside className="h-screen bg-[#EDD9FF] p-2 flex flex-col gap-2">
      <HamburgerIcon />
      <ListIcon
        styles={page === "todos" ? "bg-[#CF99FF]" : ""}
        onClick={() => {
          setPage("todos");
        }}
      />
      <AddTodoIcon
        styles={page === "create" ? "bg-[#CF99FF]" : ""}
        onClick={() => setPage("create")}
      />
    </aside>
  );
};

export default Sidebar;
