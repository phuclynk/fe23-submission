import React from "react";
import { Icon } from "../icon/Icon";
import './style.css';

const listToDo = [
    {done: true, describe: "Test React Ant Design Todo List"},
    {done: true, describe: "Write About React And Ant Design"},
    {done: false, describe: "Finalize Presentation"},
    {done: true, describe: "Book Flights To Ireland"}
]

export function TaskItem() {

    return listToDo.map((item) => {
        return <div className="task_item">
    
    
            <div><input type="checkbox" checked = {item.done} name="" id="" /></div>
            
            <div className={`asdasd ${item.done ? "checked" : ''}`}>
                {item.describe}
            </div>
            <Icon/>
            </div>
        
    })
}