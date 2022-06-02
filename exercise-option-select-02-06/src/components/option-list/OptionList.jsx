import React from "react";
import { dataOption } from "../DataOption";
import { OptionItem } from "./OptionItem";
export function OptionList(props) {
  return (
    <div>
      <div className="option-list-title">
        <h2>Build Your Custom Salad</h2>
      </div>
      <div className="option-list">
        {dataOption.map((option) => (
          <OptionItem
            onGetOption={props.onHandleGetOption}
            key={option.id}
            id={option.id}
            optionTitle={option.optionTitle}
            optionImg={option.optionImg}
          />
        ))}
      </div>
    </div>
  );
}
