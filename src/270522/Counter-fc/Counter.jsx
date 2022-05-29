import React, { useEffect, useState } from 'react';


function Counter() {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);

   // componentDidMount like
   // useEffect(() => {
   //    console.log('mounted');
   //    // componentWillUnmount
   //    return () => {

   //    }
   // }, [])

   //componentDidMount
   useEffect(() => {
      console.log('componentDidMount');

   }, [])
   useEffect(() => {
      console.log('update for count');

   }, [count])
   useEffect(() => {
      console.log('update for count 2');

   }, [count2])

   console.log('rending');
   return (
      <>
         <div className='count-container'>
            <div className='count-lader'>{count}</div>
            <div className='count-lader'>{count2}</div>
            <div className='action-container'>
               <div className="btn minus-btn" onClick={() => {
                  if (count2 === 0) {
                     return
                  }
                  setCount(count2 - 1)
               }}>-</div>
               <div className="btn reset-btn" onClick={() => {
                  setCount2(0)
               }}>Reset</div>
               <div className="btn plus-btn" onClick={() => {
                  setCount2(count2 + 1)
               }}>+</div>
            </div>
         </div>
      </>
   );
}

export default Counter;