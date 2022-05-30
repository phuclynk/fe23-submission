import React, { useState, useEffect } from "react";
import "./style.css";
import { ButtonLarge } from "./button-large/Button";
import { InputLarge } from "./input-large/Input";
import { Card } from "./card/Card";
import { message } from "antd";

export function TodoList(props) {
  const doneFiled = "done";
  const nameField = "name";
  const [newTaskError, setNewTaskError] = useState('')
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState({
    [doneFiled]: true,
    [nameField]: ""
  })

  const handleChangeNewTask = (taskName) => {
    setNewTask({
      ...newTask,
      [nameField]: taskName,
      [nameField]: taskName
    })
  }
  const handleAddNewTask = () => {
    if (newTask.trim().length === 0) {
      setNewTaskError("Task content is required")
      return;
    }
    setNewTaskError("")
    setTaskList([newTask, ...taskList])
  }

  return (
    <div>
      <div className="inline-row">
        <InputLarge placeholder="What needs to be done?" onChangeNewTask={handleChangeNewTask} taskError={newTaskError}></InputLarge>
        <ButtonLarge text="Add" onAddNewTask={handleAddNewTask}></ButtonLarge>
      </div>
      <Card taskList={taskList}></Card>
    </div>
  );
}
