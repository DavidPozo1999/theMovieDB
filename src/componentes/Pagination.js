import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import '../hojas_estilo/pagination.css'
import { useEffect, useState } from "react";
function Pagination({totalPages, currentPage}){
    const [loadPages, setLoadPages]=useState([]);
    const location=window.location.href;
    const handlePagination= (totalPages, page)=>{
        if(page===undefined){
            setLoadPages([1,2,3])
        }else if(page===totalPages){
            setLoadPages([parseInt(currentPage)-1, currentPage])
        }else{
            setLoadPages([parseInt(currentPage)-1, currentPage, parseInt(currentPage)+1])
        }
    }
    useEffect(()=>{
        handlePagination(totalPages, currentPage);
    },[currentPage])
    console.log(location);
    
    return(
        <>
            <div className="pagination-container">
                {loadPages.map((page=>(
                    <NavLink to={page!==1 ? `/page/${page}`: '/'} className="page-item-container">
                        <div className={({isActive})=>isActive ? `page-item-color` : ''}>{page}</div>
                    </NavLink>
                )))}
            </div>
        </>
    )
}

export default Pagination;