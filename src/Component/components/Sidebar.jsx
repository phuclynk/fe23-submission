import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
export default function SideBar() {
   return (
      <>
         <div className="sidebar-container">
            {SidebarData.map((item, index) => {
               return (
                  <Link to={item.path} key={index}>
                     <div className="sidebar-item">{item.title}</div>
                  </Link>
               );
            })}
         </div>
      </>
   );
}
