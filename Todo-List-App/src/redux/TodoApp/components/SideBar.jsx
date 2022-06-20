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

export default function SideBar() {
    const location = useLocation();


    return (
        <>
            {/* All the icons now are white */}
            <nav className="nav-menu active">
                <ul className="nav-menu-items">
                    {/* <li className="navbar-toggle">
                            <span className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </span>
                        </li> */}

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
            </nav>
        </>
    );
}
