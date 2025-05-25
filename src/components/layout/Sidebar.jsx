import { Apple, Menu, X } from "lucide-react";
import React from "react";
// list of items with icon and label ✅
// expand/collaps sidebar ✅
// active item ✅

export default function Sidebar({ navItems }) {
  const [open, setOpen] = React.useState(false); // array destructuring
  const [activeId, setActiveId] = React.useState(1);

  function handleToggleSidebar() {
    setOpen(!open);
  }

  function handleActiveItem(id) {
    setActiveId(id);
  }

  return (
    <div>
      {/* toggle button */}
      <button onClick={() => handleToggleSidebar()} className="flex">
        {open ? <X /> : <Menu />}
        <span>Sidebar</span>
      </button>
      {/* nav items */}
      {navItems.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => handleActiveItem(item.id)}
            className={`flex ${activeId === item.id ? "bg-[#202124]" : ""}`}
          >
            <span>{<item.icon />}</span>
            {open ? <span>{item.label}</span> : null}
          </div>
        );
      })}
    </div>
  );
}
