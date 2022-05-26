import React from "react";
// import './Letter.css'
export function Letter(props){
    // const letterStyle = {
    //         color: 'white',
    //         backgroundColor: 'green',
    //         display: 'inline-block',
    //         padding: '30px',
    //         borderRadius: '20px',
    //         boxShadow:  '5px 10px #888888'
    //}
    return <div className="letter">{props.children}</div>
}