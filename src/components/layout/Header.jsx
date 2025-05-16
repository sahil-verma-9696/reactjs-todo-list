import React from "react";

const Header = ({ title = "create your TODO" }) => {
  return (
    <header className="flex justify-between p-4 sticky top-0 bg-white">
      <h1 className="text-4xl font-bold">TODO</h1>
      <h2 className="capitalize text-3xl text-gray-800">{title}</h2>
      <div></div>
    </header>
  );
};

export default Header;
