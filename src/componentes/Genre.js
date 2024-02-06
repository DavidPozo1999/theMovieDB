import React from "react";
import {useEffect, useState} from 'react'
import { getGenres } from "../api/apiCalls";
import '../hojas_estilo/genre.css'
function Genre(){

    const [genres, setGenres]=useState([]);
    
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const data=await getGenres();
                setGenres(data.genres);
            }catch(error){
                console.log("error al cargar los datos");
            }
        }
        fetchData()},[])
    
    return(

        <ul className="genre-list">
            {genres.map((genre)=>(
                <li className="genre-item">{genre.name}</li>
            ))}
           
        </ul>
    )
}

export default Genre;