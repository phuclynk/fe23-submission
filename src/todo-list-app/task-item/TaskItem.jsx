import React, { useState } from "react";
import Panel from "../panel/panel";
import Search from "../search-input/SearchInput";
import TodoList from "../todo-list/TodoList";

export function TaskItem() {
   const [todos, setTodos] = useState([
      // {
      //    id: 1,
      //    done: false,
      //    text: 'Test React Ant Design Todo List'
      // },
      // {
      //    id: 2,
      //    done: false,
      //    text: 'Write About React And Ant Design'
      // },
      // {
      //    id: 3,
      //    done: true,
      //    text: 'Finalze Presentation'
      // },
      // {
      //    id: 4,
      //    done: false,
      //    text: 'Book Flights To Ireland'
      // },
   ])
   const addTodo = (text) => {
      let id = 1;
      if (todos.length > 0) {
         id = todos[0].id + 1
      }
      let todo = {
         id: id,
         done: false,
         text: text,
      }
      let newTodos = [todo, ...todos]
      setTodos(newTodos)
   };

   const removeTodo = (id) => {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id)
      setTodos(updatedTodos)
   };

   const completeTodo = (id) => {

      let updatedTodos = todos.map(todo => {
         if (todo.id === id) {
            todo.done = !todo.done
         }
         return todo
      })
      setTodos(updatedTodos)
   }

   return (
      <>
         <div className="container">
            <Search addTodo={addTodo} pl="What needs to be done?"></Search>
            <div className="list">
               <Panel panel="Todo List"></Panel>
               {todos.map(todo => {
                  return (
                     <TodoList removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}></TodoList>
                  )
               })}
            </div>
         </div>
      </>
   )
}