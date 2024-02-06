import React from "react";
import { getMovies } from "../api/apiCalls";
import { useEffect, useState } from "react";
import '../hojas_estilo/movie.css'
function Movie(){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMovies();
                setMovies(data.results);
        
            }catch (error) {
                console.log("error al cargar los datos")
            }
        };
    
        fetchData();
      }, getMovies()); // El
    console.log(movies)
        return(
            <>
                {movies.map((movie)=>(
                    <div className="movie-item">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </>
        )
}

export default Movie