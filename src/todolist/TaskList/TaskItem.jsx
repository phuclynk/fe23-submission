import './TaskItem.css'

export default function TaskItem (props){
   let getCheck = (event)=>{
      props.updateTask(props.num, true)
   }

   let handleDeleteTask = ()=>{
      props.deleteTask(props.num)
   }


   return(
      <div>
         <i onClick={getCheck} title='Check done' className="check fa-solid fa-note-sticky"></i>
         <span data-done={props.done} title={props.content}>{props.content}</span>
         <button onClick={handleDeleteTask}>
            <i className="delete fa-solid fa-trash-can"></i>
         </button>
      </div>
   )
}  