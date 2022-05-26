import React from 'react'
import AddTodoItemForm from './add-todo-item-form/AddTodoItemForm'
import TodoListPanel from './todo-list-panel/TodoListPanel'

// import AddTodoItemForm from './add-todo-item-form/AddTodoItemForm'


function TodoList() {
  return (
   
      <div className='todo-list'>
          <AddTodoItemForm/>
          <TodoListPanel/>
      </div>
  
  )
}

export default TodoList