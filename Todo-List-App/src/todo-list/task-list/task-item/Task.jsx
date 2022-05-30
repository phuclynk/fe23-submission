import React from "react";
import "./style.css";
import "antd/dist/antd.min.css";
import { Checkbox } from "antd";
import { ButtonSmall } from "../../button-small/Button";

export function Task(props) {
  return (
    <div className="task-item">
      <Checkbox checked={props.done}></Checkbox>
      <label
        className={props.done ? "label-task-name-done" : "label-task-name"}
      >
        {props.taskName}
      </label>
      <ButtonSmall></ButtonSmall>
    </div>
  );
}
