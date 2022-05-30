import React, {useState} from 'react';
import {TodoListHeader} from './TodoListHeader.jsx'
import './panel.css'

export function TodoListPanel() {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"))

    const [job, setJob] = useState("")
    const [jobs, setJobs] = useState(storageJobs ?? [])
    console.log(storageJobs)
    
    const [checkbox, setCheckbox] = useState([0])
    //     () => {
    //     console.log(storageJobs.length - 1)
    //     const checkIndex = storageJobs.length
    //     if(localStorage.getItem("jobs")) {
    //         return [checkIndex]
    //     } else return []
    // }


    function handleSubmit() {
        if (job !== "") {
            setJobs((pre) => {
                const newJobs = [...pre, job]
            //save jobs to local storage
                const jsonJobs = JSON.stringify(newJobs)
                localStorage.setItem("jobs", jsonJobs)
            
                return newJobs
            })
        }
        setJob("")

    }

    function handleCheckbok(index) {
        setCheckbox((pre) => {
            const isChecked = checkbox.includes(index)
        if (isChecked) {
            return checkbox.filter((item) => item !== index)
        } else {
            return [...pre, index]
        }
        })

    }

    console.log(checkbox)



    return (
        <div className="todo-list">
            {/* TodolistForm */}
            <div className="add-item-from">
                <div className="add-todo-item-input">
                    <i class="fas fa-tags"></i>
                    <input
                        placeholder= 'What needs to be clone' 
                        className="todo-item-input"
                        value={job}
                        onChange={(e)=>setJob(e.target.value)}
                    />
                </div>
                <button
                    className="submit-btn"
                    onClick={handleSubmit}
                    ><i class="fas fa-plus-circle"></i>
                Add</button>
            </div>

            {/* todolistPanel */}
            <div className="todo-list-panel">
                <TodoListHeader title = "Todo List"/>
                <div className="list-items-wrapper">
                    {jobs.map((job, index) => {
                        return (<div className="todo-list-item" key={index}> 
                            <input className="todo-list-item-checkbox" 
                                type='checkbox'
                                checked={checkbox.includes(index)}
                                onChange={() => handleCheckbok(index)}
                            />
                            <p className="todo-list-description">{job}</p>
                            <button className="todo-list-delete-btn"
                            ><i className="fas fa-trash-alt"></i></button>
                        </div>)
                    })}
                </div>
            </div>
        </div>

        
    )
}