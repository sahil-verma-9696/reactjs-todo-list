import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function PageNotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="text-center bg-gray-100 dark:bg-[#1a1a1a] p-10 rounded-2xl shadow-lg max-w-md w-full transition-colors duration-500">
        <h1 className="text-5xl font-extrabold text-red-600 dark:text-red-500 mb-4">
          404
        </h1>
        <p className="text-xl mb-2">
          <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
            {pathname.slice(1) || "This"}
          </span>{" "}
          page was not found.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-400">
          It seems you're lost. Let's get you back.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 rounded-md text-white font-medium transition-all duration-300"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}
