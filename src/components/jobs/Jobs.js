import React from "react";

export function Jobs (props) {
    return (
        <div className="listJobs">
            <div className="listJobs__heading">
                {props.status}
            </div>
                <div className="listJobs__content">
                    <input className="listJobs__input"
                        type="checkbox"
                    />
                    <i className="fal fa-square listJobs--red listJobs--iconSquare"></i>
                        {props.job1}
                    <i className="fal fa-trash-alt listJobs--trash"></i>
                </div>
                <div className="listJobs__content">
                    <input className="listJobs__input"
                        type="checkbox"
                    />
                    <i className="fal fa-square listJobs--red listJobs--iconSquare"></i>
                        {props.job2} 
                    <i className="fal fa-trash-alt listJobs--trash"></i>
                </div>
                <div className="listJobs__content">
                    <input className="listJobs__input"
                        type="checkbox"
                    />
                    <i className="fal fa-check-square listJobs--iconSquare listJobs--check-2"></i>
                    <span className="listJobs--text">
                        {props.job3}
                    </span>
                    <i className="fal fa-trash-alt listJobs--trash"></i>
                </div>
                <div className="listJobs__content">
                    <input className="listJobs__input"
                        type="checkbox"
                    />
                    <i className="fal fa-square listJobs--red listJobs--iconSquare"></i>
                        {props.job4}
                    <i className="fal fa-trash-alt listJobs--trash"></i>
                </div>
        </div>
    )
}