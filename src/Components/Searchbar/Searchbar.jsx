import React from 'react';
import './searchbar.css'

function Searchbar({searchField,placeHolder,onHandleChange}) {
    return (
        
        <input className="search" type="search" value={searchField} placeholder={placeHolder} onChange={onHandleChange}/> 
        
    )
}

export default Searchbar
