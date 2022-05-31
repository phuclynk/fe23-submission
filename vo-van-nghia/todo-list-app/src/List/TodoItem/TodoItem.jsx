import React from "react";
import "./style.css";
import { FaTrash } from "react-icons/fa";
export function TodoItem(props) {
   return (
      <div className="todo-list-content">
         <div className="todo-item" key={props.id}>
            <input
               className="todo-item-input"
               type="checkbox"
               onChange={() => {
                  props.onUpdate(props);
               }}
               name=""
               id=""
            />
            {/* dung cu phap conditional de hien thi nhung item da dc check. const checked = done ? "check" : "" */}
            <span
               className={`todo-item-description ${
                  props.done ? "checked" : ""
               }`}
            >
               {props.title}
            </span>
            <button
               //khi click vao button tien hanh truyen id todoitem vao callback de truyen nguoc ra ngoai component cha(todoitem > todolist > todoapp)
               onClick={() => props.onDelete(props.id)}
               className="todo-item-btn"
            >
               <FaTrash />
            </button>
         </div>
      </div>
   );
}
