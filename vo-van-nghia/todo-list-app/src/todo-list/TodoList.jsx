import React, { useCallback } from "react";
import "./style.css";
import { Checkbox } from "@atlaskit/checkbox";
export default function TodoList({ todo, setTodo }) {
   // kiểm tra xem ng` dùng đã tick checkbox chưa
   const handleComplete = useCallback((id) => {
      setTodo((prevState) =>
         prevState.map((todo) =>
            // toán tử 3 ngôi. đúng thì isCompleted là true, ngược lại nếu ko có gì thì trả về danh sánh hiện tại
            todo.id === id ? { ...todo, isCompleted: true } : todo
         )
      );
   }, []);

   // xóa task
   const handleRemove = ({ id }) => {
      setTodo(todo.filter((todo) => todo.id !== id));
   };

   return (
      <div className="todolist">
         <div>
            <h3 className="todo-header">Todo List</h3>
         </div>

         {todo.map((todo) => (
            <div className="todolist-item" key={todo.id}>
               <Checkbox
                  onClick={() => {
                     handleComplete(todo.id);
                  }}
                  className="todo-check"
               ></Checkbox>
               <p
                  type="text"
                  onChange={(event) => event.preventDefault()}
                  className="todo-desc"
               >
                  {todo.name}
               </p>
               <button
                  onClick={() => handleRemove(todo)}
                  className="todo-remove"
               >
                  Delete
               </button>
            </div>
         ))}
      </div>
   );
}
