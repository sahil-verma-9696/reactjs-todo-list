import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export function useTodos() {
  const [todos, setTodos] = useLocalStorage("todos", []);

  // Add todo
  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      if (prevTodos.find((t) => t.title === todo.title)) {
        throw new Error("Todo already exists");
      }
      return [...prevTodos, todo];
    });
  };

  // Remove todo
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  // Update todo
  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? updatedTodo : t))
    );
  };

  return { todos, addTodo, removeTodo, updateTodo };
}
