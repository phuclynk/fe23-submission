import './TaskItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TaskItem (props){
   return(
      <div>
         <input type='checkbox' />
         <span>- {props.item}</span>
         <button>
            <FontAwesomeIcon icon={faTrashCan} />
         </button>
      </div>
   )
} 