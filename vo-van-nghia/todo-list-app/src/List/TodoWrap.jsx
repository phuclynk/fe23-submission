import React, { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import { TodoList } from "./TodoList/TodoList";
import { v4 } from "uuid";
export function TodoWrap() {
   const [todoList, setTodoList] = useState([]);
   useEffect(() => {
      const StoredTodoList = localStorage.getItem("TODO_LIST");
      if (StoredTodoList === null) {
         setTodoList([]);
         return;
      }
      // vi du lieu dc luu tru o dang string nen mun js hiu dc thi phai chuyen no ve dang json roi state
      setTodoList(JSON.parse(StoredTodoList));
   }, []);

   //them todoitem vao list todo item
   const handleTodoSubmit = (title) => {
      if (title.trim().length === "" || title.trim().length <= 4) {
         alert("invalid value");
         return;
      }
      // copy todolist moi va them vao tren cung
      const newTodoList = [{ id: v4(), title, done: false }, ...todoList];
      setTodoList(newTodoList);
      //ham setitem cua localstorage gom 2 tham so(tu khoa dai dien cho du lieu va du lieu)
      // tham so thu 2 la string nen parse tu json sang string
      localStorage.setItem("TODO_LIST", JSON.stringify(newTodoList));
   };
   // sau khi thay doi state tien hanh luu xuong localstorage de khi reload lai ko bi mat
   // xoa item khoi list
   const handleDeleteTodoItem = (todoItemId) => {
      // su dung ham filter de loc ra item muon xoa
      const newTodoList = todoList.filter((item) => item.id !== todoItemId);
      localStorage.setItem("TODO_LIST", JSON.stringify(newTodoList));
      setTodoList(newTodoList);
   };
   //thuc hien cap nhat trang thai cho todo item
   const handleUpdateItemStatus = (todoItem) => {
      //lap qua cac phan tu trong todo list kiem tra xem phan tu can cap nat trang thai la phan tu nao
      const newTodoList = todoList.map((item) => {
         // neu dung phan tu
         if (item.id === todoItem.id) {
            //  thay doi trang thai
            return {
               ...item,
               done: !item.done,
            };
         }
         // ko thi giu nguyen va tra ve item ban dau
         return item;
      });
      // cap nhat list chua item da thay doi trang thai vao state
      localStorage.setItem("TODO_LIST", JSON.stringify(newTodoList));
      setTodoList([...newTodoList]);
   };

   return (
      <div className="todo-app">
         <Form onTodoItemSubmit={handleTodoSubmit} />
         <TodoList
            // truyen cac callback vao de lay data tu item con sau do thuc hien update hoac delete item
            onChangeItemStatus={handleUpdateItemStatus}
            onDeleteTodoItem={handleDeleteTodoItem}
            todoList={todoList}
         />
      </div>
   );
}
