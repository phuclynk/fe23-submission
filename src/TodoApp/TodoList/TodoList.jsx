import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoTitle } from "./TodoTitle/TodoTitle";
import "./TodoList.css"

export function TodoList(props) {

    return (
        <div className="todo-list">
            <TodoTitle/>
            {props.todoList.map(item => <TodoItem key={item.id} {...item}/>)}
        </div>
    )
}