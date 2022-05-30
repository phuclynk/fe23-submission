import React from "react";
import { CardHeader } from "./card-header/CardHeader";
import { CardBody } from "./card-body/CardBody";

export function Card(props) {
    const cardStyle = {
        width: "90%",
        // maxHeight: "500px",
        // overFlow: "auto",
        margin: "50px auto",
    }
    const deleteTask = (index) => {
        props.deleteTask(index);
    }
    const setTaskDone = (index) => {
        props.setTaskDone(index);
    }
    return <div style={cardStyle}>
        <CardHeader title="Todo List"></CardHeader>
        <CardBody taskList={props.taskList} deleteTask={deleteTask} setTaskDone={setTaskDone}></CardBody>
    </div>;
}