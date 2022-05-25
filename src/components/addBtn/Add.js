import React from 'react';


export function Add (props) {
    return (
        <div className='navBar'>
        <i className="navBar--icon fal fa-books"></i>
        <input className='navBar__input' 
            placeholder='      
            What needs to be done?'
        />
        <button className='navBar__addBtn'>
        <i class=" navBar--icon-2 fal fa-plus-circle"></i>
        Add 
        </button>
        </div>
    )
}