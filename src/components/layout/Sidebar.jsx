import React from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import ListIcon from "../icons/ListIcon";
import AddTodoIcon from "../icons/AddTodoIcon";
const Sidebar = ({ setPage, page }) => {
  return (
    <aside className="h-screen bg-[#EDD9FF] dark:bg-[#171717] border border-r-[#242424] p-2 flex flex-col gap-2 max-sm:hidden">
      <HamburgerIcon />
      <ListIcon
        styles={page === "todos" ? "bg-[#CF99FF] dark:bg-[#242424]" : ""}
        onClick={() => {
          setPage("todos");
        }}
      />
      <AddTodoIcon
        styles={page === "create" ? "bg-[#CF99FF] dark:bg-[#242424]" : ""}
        onClick={() => setPage("create")}
      />
    </aside>
  );
};

export default Sidebar;
