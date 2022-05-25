import React from "react";

export function WrapperLeft() {
  return (
    <div className="wrapper-left">
      <i className="wrapper-logo">Stories</i>
      <div className="wrapper-content">
        <div className="wrapper-content-center">
          <h5>LIFE</h5>
          <h1>A passion like no other</h1>
          <p>
            Pellentesque habitant morbl tristique senectus et netus et malesuada
            games turpis vestibulum tortor wuam, frugiat vitae, ultricies.
          </p>
          <button className="wrapper-button">
            More <i class="fa-solid fa-angle-right"></i>
          </button>
          <div className="wrapper-pages">
            <small>01</small>
            <small className="wrapper-page">02</small>
            <small>03</small>
            <small>04</small>
          </div>
        </div>
      </div>
    </div>
  );
}
