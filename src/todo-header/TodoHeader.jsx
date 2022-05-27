import React from "react";
import './style.css';

export function TodoHeader() {
    return <div className="todo_header">
        <input type="text" placeholder="What need to be done?"/>
        <button>ADD</button>
    </div>
}