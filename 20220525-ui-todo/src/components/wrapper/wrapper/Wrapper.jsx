import React from "react";
import { WrapperLeft } from "../wrapper-left/WrapperLeft";
import { WrapperRight } from "../wrapper-right/WrapperRight";

export function Wrapper() {
  return (
    <div className="wrapper">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}
