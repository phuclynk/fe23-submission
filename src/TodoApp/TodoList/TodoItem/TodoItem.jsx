import React from "react";
import "./TodoItem.css"
import { FaTrash } from 'react-icons/fa';


export function TodoItem() {
    const listTodos = [
        {id: "todo1", title: "Test React Ant Design Todo List", done: false},
        {id: "todo2", title: "Write About React And Ant Design", done: false},
        {id: "todo3", title: "Finalize Presentation", done: true},
        {id: "todo4", title: "Book Flights To Ireland", done: false}
    ]

    return (
        <div className="todo-list-content">
            {
                listTodos.map((item,index) => {
                    return (
                        <div className="todo-item" key={index}>
                            <input className="todo-item-input" type="checkbox" checked={item.done} name="" id="" />
                            <span className={`todo-item-description ${item.done ? "checked" : ""}`}>{item.title}</span>
                            <button className="todo-item-btn"><FaTrash /></button>  
                        </div>  
                    )                                     
                })
            }          
        </div>
    )
}