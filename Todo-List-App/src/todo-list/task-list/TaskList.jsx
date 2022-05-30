import React, { useEffect } from "react";
import { Task } from "./task-item/Task";
import "./style.css";

export function TaskList(props) {
  const deleteTask = (index) => {
    props.deleteTask(index);
  }
  const setTaskDone = (index) => {
    props.setTaskDone(index);
  }
  return (
    <div>
      {props.taskList.length > 0 &&
        <div className="task-list">
          {props.taskList.map((item, index) => (
            <Task key={index} taskName={item.name} done={item.done} deleteTask={deleteTask} idx={index} setTaskDone={setTaskDone} />
          ))}
        </div>
      }
    </div>


  );
}
