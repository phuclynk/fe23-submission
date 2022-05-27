import React from "react";
import { Header } from "./hearder/Header";
import './tasklist.css';
import { TaskItem } from "./task-item/TaskItem";

export function TaskList() {
    return <div className="task_list">
        <Header/>
        <TaskItem done = {false} label = "Test React Ant Design Todo List"/>
        <TaskItem done = {false} label = "Write About React And Ant Design"/>
        <TaskItem done = {true} label = "Finalize Presentation"/>
        <TaskItem done = {false} label = "Book Flights To Ireland"/>

    </div>
}