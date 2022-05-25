import React from "react";
import { Header } from "./hearder/Header";
import './tasklist.css';
import { TaskItem } from "./task-item/TaskItem";

export function TaskList() {
    return <div className="task_list">
        <Header/>
        <TaskItem label = "Test React Ant Design Todo List"/>
        <TaskItem label = "Write About React And Ant Design"/>
        <TaskItem label = "Finalize Presentation"/>
        <TaskItem label = "Book Flights To Ireland"/>

    </div>
}