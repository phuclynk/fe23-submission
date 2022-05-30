import React, { useState, useEffect } from "react";
import "./TodoItem.css"
import { FaTrash } from 'react-icons/fa';


export function TodoItem(props) {
        let jobOutput =  props.dataFromUser2 ?? [];
        // console.log(props, "========props of todo item");
        
        return ( 
            <div className="todo-list-content">    
            {   
                jobOutput.map((jobItem,index) => {
                    return (
                        <div className="todo-item" key={index}>
                            <input className="todo-item-input" type="checkbox" checked={jobItem.done} name="" id="" />
                            <span className={`todo-item-description ${jobItem.done ? "checked" : ""}`}>{jobItem.title}</span>
                            <button className="todo-item-btn"
                                onClick={() => {props.handleDeteleTodoList(jobItem)}}
                            ><FaTrash /></button>  
                        </div>  
                    )                                     
                })
            }          
        </div>
    )
}

    // const listTodos = [
        //     {id: "todo1", title: "Test React Ant Design Todo List", done: false},
        //     {id: "todo2", title: "Write About React And Ant Design", done: false},
        //     {id: "todo3", title: "Finalize Presentation", done: true},
        //     {id: "todo4", title: "Book Flights To Ireland", done: false}
        // ]