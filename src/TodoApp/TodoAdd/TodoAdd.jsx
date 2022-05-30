import React, { useState, useEffect } from "react";
import "./TodoAdd.css"
import { FaPlusCircle } from 'react-icons/fa';
import { getValue } from "@testing-library/user-event/dist/utils";

export function TodoAdd(props) {

    const [job, setJob] = useState("");
  
    const handleSubmit =() => {
        if(!job) {
            alert("Please enter job title!")
        } else {
            if(job.length <= 65){
                const jobs = {      
                    title: job,
                }
                props.handleAddJob(jobs)      
            } else {
                const regex = job.substring(65);
                const jobSlice = job.replace(regex, '...');
                console.log(regex);
                console.log(jobSlice);
                const jobs = {      
                    title: jobSlice,
                }
                props.handleAddJob(jobs)      
            } 
        }
    
        setJob("");
    }

    return (
        <div className="todo-add">
            <input type="text" className="todo-add-input"  placeholder="What need to be done?"
            value={job} onChange={e => setJob(e.target.value)}
            />
            <button className="todo-add-btn"
            onClick={handleSubmit}>
            <FaPlusCircle/>Add</button>
        </div>
    )
}