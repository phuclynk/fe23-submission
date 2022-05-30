import React, { useState } from "react";
import "./style.css";
import "antd/dist/antd.min.css";
import { Checkbox } from "antd";
import { ButtonSmall } from "../../button-small/Button";

export function Task(props) {
  const [taskDone, setTaskDone] = useState(false)
  const deleteTask = () => {
    props.deleteTask(props.idx);
  }
  const changeStatusTask = (done) => {
    props.setTaskDone(props.idx);
    setTaskDone(done);
  }
  return (
    <div className="task-item">
      {!props.done &&
        <Checkbox onChange={(e) => { changeStatusTask(e.target.checked) }}></Checkbox>
      }
      <label
        className={`label-task-name ${props.done ? "done" : ""}`}
      >
        {props.taskName}
      </label>
      <ButtonSmall deleteTask={deleteTask}></ButtonSmall>
    </div>
  );
}
