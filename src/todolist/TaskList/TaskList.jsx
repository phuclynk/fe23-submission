import { useEffect } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css'

export default function TaskList (props){

   return(
      <div className='container__list'>
         <div className='container__list__title'>Todo List</div>
         <div className='container__list__item'>
            {(props.list != null) && (props.list.map((item, index) =>
               <TaskItem 
               key={index} 
               num={index}   
               done={item.done}
               content={item.content}
               updateTask={props.updateTask}
               deleteTask={props.deleteTask}
               />
            ))}
         </div>
      </div>
   ) 
}  