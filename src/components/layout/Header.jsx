import React from "react";

const Header = ({ title = "create your TODO" }) => {
  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-white dark:bg-[#171717]">
      <h1 className="text-4xl font-bold dark:text-white max-sm:text-3xl max-sm:font-semibold">TODO</h1>
      <h2 className="capitalize text-3xl text-gray-800 dark:text-gray-300 max-sm:text-lg">{title}</h2>
      <div></div>
    </header>
  );
};

export default Header;
