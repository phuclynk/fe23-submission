import BigBox from "./BigBox/BigBox";
import SmallBox from './SmallBox/SmallBox';
import './Page.css'

export default function Page (){
   return(
      <>
         <BigBox 
            content={{
               logo: 'logo',
               title: 'A Passion like no other',
               detail: 'A Passion like no other. A Passion like no other. A Passion like no other. A Passion like no other. A Passion like no other',
               image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            }}
         />
         <div className="item-list">
            <SmallBox 
               content={{
                  image: 'https://images.pexels.com/photos/7277023/pexels-photo-7277023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                  type: {
                     name: 'TECHNOLOGY',
                     color: '#5050ff'
                  },
                  title: 'Why is the Tesla Cybertruck design the way it is?',
                  detail:"An exploration into the truck's polarising design",
                  author: {
                     image: "",
                     name: 'July Dec',
                     time: '2h ago'
                  }
               }}
            />
            <SmallBox 
               content={{
                  image: 'https://images.pexels.com/photos/7277023/pexels-photo-7277023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                  type: {
                     name: 'TECHNOLOGY',
                     color: '#5050ff'
                  },
                  title: 'Why is the Tesla Cybertruck design the way it is?',
                  detail:"An exploration into the truck's polarising design",
                  author: {
                     image: "",
                     name: 'July Dec',
                     time: '2h ago'
                  }
               }}
            />
            <SmallBox 
               content={{
                  image: 'https://images.pexels.com/photos/7277023/pexels-photo-7277023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                  type: {
                     name: 'TECHNOLOGY',
                     color: '#5050ff'
                  },
                  title: 'Why is the Tesla Cybertruck design the way it is?',
                  detail:"An exploration into the truck's polarising design",
                  author: {
                     image: "",
                     name: 'July Dec',
                     time: '2h ago'
                  }
               }}
            />
         </div>
      </>
   )
}