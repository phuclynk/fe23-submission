import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
export function TodoList(props) {
   return (
      <div className="todo-list">
         {props.todoList.map((item) => (
            <TodoItem key={item.id} {...item} />
         ))}
      </div>
   );
}
