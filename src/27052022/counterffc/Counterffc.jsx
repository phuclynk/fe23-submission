import React, { useState, useEffect } from "react";
import { FaRedoAlt } from 'react-icons/fa';

export function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // componentDidMount like
    useEffect(() => {
        console.log("componentDidMount")
        // componentWillUnmount
        // return () => {}
    }, [])
    useEffect(() => {
        console.log("Mounted")
    }, [count])
    useEffect(() => {
        console.log("Mounted2")
    }, [count2])
    console.log("rendering")
    return ( 
        <div className="counter-container">
                <div className="count-label">{count}</div>
                <div className="count-label">{count2}</div>
                <div className="action-container">
                    <button className="btn minus-btn"
                    onClick={() => {
                        if(count === 0) {
                            return
                        }
                        setCount(count - 1)
                    }}
                    >-</button>
                    <button className="btn reset-btn"
                    onClick={() => {
                        setCount(0)
                    }}
                    ><FaRedoAlt/></button>
                    <button className="btn plus-btn"
                    onClick={() => {
                        setCount(count + 1)
                    }}
                    >+</button>
                    <button className="btn plus-btn"
                    onClick={() => {
                        setCount2(count2 + 1)
                    }}
                    >+</button>
                    
                </div>
            </div>
     );
}

