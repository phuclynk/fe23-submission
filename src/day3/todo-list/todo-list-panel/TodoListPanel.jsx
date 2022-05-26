import React from 'react'
import TodoListHeader from "./todo-list-header/TodoListHeader"
import "./todolistpanel.css"
import TodoListItem from "./todo-list-item/TodoListItem"

function TodoListPanel() {
  return (
    <div className='todo-list-panel'>
        <TodoListHeader header="Todo List" />
        <div className='list-item-wrapper'>
            <TodoListItem done={false} description="Test React Ant Design Todo List" />
            <TodoListItem done={false} description="Write About React And Ant Design" />
            <TodoListItem done={true} description="Finalize" />
            <TodoListItem done={false} description="Book Flights To Ireland" />
        </div>
    </div>
   
  )
}

export default TodoListPanel