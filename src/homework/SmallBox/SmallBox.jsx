import './SmallBox.css'

export default function SmallBox (props){
   let {image, type, title, detail, author} = props.content;
   return(
      <div className='small-box'>
         <div className='small-box__image'>
            <img src={image}/>
         </div>

         <div className='small-box__content'>
            <div className='type' style={{backgroundColor: type.color}}>{type.name}</div>
            <div className='title'>{title}</div>
            <div className='detail'>{detail}</div>
         </div>

         <div className='small-box__author'>
            <div className='image'>
               <img src={author.image} alt="author's avatar"/>
            </div>
            <p className='author-name'>{author.name}</p>
            <p className='author-time'>{author.time}</p>
         </div>
      </div>
   )
}