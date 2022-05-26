import React from "react";

export default function TodoList(props) {
   return (
      <>
         <div className="todo-list">
            <input checked={props.done} type="checkbox" />
            <span className={`desc ${props.done ? 'checked' : ''}`}>{props.todo}</span>
            <button>D</button><hr />
         </div>
      </>
   )
}