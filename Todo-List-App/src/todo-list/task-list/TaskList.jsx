import React from "react";
import { Task } from "./task-item/Task";

export function TaskList() {
    return <div>
        <Task taskName="Test React Ant Design Todo List"></Task>
        <Task taskName="Write About React And Ant Design"></Task>
        <Task taskName="Finalize Presentation"></Task>
    </div>;
}