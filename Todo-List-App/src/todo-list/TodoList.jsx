import React, { useState, useEffect } from "react";
import "./style.css";
import { ButtonLarge } from "./button-large/Button";
import { InputLarge } from "./input-large/Input";
import { Card } from "./card/Card";

export function TodoList(props) {
  const [newTaskError, setNewTaskError] = useState('')
  const [inputTask, setInputTask] = useState('')
  const [newTask, setNewTask] = useState({
    done: false,
    name: ""
  })
  const [taskList, setTaskList] = useState([])

  const handleChangeNewTask = (taskName) => {
    setInputTask(taskName);
    setNewTask({
      ...newTask,
      name: taskName,
      done: false
    })
  }
  const handleAddNewTask = () => {
    if (newTask.name.trim().length === 0) {
      setNewTaskError("Task content is required")
      return;
    }
    setNewTaskError("");
    setTaskList([newTask, ...taskList]);
    setNewTask({
      ...newTask,
      name: "",
      done: false
    })
    setInputTask("");
  }
  const deleteTask = (index) => {
    setTaskList([...taskList.slice(0, index), ...taskList.slice(index + 1)]);
  }
  const setTaskDone = (index) => {
    var taskListTmp = [...taskList];
    taskListTmp[index].done = true;
    setTaskList(taskListTmp);
  }

  return (
    <div>
      <div className="inline-row">
        <InputLarge placeholder="What needs to be done?" onChangeNewTask={handleChangeNewTask} taskError={newTaskError} inputTask={inputTask}></InputLarge>
        <ButtonLarge text="Add" onAddNewTask={handleAddNewTask}></ButtonLarge>
      </div>
      <Card taskList={taskList} deleteTask={deleteTask} setTaskDone={setTaskDone}></Card>
    </div>
  );
}
