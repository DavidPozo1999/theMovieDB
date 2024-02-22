import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import '../hojas_estilo/pagination.css'
import { useEffect, useState } from "react";
function Pagination({totalPages, currentPage}){
    const [loadPages, setLoadPages]=useState([]);
    const location=useLocation();
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
    
    const buildURL=()=>{
        const isInPeliculas=location.pathname.includes("/peliculas");
        if(isInPeliculas){
            return location.pathname
        }
        return '';
    }
    const { state } = useLocation();
    //Si el state es null le asignamos un undefined. Si es true entonces le asignamos el id del genero.
    const genreId = state ? state.genreId : undefined;  

    return(
        <>
            <div className="pagination-container">
                {loadPages.map((page=>(
                    <NavLink to={page!==1 ? `${buildURL()}/page/${page}`: '/'} className="page-item-container" state={{genreId: genreId}}>
                        <div className={({isActive})=>isActive ? `page-item-color` : ''}>{page}</div>
                    </NavLink>
                )))}
            </div>
        </>
    )
}

export default Pagination;