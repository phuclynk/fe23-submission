import React, { useState } from "react";
import { GrAddCircle } from 'react-icons/gr';

// const btnAdd = document.getElementById('btn');
// const search = document.getElementById('search-input');
// search.addEventListener("keyup", (e) => {
//    const value = e.currentTarget.value;

//    btnAdd.disabled = false

//    if (value === "") {
//       btnAdd.disabled = true
//    }
// })

export default function Search(props) {
   const [input, setInput] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      props.addTodo(input)
      setInput("")
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="search">
               <input
                  autoComplete="off"
                  id="search-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="search"
                  placeholder={props.pl}
               />
            </div>
            <div className="add"><button id="btn" type="submit"><GrAddCircle /> Add</button></div>
         </form>
      </>
   )
}