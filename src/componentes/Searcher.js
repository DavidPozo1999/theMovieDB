import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import '../hojas_estilo/searcher.css'
function Searcher({setSearchValue}){
    

    const handleChange=(event)=>{
        setSearchValue(event.target.value)
    }
    return(
        
            <form className="searcher-form">
                <div className="searcher-icon-container">
                    <FaSearch className="searcher-icon"/>
                </div>
                <input type="text" placeholder="Buscar..." className="searcher"  onChange={handleChange}></input>           
            </form>
    )
}

export default Searcher;