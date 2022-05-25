import React from "react";
import './style.css'

export function Main(props) {
    return(
    <div className="list_task">
        <div className="list_header">
            {props.text1}
        </div>
        <div className="list_content">
            <input type="checkbox" className="list_checkbox"/>
            <i className="fal fa-square listJobs--red listJobs--iconSquare"></i>
            {props.text2}
            <i className="fal fa-trash-alt listJobs--trash"></i>
        </div>
        <div className="list_content">
            <input type="checkbox" className="list_checkbox"/>
            <i className="fal fa-square listJobs--red listJobs--iconSquare"></i>
            {props.text3}
            <i className="fal fa-trash-alt listJobs--trash"></i>
        </div>
        <div className="list_content">
            <input type="checkbox" className="list_checkbox"/>
            <i className="fal fa-check-square listJobs--iconSquare listJobs--check-2"></i>
                <span className="list_text">
                    {props.text4}
                </span>
            <i className="fal fa-trash-alt listJobs--trash"></i>
        </div>
        <div className="list_content">
            <input type="checkbox" className="list_checkbox"/>
            <i className="fal fa-square listJobs--red listJobs--iconSquare"></i>
            {props.text5}
            <i className="fal fa-trash-alt listJobs--trash"></i>
        </div>
        
    </div>
    )
}