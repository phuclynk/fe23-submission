import React, { useContext } from "react";
import { SelectListContext } from "../App";
import { HeaderWrapper } from "./header-wrapper/HeaderWrapper";
import { OptionList } from "./option-list/OptionList";
import { SelectList } from "./select-option/SelectList";
import "./styling.css";

export function CustomOption() {
  const { selectList, updateSelectList } = useContext(SelectListContext);

  const handleGetOption = (option, optionId) => {
    const newSelectList = [
      ...selectList,
      {
        id: option.id,
        selectTitle: option.optionTitle,
      },
    ];
    const optionItem = selectList.find((item) => item.id === optionId);
    if (optionItem) {
      return;
    } else {
      updateSelectList(newSelectList);
    }
  };
  console.log(selectList);

  return (
    <div className="container-option">
      <HeaderWrapper />
      <OptionList onHandleGetOption={handleGetOption} />
      <SelectList selectList={selectList} />
    </div>
  );
}
