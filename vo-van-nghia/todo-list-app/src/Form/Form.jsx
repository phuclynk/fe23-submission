import React, { useState } from "react";
import "./style.css";
import { FaPlusCircle } from "react-icons/fa";
export function Form(props) {
   const [newTodoValue, setnewTodoValue] = useState("");
   //thuc hien viec cap nhat state cho item moi
   const handleNewTodoValueChange = (e) => {
      setnewTodoValue(e.target.value);
   };
   //thuc hien submit gia tri todo item moi va gui len component cha
   const handleSubmitNewTodoValue = () => {
      props.onTodoItemSubmit(newTodoValue);
      setnewTodoValue("");
   };

   return (
      <div className="form">
         <input
            type="text"
            onChange={handleNewTodoValueChange}
            value={newTodoValue}
            className="form-input"
            placeholder="What need to be done?"
         />
         <button onClick={handleSubmitNewTodoValue} className="button-btn">
            <FaPlusCircle className="plus-icon" />
            Add
         </button>
      </div>
   );
}
