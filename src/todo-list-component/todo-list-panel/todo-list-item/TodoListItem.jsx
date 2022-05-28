
import React from 'react'

export function TodoListItem(props) {
    return(
        <div className='todoList__listItem'>
            <input className='todoList__checkItem' checked={props.done} type="checkbox"/>
            <p className='todoList__description' >{props.description}</p>
            <button className='todoList_btnDelete'>Delete</button>
        </div>
    )
}