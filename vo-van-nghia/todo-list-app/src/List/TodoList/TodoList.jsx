import React from "react";
import "./style.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoHeader } from "../TodoHeader/TodoHeader";
export function TodoList(props) {
   return (
      <div className="todo-list">
         <TodoHeader />
         {/* truyen callback ondeletetodoitem them lan nua vao todoitem de lay chinh xac id cua iem can xoa */}
         {props.todoList.map((item) => (
            <TodoItem
               onDelete={props.onDeleteTodoItem}
               onUpdate={props.onChangeItemStatus}
               key={item.id}
               {...item}
            />
         ))}
      </div>
   );
}
