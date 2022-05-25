import React from "react";
import "./TodoAdd.css"
import { FaPlusCircle } from 'react-icons/fa';

export function TodoAdd() {
    return (
        <div className="todo-add">
            <input type="text"  placeholder="What need to be done?"/>
            <button><FaPlusCircle />Add</button>
        </div>
    )
}