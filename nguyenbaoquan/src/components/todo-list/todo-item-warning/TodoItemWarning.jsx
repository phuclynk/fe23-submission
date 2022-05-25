import React from "react";

export function TodoItemWarning(props) {
  return (
    <li>
      <span>
        <input className="todo-item-checkbox" type="checkbox" />
        <button className="todo-item-btn btn-warning">
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>{props.title}</span>
      </span>
      <button className="item-button-del">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
}
