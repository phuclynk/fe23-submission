import React from "react";

export function TodoForm() {
  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done?"
        required
      />
      <button type="submit" className="todo-button">
        <i className="fa-solid fa-circle-plus"></i> Add
      </button>
    </form>
  );
}
