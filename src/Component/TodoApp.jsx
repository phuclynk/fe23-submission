import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoList } from "../Component/slice/todoSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DoneTask from "./pages/DoneTask";
import AllTask from "./pages/AllTask";
import DoingTask from "./pages/DoingTask";
import NewTask from "./pages/NewTask";
import AddNewTask from "./pages/AddNewTask";
import EditTask from "./pages/EditTask";
import SearchTask from "./pages/SearchTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TODO_LIST_KEY = "TODO_LIST";

export const TodoApp = (props) => {
   const todoList = useSelector((state) => state.todo.todoList);
   const dispatch = useDispatch();
   const localUpdateTodoList = (newTodolist) => {
      dispatch(updateTodoList([...newTodolist]));
   };

   useEffect(() => {
      const storedTodoList = localStorage.getItem("TODO_LIST");

      if (storedTodoList === null) {
         return;
      }

      localUpdateTodoList(JSON.parse(storedTodoList));
   }, []);

   const handleTodoItemSubmit = (title) => {
      if (title === "") return;
      const newTodoList = [
         {
            id: v4(),
            title,
            done: false,
         },
         ...todoList,
      ];
      localUpdateTodoList(newTodoList);
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
   };

   const handleDeleteTodoItem = (todoItemId) => {
      const newTodoList = todoList.filter((item) => item.id !== todoItemId);
      localUpdateTodoList(newTodoList);
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
   };

   const handleUpdateItemStatus = (todoItem) => {
      const newTodoList = todoList.map((item) => {
         if (item.id === todoItem.id) {
            return {
               ...item,
               done: !todoItem.done,
            };
         }
         return item;
      });
      localUpdateTodoList([...newTodoList]);
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
   };

   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <div className="container">
               <SideBar></SideBar>
               <div>
                  <Routes>
                     <Route path="/" element={<AllTask />} />
                     <Route path="/new-task" element={<NewTask />} />
                     <Route path="/doing-task" element={<DoingTask />} />
                     <Route path="/done-task" element={<DoneTask />} />
                     <Route path="/add-new-task" element={<AddNewTask />} />
                     <Route path="/edit-task/:id" element={<EditTask />} />
                     <Route path="/:search" element={<SearchTask />} />
                  </Routes>
                  <ToastContainer
                     position="top-right"
                     autoClose={5000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                  />
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
};
