import React from "react";
import { useLocation } from "react-router-dom";
import '../hojas_estilo/cardMovie.css'
import { useDetails } from "../api/useEffect";
import { Link } from "react-router-dom";
function CardMovie(){
    //Recogemos los datos de la pelicula con useLocation
    const { state }= useLocation();

    //guardamos los datos en una variable
    const movie=state.movie;
    
    const urlDetails=`https://api.themoviedb.org/3/movie/${movie.id}?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2`
    const details=useDetails(urlDetails);
    console.log(details.genres)
    return(
        <>
        <div className="section1-container">
            <div className="backdrop-container">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                <div className="shadow"></div>    
            </div>
        </div>
        <div className="section2-container">
            <div className="info-container-left">
                <div className="poster-container">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                </div>
                <div className="average-container">
                    <p className="average-movie">{movie.vote_average}</p>
                </div>
            </div>
            <div className="info-container-right">
                <div className="title-container">
                    <h1 className="title-movie">{movie.title}</h1>
                    <h3 className="date-movie">Fecha: {movie.release_date.substring(0,4)}</h3>
                    <h3>Géneros: {details.genres?.map((genre, index) => (
                        <span key={genre.id}><Link to={`/peliculas/${genre.name}`} state={{genreId: genre.id}}>{genre.name}</Link>
                            {index !== details.genres.length - 1 && ' / '} 
                        </span>
                    ))}</h3>
                </div>
            </div>
        </div>

        </>
    );
}

export default CardMovie;