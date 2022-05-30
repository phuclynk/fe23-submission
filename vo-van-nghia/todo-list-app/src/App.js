import React, { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./todo-form/Form";
import TodoList from "./todo-list/TodoList";
function App() {
   // khởi tạo KEY
   const DATA_KEY = "TODO_APP";
   // gán key cho biến để check xem có key này trên localstorage không
   const storagedData = localStorage.getItem(DATA_KEY);

   // sử dụng react hook useState để lưu trữ giá trị ng` dùng nhập
   const [input, setInput] = useState(""); // mặc định(trong trg hợp này) là 1 empty string

   // sử dụng react hook useState để lưu trữ
   const [todo, setTodo] = useState([]);
   //array trả về 2 element, 1 variable để lưu trữ state và 1 method để cập nhật state (todo)

   // kiểm tra xem có key nào trong localStorage hay không
   useEffect(() => {
      if (storagedData) {
         // convert string json to array
         setTodo(JSON.parse(storagedData));
      }
   }, []);
   // lưu trữ task trên localStorage
   useEffect(() => {
      localStorage.setItem(DATA_KEY, JSON.stringify(todo));
   }, [todo]);
   return (
      <div className="container">
         <div className="app-wrapper">
            <div>
               <Form
                  input={input}
                  setInput={setInput}
                  todo={todo}
                  setTodo={setTodo}
               />
            </div>
            <div>
               <TodoList todo={todo} setTodo={setTodo} />
            </div>
         </div>
      </div>
   );
}
export default App;
