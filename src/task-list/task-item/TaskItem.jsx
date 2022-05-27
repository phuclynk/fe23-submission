import React from "react";
import { Icon } from "../icon/Icon";
import './style.css';

export function TaskItem(props) {
    console.log(props)
    return <div className="task_item">
        <div><input type="checkbox" checked = {props.done} name="" id="" /></div>
        
        <div className={`asdasd ${props.done ? "checked" : ''}`}>
            {props.label}
        </div>
        <Icon/>
    </div>
}