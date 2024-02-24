import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import '../hojas_estilo/pagination.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
function Pagination({totalPages, currentPage, kindPage}){
    const [loadPages, setLoadPages]=useState([]);
    const location=useLocation();
    totalPages=totalPages>500 ? 500 : totalPages;

    const handlePagination= (totalPages, page)=>{
        
        if(page===undefined || page==1){
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

    const buildURL=(page)=>{
        if(kindPage!==undefined){ 
            return `/${kindPage}/page/${page}`
        }else{
            return `/page/${page}`
        }
    }

    const { state } = useLocation();
    //Si el state es null le asignamos un undefined. Si es true entonces le asignamos el id del genero.
    const genreId = state ? state.genreId : undefined;  
    console.log(genreId)
    return(
        <>
            <div className="pagination-container">
                <Link to={buildURL(1)} className="page-item-container">
                    <IoIosArrowBack className="arrow" />
                </Link>
                
                {loadPages.map((page=>(
                    <NavLink to={buildURL(page)} className={({isActive})=>isActive ? 'page-item-container page-item-color': 'page-item-container'}  state={{genreId: genreId}}>
                        <div>{page}</div>
                    </NavLink>
                )))}
                <Link to={buildURL(totalPages)} className="page-item-container">
                    <IoIosArrowForward className="arrow"/>
                </Link>
            </div>
        </>
    )
}

export default Pagination;