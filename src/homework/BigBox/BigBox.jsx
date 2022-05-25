import './BigBox.css'

export default function BigBox(props){
   let {logo, title, detail, image} = props.content;
   return(
      <div className='big-box'>
         <div className='big-box__content'>
            <div className='big-box__content__logo'>
               {/* <img src={logo}/> */}
            </div>
            <div className='big-box__content__description'>
               <div className='title'>{title}</div>
               <div className='detail'>{detail}</div>
               <button>More {'>'}</button>
            </div>
         </div>

         <div className='big-box__image'>
            <img src={image}/>
         </div>
      </div>
   )
}