import React from "react";

export function WrapperRight() {
  return (
    <div className="wrapper-right">
      <i class="fa-solid fa-equals"></i>
      <img
        className="wrapper-img"
        src={require("./img/wrapper-right.jpg")}
        alt=""
      />
    </div>
  );
}
