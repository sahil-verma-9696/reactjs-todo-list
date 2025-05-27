import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import SidebarSahil from "./components/layout/SidebarSahil";
import { navItems } from "./data/navItems";
import { Outlet } from "react-router";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-screen h-screen dark:bg-black dark:text-white p-2 flex gap-2 max-sm:flex-col max-sm:flex-col-reverse">
      {/* <Sidebar navItems={navItems} /> */}
      <SidebarSahil navItems={navItems} open={open} setOpen={setOpen} />
      <div className="flex-1 bg-[#131416] rounded-lg p-2">
        <Header open={open} setOpen={setOpen} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
