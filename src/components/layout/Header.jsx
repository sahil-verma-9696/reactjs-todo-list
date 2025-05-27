import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import React from "react";
import { useLocation } from "react-router";
import { navItems } from "../../data/navItems";

export default function Header({ open, setOpen }) {
  const { pathname } = useLocation();
  return (
    <div className="flex-1 flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-[#202124] rounded-md"
      >
        {open ? <PanelRightOpen /> : <PanelLeftOpen />}
      </button>
      <h1 className="text-2xl font-semibold">
        {navItems.filter((item) => item.path === pathname)[0].label}
      </h1>
    </div>
  );
}
