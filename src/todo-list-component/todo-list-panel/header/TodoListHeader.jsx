import React from 'react'
import './style.css'


export function TodoListHeader(props) {
    return(
        <div className='todoList__todoListHeader'>
                {props.title}
        </div>
    )
}