import React from "react";
import "./TodoItem.css"
import { FaTrash } from 'react-icons/fa';


export function TodoItem(props) {
    

    return (
        <div className="todo-list-content">
            <div className="todo-item" key={props.id}>
                <input className="todo-item-input" type="checkbox" checked={props.done} name="" id="" />
                <span className={`todo-item-description ${props.done ? "checked" : ""}`}>{props.title}</span>
                <button className="todo-item-btn"><FaTrash /></button>  
            </div>  
        </div>
    )
}