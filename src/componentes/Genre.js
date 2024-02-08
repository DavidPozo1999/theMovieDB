import React from "react";
import {useEffect, useState} from 'react'
import { getGenres } from "../api/apiCalls";
import '../hojas_estilo/genre.css'
function Genre({ idGenre }){

    //Creamos un useState donde añadiremos los generos
    const [genres, setGenres]=useState([]);

    //Creamos un useEffect que realice la llamada y recoja los datos yse ejecute al iniciar la aplicación. 
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
    
    const getIdGenre= (id)=>{
        idGenre(id)
    }
    return(

        <ul className="genre-list">
            {genres.map((genre)=>(
                <li className="genre-item" key={genre.id}><p onClick={()=>getIdGenre(genre.id)}>{genre.name}</p></li>
            ))}          
        </ul>
    )
}

export default Genre;