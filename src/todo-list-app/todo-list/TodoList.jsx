import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default function TodoList(props) {
   return (
      <>
         <div className="todo-list">
            <input onClick={() => props.completeTodo(props.todo.id)} type="checkbox" />
            <p className={`desc ${props.todo.done ? 'checked' : ''}`}>{props.todo.text}</p>
            <button>
               <AiFillDelete
                  onClick={() => { props.removeTodo(props.todo.id) }}
               >
               </AiFillDelete>
            </button><hr />
         </div>

      </>
   )
}