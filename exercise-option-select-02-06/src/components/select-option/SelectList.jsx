import React from "react";
import { SelectItem } from "./SelectItem";

export function SelectList(props) {
  return (
    <div className="select-container">
      <h4>Select Option</h4>
      <ul className="select-list">
        {props.selectList.map((select) => (
          <SelectItem key={select.id} selectTitle={select.selectTitle} />
        ))}
      </ul>
    </div>
  );
}
