import React from "react";
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import "./TodoApp.css"


export function TodoApp() {
    return (
        <div className="todo-app">
            <TodoAdd/>
            <TodoList/>
        </div>
    )
}