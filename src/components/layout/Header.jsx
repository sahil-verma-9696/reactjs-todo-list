import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import React from "react";

export default function Header({ open, setOpen }) {
  function handleToggle() {
    setOpen(!open);
  }
  return (
    <div className="flex-1 bg-[#131416] rounded-lg p-2">
      <button
        onClick={handleToggle}
        className="p-2 hover:bg-[#202124] rounded-md"
      >
        {open ? <PanelRightOpen /> : <PanelLeftOpen />}
      </button>
    </div>
  );
}
