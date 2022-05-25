import React from "react";
import "./style.css";
import { PlusCircleOutlined } from "@ant-design/icons";

export function ButtonLarge(props) {
  const iconStyle = {
    marginRight: "10px",
  };
  return (
    <button className="button-large">
      <PlusCircleOutlined style={iconStyle} />
      {props.text}
    </button>
  );
}
