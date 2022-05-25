import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoTitle } from "./TodoTitle/TodoTitle";
import "./TodoList.css"

export function TodoList() {
    return (
        <div className="todo-list">
            <TodoTitle/>
            <TodoItem/>
        </div>
    )
}