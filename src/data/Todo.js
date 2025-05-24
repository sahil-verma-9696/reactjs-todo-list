export class Todo {
  constructor(title, description, label = 5) {
    this.id = Date.now();
    this.title = title || "Untitled";
    this.description = description || "Description Not Found";
    this.label = label;
  }

  getTodo() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      label: this.label,
    };
  }
}
