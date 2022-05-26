import React from 'react'
import "./style.css"

function TodoListHeader(props) {
  return (
    <div className='todo-list-header'>
        {props.header}
    </div>
  )
}

export default TodoListHeader