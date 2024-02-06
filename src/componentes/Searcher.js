import React from "react";
import { FaSearch } from "react-icons/fa";
import '../hojas_estilo/searcher.css'
function Searcher(){
    return(
        
            <form className="searcher-form">
                <div className="searcher-icon-container">
                    <FaSearch className="searcher-icon"/>
                </div>
                <input type="text" placeholder="Buscar..." className="searcher"></input>
            </form>
    )
}

export default Searcher;