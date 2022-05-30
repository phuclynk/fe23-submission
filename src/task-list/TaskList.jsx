import React from "react";
import { Header } from "./hearder/Header";
import './tasklist.css';
import { TaskItem } from "./task-item/TaskItem";


export function TaskList() {
    return <div className="task_list">
        <Header/>
        <TaskItem/>
    </div>
}