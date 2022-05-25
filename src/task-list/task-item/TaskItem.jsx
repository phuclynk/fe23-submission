import React from "react";
import { CheckBox } from '../check-box/CheckBox';
import { Icon } from "../icon/Icon";
import { Label } from "../label/Label";
import './style.css';

export function TaskItem(a) {
    return <div className="task_item">
        <CheckBox/>
        <Label>{a.label}</Label>
        <Icon/>
    </div>
}