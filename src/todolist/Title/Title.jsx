import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './Title.css'


export default function Title (props){
   return(
      <div className='container__title'>
         <input placeholder={props.placeholder}/>
         <div className='container__title__icon'>
            <FontAwesomeIcon icon={faTags} />
         </div>
         <button>
            <FontAwesomeIcon icon={faCirclePlus} />
            <span> Add</span>
         </button>
      </div>
   )
}  