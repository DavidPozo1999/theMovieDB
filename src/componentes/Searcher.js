import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import '../hojas_estilo/searcher.css'
function Searcher(){
    const [searchValue, setSearchValue]=useState('');
    const navigate= useNavigate();
    const handleChange=(event)=>{
        setSearchValue(event.target.value)
        console.log(searchValue)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();

        if(searchValue.length===0){
            navigate('/');
        }else{
            navigate(`/search/${searchValue}`)
        }
    }
    return(
        
            <form className="searcher-form" method="POST" onSubmit={handleSubmit}>
                <div className="searcher-icon-container">
                    <FaSearch className="searcher-icon"/>
                </div>
                <input type="text" placeholder="Buscar..." className="searcher"  onChange={handleChange}></input>          
            </form>
    )
}

export default Searcher;