import React from "react";
import "./TodoAdd.css"
import { FaPlusCircle } from 'react-icons/fa';

export function TodoAdd() {
    return (
        <div className="todo-add">
            <input type="text" className="todo-add-input"  placeholder="What need to be done?"/>
            <button className="todo-add-btn"><FaPlusCircle />Add</button>
        </div>
    )
}