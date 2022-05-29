import React from "react";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.cardImg} className="card-image" alt=""></img>
      <div className="card-content">
        <div className="card-top">
          <button className="card-label">{props.cardLabel}</button>
          <h3 className="card-title">{props.title}</h3>
          <p className="card-sub-title"> {props.subTitle}</p>
        </div>
        <div className="card-bottom">
          <div className="card-user">
            <img src={props.useImg} className="card-user-avatar" alt=""></img>
            <div className="card-user-info">
              <div className="card-user">
                <h4 className="card-user-name">{props.userName}</h4>
              </div>
              <div className="card-user-time">{props.userTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
