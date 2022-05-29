import React, {useState, useEffect} from 'react';
import './Layout.css';
import Title from '../Title/Title';
import TaskList from '../TaskList/TaskList';

export default function Layout (){
   const [taskList, setTaskList] = useState([])

   let handleTaskListChange = (taskItem)=>{
      if(taskItem != ''){
         setTaskList([
            {
               done: false,
               content: taskItem
            },
            ...taskList
         ])
         document.getElementById('taskInput').value = '';
      }
   }


   let updateTask = (index, done)=>{
      taskList[index].done = done;
      setTaskList([...taskList])
   }

   let deleteTask = (index)=>{
      taskList.splice(index,1);
      setTaskList([...taskList])
   } 

   useEffect(()=>{
      taskList.forEach((item,i)=>{
         let taskElement = document.querySelectorAll(".container__list__item div")[i];

         if(item.done){
            taskElement.style.color = 'blue';
            taskElement.firstElementChild.style.display = 'none';
         }else{
            taskElement.style.color = 'black';
            taskElement.firstElementChild.style.display = 'block';
         }
      })
   })

   return(
      <div className='container'>
         <Title 
            placeholder='What needs to be done'
            handleTaskListChange={handleTaskListChange}
         />
         <TaskList 
            list={[...taskList]}
            updateTask={updateTask}
            deleteTask={deleteTask}
         />
      </div>
   )
}