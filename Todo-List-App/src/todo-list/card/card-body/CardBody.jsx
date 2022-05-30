import React from "react";
import "./style.css";
import { TaskList } from "../../task-list/TaskList";

export function CardBody(props) {
    const deleteTask = (index) => {
        props.deleteTask(index);
    }
    const setTaskDone = (index) => {
        props.setTaskDone(index);
    }
    return <div className="card-body">
        <TaskList taskList={props.taskList} deleteTask={deleteTask} setTaskDone={setTaskDone}></TaskList>
    </div>;
}