import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import '../hojas_estilo/searcher.css'
function Searcher(){
    //Creación hook useState para el valor del buscador. 
    const [searchValue, setSearchValue]=useState('');
    const navigate= useNavigate();

    //función que inserta en el useState el valor del buscador.
    const handleChange=(event)=>{
        setSearchValue(event.target.value)
    }

    //función que maneja el submit del form
    const handleSubmit=(event)=>{
        event.preventDefault();
        //Si la variable del buscador está vacio nos dirige al index, en caso contrario añade un parametro
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