import React,{useState} from 'react';
import "./TodoList.css"

function TodoList() {
    const [todos, setTodos] = useState('')

  return (
    <div className='todo-list'>
      
          <p><input type="checkbox"/> Test React Ant Design Todo List</p>
          <br />
          <p><input type="checkbox"/>  Write About React And Ant Design</p>
          <br />
          <p><input type="checkbox"/>  Finalize</p>
          <br />
          <p><input type="checkbox"/> Book Flights To Ireland</p>
          <br />
            
        
    </div>
  )
}

export default TodoList