import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoTitle } from "./TodoTitle/TodoTitle";
import "./TodoList.css"

export function TodoList(props) {
    const handleDeleteTodoMediate = (itemDeleteFromTodoItem) => {
        props.handleDeteleTodoApp(itemDeleteFromTodoItem)
    }
    // console.log(props, "========props of todolist")
    
    return (
        <div className="todo-list">
            <TodoTitle/>
            <TodoItem dataFromUser2={props.dataFromUser}
                    //   onDeleteClick={handleDeleteClick}
                      handleDeteleTodoList = {handleDeleteTodoMediate}  
            />
        </div>
    )
}