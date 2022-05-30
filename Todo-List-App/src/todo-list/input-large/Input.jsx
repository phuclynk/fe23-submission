import React, { useState } from 'react';
import "./style.css";
import { TagsOutlined } from "@ant-design/icons";
export function InputLarge(props) {
  console.log(props);
  const changeTaskName = (taskName) => {
    props.onChangeNewTask(taskName.trim());
  }

  return (
    <div className="input-icons">
      <TagsOutlined className="icon-left" />
      <input
        className="input-large"
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => { changeTaskName(e.target.value) }}
        value={props.inputTask}
      />
      <small className='task-error'>{props.taskError}</small>
    </div>
  );
}
