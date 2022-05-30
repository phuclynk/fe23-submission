import React, { useEffect, useState } from "react";

function Form(props) {
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    const nameField = "name";
    const genderField = "gender";
    const [payLoad, setPayload] = useState(
         {
             [nameField] : '',
             [genderField] : 'M'
         }
    )
    useEffect(() => {
        props.onPayloadChange(payLoad)
    }, [payLoad]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(gender);
        if(payLoad[nameField].length <= 4) {
            alert("Invalid Name")
            return
        }
        console.log(payLoad)
    }
    const handleChangeName = (e) => {
        setPayload({
            ...payLoad,
            [nameField]: e.target.value
        })
    }
    const handleChangeGender = (e) => {
        setPayload({
            ...payLoad,
            [genderField]: e.target.value
        })
    }
    return ( 
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="">Name:</label> <br />
        //     <input value={name} onChange={(e) => {
        //         setName(e.target.value)
        //     }}/> <br />
        //     <label htmlFor="">Gender:</label> 
        //     <select value={gender} onChange={(e) => {
        //         setGender(e.target.value)
        //     }}>
        //         <option value="M">Male</option>
        //         <option value="F">Female</option>
        //         <option value="O">Other</option>
        //     </select> <br />

        //     <input type="submit" />
        // </form>
         <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label> <br />
            <input value={payLoad[nameField]} onChange={handleChangeName}/> <br />
            <label htmlFor="">Gender:</label> 
            <select value={payLoad[genderField]} onChange={handleChangeGender}>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
            </select> <br />

            <input type="submit" />
        </form>
     );
}


export default Form;