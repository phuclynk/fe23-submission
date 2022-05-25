import React from "react";
import "./TodoItem.css"
import { FaTrash } from 'react-icons/fa';


export function TodoItem() {
    const listTodos = [
        {id: "todo1", title: "Test React Ant Design Todo List"},
        {id: "todo2", title: "Write About React And Ant Design"},
        {id: "todo3", title: "Finalize Presentation"},
        {id: "todo4", title: "Book Flights To Ireland"}
    ]

    return (
        <div className="todo-list-content">
            {listTodos && listTodos.length > 0 && 
                listTodos.map((item,index) => {
                    return (
                        <div className="todo-item" key={index}>
                            <input type="checkbox" name="" id="" />
                            <span>{item.title}</span>
                            <button><FaTrash /></button>  
                        </div>  
                    )                                     
                })
            }          
        </div>
    )
}