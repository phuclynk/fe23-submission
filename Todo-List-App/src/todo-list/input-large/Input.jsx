import React, { useState } from 'react';
import "./style.css";
import { TagsOutlined } from "@ant-design/icons";
export function InputLarge(props) {
  const [newTask, setNewTask] = useState('')

  const handleLostFocus = () => {
    if (newTask.trim() === "") {
      return;
    }
    props.onChangeNewTask(newTask.trim());
  }

  return (
    <div className="input-icons">
      <TagsOutlined className="icon-left" />
      <input
        className="input-large"
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => { setNewTask(e.target.value) }}
        onBlur={handleLostFocus}
      />
      <small className='task-error'>{props.taskError}</small>
    </div>
  );
}
