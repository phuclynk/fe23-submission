import React from "react";

export function TodoItemSuccess(props) {
  return (
    <li>
      <span>
        <input className="todo-item-checkbox" type="checkbox" checked />
        <button className="todo-item-btn btn-success">
          <i className="fa-solid fa-check"></i>
        </button>
        <span className="todo-done">{props.title}</span>
      </span>
      <button className="item-button-del">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
}
