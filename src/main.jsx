import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import { navItems } from "./data/navItems.js";
import Completed from "./pages/Completed.jsx";
import PageNotFound from "./components/layout/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/overview",
        Component: Dashboard,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      {
        path: "completed",
        Component: Completed,
      },
    ],
    errorElement: <PageNotFound/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
