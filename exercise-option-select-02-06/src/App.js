import React, { useState } from "react";
import "./App.css";
import { CustomOption } from "./components/CustomOption";

export const SelectListContext = React.createContext([]);

function App() {
  const [selectList, setSelectList] = useState([]);

  return (
    <SelectListContext.Provider
      value={{
        selectList: selectList,
        updateSelectList: setSelectList,
      }}
    >
      <div className="App">
        <CustomOption />
      </div>
    </SelectListContext.Provider>
  );
}

export default App;
