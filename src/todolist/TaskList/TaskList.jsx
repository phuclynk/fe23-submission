import TaskItem from './TaskItem';
import './TaskList.css'

export default function TaskList (props){
   
   return(
      <div className='container__list'>
         <div className='container__list__title'>Todo List</div>
         <div className='container__list__item'>
            {props.list.map((item, index) => <TaskItem key={index} item={item}/>)}
         </div>
      </div>
   ) 
} 