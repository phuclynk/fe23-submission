import React from 'react'
import "./style.css"

function AddTodoItemForm() {
  return (
    <div className='add-item-form'>
        <input placeholder='What needs to be done' className='add-item-input' />
        <button className='submit-btn'>
        <i class="fa-solid fa-plus"></i> Add
        </button>
    </div>
  )
}

export default AddTodoItemForm