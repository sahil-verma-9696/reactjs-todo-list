class TodoManager {
  constructor() {
    const localTodos = localStorage.getItem("todos");
    if (!localTodos) localStorage.setItem("todos", "[]");
    this.todos = JSON.parse(localTodos);
  }

  saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo) {
    const isTodoExist = this.todos.find((t) => t.title === todo.title);
    if (isTodoExist) throw new Error("TODO already exists");
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveToLocalStorage();
  }

  updateTodo(id, todo) {
    this.todos = this.todos.map((t) => (t.id === id ? todo : t));
    this.saveToLocalStorage();
  }

  getTodos() {
    return this.todos;
  }
}

export const todoManager = new TodoManager();
