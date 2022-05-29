// import Counter from './270522/Counter';
import { useEffect, useState } from 'react';
import Counter from './270522/Counter-fc/Counter';
import './App.css';
import Form from './270522/form/Form';
import { TaskItem } from './todo-list-app/task-item/TaskItem';
import React from 'react';

function App() {



  // const [payload, setPayload] = useState();

  // useEffect(() => {
  //   console.log(payload);
  // }, [])

  // const handleChangePayload = (payload) => {
  //   setPayload(payload)
  // }

  return (
    <div className="App">
      <TaskItem></TaskItem>
      {/* <Counter></Counter> */}
      {/* <Counter></Counter> */}
      {/* <Form onPayloadChange={handleChangePayload} ></Form> */}
    </div>
  );
}

export default App;
