import React, { useState } from "react";
import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
   const [searchValue, setSearchValue] = useState("");
   const navigate = useNavigate();

   const gotoAddNewTask = () => {
      navigate(`/add-new-task`);
   };
   const handleSearchChange = (e) => {
      setSearchValue(e.target.value);
   };
   const gotoSearch = () => {
      if (searchValue !== null) {
         navigate(`/${searchValue}`);
         setSearchValue("");
      }
   };
   return (
      <>
         <div className="nav-container">
            <Button className="btn-cre" onClick={gotoAddNewTask}>
               Create New Task
            </Button>
            <Form.Control
               type="text"
               value={searchValue}
               onChange={handleSearchChange}
               placeholder="Write Something here"
               className="form-input"
            />
            <Button onClick={gotoSearch} className="btn-sr">
               Search
            </Button>
         </div>
      </>
   );
}
