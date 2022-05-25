import React from 'react';
import ReactDOM from 'react';
import './Layout.css';
import Title from '../Title/Title';
import TaskList from '../TaskList/TaskList';

export default function Layout (){
   return(
      <div className='container'>
         <Title placeholder='What needs to be done'/>
         <TaskList 
            list={[
               'Test React Ant Design Todo list',
               'Write about React and Ant Design',
               'Finalize presentation',
               'Book flights to Ireland',
               'Meeting at 8.am',
            ]}
         />
      </div>
   )
}