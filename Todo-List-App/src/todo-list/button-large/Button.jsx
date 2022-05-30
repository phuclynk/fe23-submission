import React from "react";
import "./style.css";
import { PlusCircleOutlined } from "@ant-design/icons";

export function ButtonLarge(props) {
  const iconStyle = {
    marginRight: "10px",
  };

  const addNewTask = () => {
    props.onAddNewTask();
  }

  return (
    <button className="button-large" onClick={addNewTask}>
      <PlusCircleOutlined style={iconStyle} />
      {props.text}
    </button>
  );
}
