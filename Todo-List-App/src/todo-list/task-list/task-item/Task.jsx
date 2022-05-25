import React from "react";
import "./style.css";
import 'antd/dist/antd.min.css';
import { Checkbox } from 'antd';
import { ButtonSmall } from "../../button-small/Button";


export function Task(props) {
    return <div className="task-item">
        <Checkbox></Checkbox>
        <label className="label-task-name">{props.taskName}</label>
        <ButtonSmall></ButtonSmall>
    </div>;
}