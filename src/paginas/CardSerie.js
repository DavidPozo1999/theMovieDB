import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDetails } from "../api/useEffect";
import { MdOutlineMovie } from "react-icons/md";
import SeasonList from "../componentes/SeasonList";
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function CardSerie(){
    //Creamos un useLocation
    const {state}= useLocation();
    const movie=state.movie;
    
    const urlDetails=`https://api.themoviedb.org/3/tv/${movie.id}?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2`;
    const details=useDetails(urlDetails)
    return (
        <>
         <Header />
            <div className="section1-container">
                <div className="backdrop-container">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                    <div className="shadow"></div>    
                </div>
            </div>
            <div className="section2-container">
            <div className="info-container-left">
                <div className="poster-container">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Imagen no encontrada" />
                </div>
                <div className="average-container">       
                </div>
            </div>
            <div className="info-container-right">
                <div className="title-container">
                    <h1 className="title-movie">{movie.name}</h1>
                    <h3 className="date-movie">Fecha: <span>{movie.first_air_date.substring(0,4)}</span></h3>
                    <h3>Géneros: {details.genres?.map((genre, index) => (
                        <span key={genre.id} className="genre-movie"><Link to={`/series/${genre.name}`} state={{genreId: genre.id}}>{genre.name}</Link>
                            {index !== details.genres.length - 1 && ' / '} 
                        </span>
                    ))}</h3>
                </div>
                <div className="episodes-container">
                    <div className="episodes-title-container container-title">
                        <MdOutlineMovie className="sinopsis-logo title-logo"/>
                        <h1 className="sinopsis-title text-title">Episodios</h1>
                        <h4>({details.number_of_episodes})</h4>
                    </div>
                    <SeasonList seasons={details.seasons} serieId={details.id} />
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default CardSerie;