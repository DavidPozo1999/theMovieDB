import React from "react";
import { useMovies } from "../api/useEffect.js";
import { NavLink } from "react-router-dom";
import '../hojas_estilo/movie.css';
function Movie({ search, genreId }){
    const getUrl=()=>{
        let url='https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=es&page=1&sort_by=popularity.desc&api_key=915d3db1d56234a45bf89e71a4552ea2';
        if(genreId!==undefined){
            url=`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=es&page=1&with_genres=${genreId}&sort_by=popularity.desc&api_key=915d3db1d56234a45bf89e71a4552ea2`;
        }else if(search!==undefined){
            url=`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=es&page=1&api_key=915d3db1d56234a45bf89e71a4552ea2`
        }
        return url;
    }
    const data=useMovies(getUrl());
        return(
            <>
                {data?.map((movie)=>(
                    <div className="movie-item" key={movie.id}>
                        <NavLink to={`/pelicula/${movie.title}`} state={{movie}}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Imagen no encontrada" />
                            <p>{movie.title}</p>
                        </NavLink>
                    </div>
                ))}
            </>
        )
}

export default Movie