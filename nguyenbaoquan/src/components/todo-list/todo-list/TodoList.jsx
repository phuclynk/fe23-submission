import React from "react";
import { TodoItemWarning } from "../todo-item-warning/TodoItemWarning";
import { TodoItemSuccess } from "../todo-item-success/TodoItemSuccess";

export function TodoList() {
  return (
    <div className="todo-list">
      <h3 className="todo-heading">Todo List</h3>
      <ul className="todo-list-ul">
        <TodoItemWarning title="Text React Ant Design Tdo List" />
        <TodoItemWarning title="Write about React and Ant Design" />
        <TodoItemSuccess title="Finalize Presentation" />
        <TodoItemWarning title="Book Flight To Ireland" />
      </ul>
    </div>
  );
}
