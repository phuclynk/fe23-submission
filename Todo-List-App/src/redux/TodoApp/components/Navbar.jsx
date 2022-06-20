import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
// import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [searchValue, setSearchValue] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();


    const showSidebar = () => setSidebar(!sidebar);
    const gotoAddNewTask = () => {
        navigate(`/add-new-task`)
    };
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    const gotoSearch = () => {
        if (searchValue !== null) {
            navigate(`/${searchValue}`)
        }
    }

    return (
        <>
            <IconContext.Provider value={{ color: "#FFF" }}>
                {/* All the icons now are white */}
                <div className="navbar">
                    <button className="create-new-task-btn" onClick={gotoAddNewTask}>
                        Create New Task
                    </button>
                    <div>
                        <input type="text" className="input-search" placeholder="Type something to search" onChange={handleSearchChange} />
                        <button className="search-btn" onClick={gotoSearch}>
                            Search
                        </button>
                    </div>
                </div>
                {/* <nav className="nav-menu active">
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav> */}
            </IconContext.Provider>
        </>
    );
}
