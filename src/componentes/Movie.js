import React from "react";
import { getMovies, getMoviesByGenre } from "../api/apiCalls";
import { useEffect, useState } from "react";
import '../hojas_estilo/movie.css'
function Movie(props){
    //Creamos un useState para añadir las peliculas
    const [movies, setMovies] = useState([]);
    
    //Creamos un useEffect para añadir las peliculas al useState. Haremos que ejecute la llamada al iniciar la aplicación.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMovies(props.searchValue);
                setMovies(data.results);
        
            }catch (error) {
                console.log("error al cargar los datos")
            }
        };
    
        fetchData();
      }, []); // El
      
      //Creamos otro useEffect para añadir peliculas cuando pinche algún enlace de los generos.
      //Haremos que se ejecute cada vez que la propiedad del genero cambie
      useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMoviesByGenre(props.idGenre);
                setMovies(data.results);
        
            }catch (error) {
                console.log("error al cargar los datos")
            }
        };
    
        fetchData();
    }, [props.idGenre]);
    
        return(
            <>
                {movies.map((movie)=>(
                    <div className="movie-item" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <p>{movie.title}</p>
                        <p>{props.searchValue}</p>
                    </div>
                ))}
            </>
        )
}

export default Movie