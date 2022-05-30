import React, { useState } from "react";
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import "./TodoApp.css"
import { v4 } from 'uuid';


export function TodoApp() {
    const [todoList, setTodoList] = useState([
        {id: v4(), title: "Test React Ant Design Todo List", done: false},
        {id: v4(), title: "Write About React And Ant Design", done: false},
        {id: v4(), title: "Finalize Presentation", done: true},
        {id: v4(), title: "Book Flights To Ireland", done: false}
    ]);

    return (
        <div className="todo-app">
            <TodoAdd/>
            <TodoList todoList={todoList}/>
        </div>
    )
}