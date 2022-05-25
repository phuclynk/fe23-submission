import React from "react";
import "./style.css";
import { TaskList } from "../../task-list/TaskList";

export function CardBody() {
    return <div className="card-body">
        <TaskList></TaskList>
    </div>;
}