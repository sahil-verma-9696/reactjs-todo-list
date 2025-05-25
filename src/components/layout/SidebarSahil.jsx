import { ListTodo, User } from "lucide-react";
import React from "react";
import { fallbackNavItems } from "../../data/navItems";

export default function SidebarSahil({ navItems, open, setOpen }) {
  const [activeItem, setActiveItem] = React.useState(1 || navItems[0].id);
  return (
    <div
      role="navigation"
      aria-label="Main sidebar"
      className={`select-none flex min-sm:flex-col bg-[#131416] px-2 rounded-lg h-full max-sm:h-fit transition-all duration-700 ease-in-out overflow-hidden ${
        open ? "w-72 max-sm:w-full" : "w-14 max-sm:w-full"
      }`}
    >
      {/* header */}
      <div className="flex sticky top-0 gap-2 p-2 hover:bg-[#202124] rounded-md w-full max-sm:hidden">
        <span className="cursor-pointer">
          <ListTodo />
        </span>

        <h1
          className={`text-center flex-1 text-nowrap transition ease-in-out duration-1000 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          TODO LIST
        </h1>
      </div>

      {/* nav items */}
      <div className="overflow-y-auto overflow-x-hidden flex-1 max-sm:flex max-sm:justify-between">
        {!navItems && (
          <Skeleton open={open} fallbackNavItems={fallbackNavItems} />
        )}
        {navItems?.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className={`flex gap-2  rounded-md cursor-pointer my-1 p-2 max-sm:flex-col max-sm:items-center ${
              open && "hover:bg-[#202124]"
            } ${activeItem == id && "bg-[#202124]"}`}
            onClick={() => setActiveItem(id)}
          >
            <span className={`${!open && "hover:bg-[#202124] rounded-md"}`}>
              <Icon  />
            </span>
            <span
              className={`transition ease-in-out duration-1000 max-sm:hidden ${
                open ? "opacity-100" : "opacity-0 max-sm:opacity-100"
              } text-nowrap`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* nav footer */}
      <div className="flex gap-2 p-2 bg-[#131416] hover:bg-[#202124] w-full max-sm:flex-col max-sm:items-center max-sm:hidden">
        <span className="cursor-pointer">
          <User />
        </span>

        <h1
          className={`text-center max-sm:text-sm flex-1 text-nowrap transition ease-in-out duration-1000 ${
            open ? "opacity-100" : "opacity-0 max-sm:opacity-100"
          }`}
        >
          Sahil Verma
        </h1>
      </div>
    </div>
  );
}

function Skeleton({ open, fallbackNavItems }) {
  function getWidth(label) {
    const base = 8;
    const padding = 20;
    return label.length * base + padding;
  }
  return (
    <div>
      {fallbackNavItems?.map(({ id, label }) => (
        <div
          key={id}
          className={`flex gap-2 items-center rounded-md cursor-pointer my-2 animate-pulse ${
            open && "hover:bg-[#202124]"
          }`}
        >
          <span className="bg-[#202124] rounded-md size-10 shrink-0"></span>
          <span
            className={`h-7 bg-[#202124] transition-all duration-1000 ease-in-out transform rounded-md ${
              open ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: open ? `${getWidth(label)}px` : 0,
            }}
          ></span>
        </div>
      ))}
    </div>
  );
}
