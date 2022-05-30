import React, { useState } from "react";
import { GrAddCircle } from 'react-icons/gr';

export default function Search(props) {
   const [valueInput, setInput] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      props.addTodo(valueInput)
      setInput("")
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="search">
               <input
                  autoComplete="off"
                  id="search-input"
                  value={valueInput}
                  onChange={(e) => setInput(e.target.value)}
                  type="search"
                  placeholder={props.pl}
               />
            </div>
            <div className="add"><button disabled={valueInput === ''} id="btn" type="submit"><GrAddCircle /> Add</button></div>
         </form>
      </>
   )
}