import React from "react";
import "./style.css";
import { TagsOutlined } from "@ant-design/icons";
export function InputLarge(props) {
  return (
    <div className="input-icons">
      <TagsOutlined className="icon-left" />
      <input
        className="input-large"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
