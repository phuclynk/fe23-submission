import { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './Title.css'


export default function Title (props){
   const [inputVal, setInputVal] = useState('')

   let handleInputChange = (e)=>{
      setInputVal(e.target.value)
   }

   let handleKeyUp = (e)=>{
      if(e.key == 'Enter'){
         if(inputVal != ''){
            props.handleTaskListChange(inputVal);
            setInputVal('');
         }else{
            alert('Please enter your task')
         }
      }
   }

   let handleClick = ()=>{
      if(inputVal != ''){
         props.handleTaskListChange(inputVal);
         setInputVal('');
      }else{
         alert('Please enter your task')
      }
   }

   
   return(
      <div className='container__title'>
         <input 
            id='taskInput' 
            placeholder={props.placeholder}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            />
         <div className='container__title__icon'>
            <FontAwesomeIcon icon={faTags} />
         </div>
         <button onClick={handleClick}>
            <FontAwesomeIcon icon={faCirclePlus} />
            <span> Add</span>
         </button>
      </div>
   )
}  