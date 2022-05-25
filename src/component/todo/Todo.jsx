import React,{useState} from 'react'
import TodoForm from '../todo-form/TodoForm';
import TodoList from '../todo-list/TodoList';
import TodoTitle from '../todo-title/TodoTitle';
import "./Todo.css";

function Todo() {
  return (
    <div className='todo'>
        
        
        <TodoForm/>
        <TodoTitle/>
        <TodoList/>
        
    </div>
  )
}

export default Todo