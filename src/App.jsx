import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import CreateTodo from "./pages/CreateTodo";
import YourTodos from "./pages/YourTodos";
import { FloatingBtn } from "./components/ui/Button";

function App() {
  const [page, setPage] = useState("todos");
  const pages = {
    create: CreateTodo,
    todos: YourTodos,
  };
  const titles = {
    create: "create your TODO",
    todos: "your TODOs",
  };
  const ActivePage = pages[page];

  return (
    <div className="flex dark:bg-[#171717]">
      <FloatingBtn setPage={setPage} page={page}/>
      <Sidebar setPage={setPage} page={page} />
      <div className="h-screen flex-1 flex flex-col bg-[#FDFAFF] overflow-y-auto">
        <Header title={titles[page]} />
        <ActivePage />
      </div>
    </div>
  );
}

export default App;
