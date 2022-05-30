import React from 'react';
import { useState, useEffect } from 'react';
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import "./TodoApp.css"



export function TodoApp() {

    const [jobArr, setJobArr] = useState([]);

    const onHandleAddJob = (jobs) => {
        const newJobArr = [...jobArr];
        newJobArr.unshift(jobs)
        // console.log(jobs, "==================== jobs")
        setJobArr(newJobArr)
    } 
    // console.log(jobArr, "==================== jobArr")

    const handleDeteleTodo = (jobItem) => {
        // console.log(jobItem, "=============jobApp")
        const currenJobArr = jobArr.filter((item) => {
            return item.title !== jobItem.title
            })
        setJobArr(currenJobArr);
    }

    return (
        <div className="todo-app">
            <TodoAdd 
            handleAddJob= {onHandleAddJob}
            />
            <TodoList 
            dataFromUser={jobArr}
            handleDeteleTodoApp = {handleDeteleTodo}
            />
        </div>
    )
}