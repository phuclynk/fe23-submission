import React from 'react';
import './style.css';


export function AddToDoItem () {
    
    return (
        <div className='todoList__addItem '>
        <i className="fas fa-clipboard-list icon"></i>
        <input 
        className='todoList__addJob' 
        placeholder='What needs to be done?'
        />

        <button
        className='todoList__btnJob fal fa-plus-circle'>
                ADD
        </button>
        </div>
    )
}