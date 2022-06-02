import React from "react";

export function OptionItem(props) {
  return (
    <div
      className="option-item"
      onClick={() => props.onGetOption(props, props.id)}
    >
      <div className="option-title">{props.optionTitle}</div>
      <img src={props.optionImg} alt="" className="option-image" />
    </div>
  );
}
