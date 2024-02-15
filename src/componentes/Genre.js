import React from "react";
import { useGenres } from "../api/useEffect";
import {NavLink} from 'react-router-dom';
import '../hojas_estilo/genre.css'
function Genre(){
    const url='https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2';
    const data=useGenres(url);
    return(
        <ul className="genre-list">
            {data?.map((genre)=>(
                <NavLink to={`/peliculas/${genre.name}`} state={{genreId: genre.id}} className={({isActive})=>(isActive ? 'active' : null)} > <li className="genre-item" key={genre.id}>{genre.name}</li></NavLink>
            ))}          
        </ul>
    )
}

export default Genre;