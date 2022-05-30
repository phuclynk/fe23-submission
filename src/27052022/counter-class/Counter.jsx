import React from "react";
import { Component } from "react";
import "./style.css"
import { FaRedoAlt } from 'react-icons/fa';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("Mounted")
    }
    componentDidUpdate(props) {
        console.log("updated")
    }
    componentWillUnmount() {
    }

    render() { 
        console.log("rendering")
        return (  
            <div className="counter-container">
                <div className="count-label">{this.state.count}</div>
                <div className="action-container">
                    <button className="btn minus-btn"
                    onClick={() => {
                        if(this.state.count === 0) {
                            return
                        }
                        this.setState({ count: this.state.count - 1})
                    }}
                    >-</button>
                    <button className="btn reset-btn"
                    onClick={() => {
                        this.setState({ count: 0})
                    }}
                    ><FaRedoAlt/></button>
                    <button className="btn plus-btn"
                    onClick={() => {
                        this.setState({ count: this.state.count + 1})
                    }}
                    >+</button>
                </div>
            </div>
        );
    }
}
 
export default Counter;