import React, {useState} from 'react';
import "./TodoForm.css"
function TodoForm(props) {
  const [input, setInput] = useState('')    
  
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    // e.preventDefault();
    // props.onSubmit({
    //     id: Math.floor(Math.random()*1000),
    //     text: input
    // })
    setInput('');

  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
            value={input}
            type='text'
            placeholder='Add todo'
            name='text'
            className='todo-input'
            onChange={handleChange}
        />
        <button  className='btn-add'>+</button>
    </form>
  );
}

export default TodoForm