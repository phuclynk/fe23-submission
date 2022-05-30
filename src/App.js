
// import { ColorCard } from './25032022/complex-component/ColorCard';
// import { Lesson } from "./25032022/lesson/Lesson";
import { TodoApp } from './TodoApp/TodoApp';
// import { Counter } from '27052022/counterffc/Counterffc';
// import Form from '27052022/form/form';
import React, { useState, useEffect } from 'react';
import './App.css';



function App() {
  // const [payload, setPayload] = useState();
  // useEffect(() => {
  //   console.log(payload);
  // })
  // const handleChangePayLoad = (payload) => {
  //   setPayload(payload);
  // }

  
  return (
    <div className="App">
      {/* <Lesson />
      {/* <ColorCard/> */}
      <TodoApp />
      {/* <Counter /> */}
      {/* <Form onPayloadChange={handleChangePayLoad}/> */}
    </div>
  );
}

export default App;
