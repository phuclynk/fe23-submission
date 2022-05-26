import React from 'react'
import "./style.css"

function TodoListItem(props) {
  return (
    <div className='todo-list-item'>
        <input className='todo-list-item-checkbox' type="checkbox" checked={props.done} />
        <p className={`todo-list-item-description ${props.done ? 'checked': ''} `} >{props.description}</p>
        <button className='todo-list-delete-btn' ><i class="fa-solid fa-trash-can"></i></button>
    </div>
  )
}

export default TodoListItem