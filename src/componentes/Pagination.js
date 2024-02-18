import React from "react";
import { NavLink } from "react-router-dom";
import '../hojas_estilo/pagination.css'
function Pagination(){
    return(
        <>
            <div className="pagination-container">
                <div className="page-item-container">
                    <NavLink to={"page/2"} className="page-item">1</NavLink>
                </div>
            </div>
        </>
    )
}

export default Pagination;