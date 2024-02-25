import React from "react";
import { useDetails } from "../api/useEffect";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import '../hojas_estilo/episodeList.css'

function EpisodeList({serieId, seasonNumber}){
    const { state }= useLocation();
    const url=`https://api.themoviedb.org/3/tv/${state.movie.id}/season/${seasonNumber}?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2`;
    const episodes=useDetails(url);
    
    //función que maneja que una imagen no cargue
    const handleImage=(event)=>{
        event.target.src=`https://image.tmdb.org/t/p/w500/${state.movie.poster_path}`;
    }
    console.log(state)
    return(
        <>
        <div className="episode-list-container">
            {episodes.episodes && episodes.episodes.slice(0,10).map((episode)=>(
                <div className="episode-list-item" key={episode.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`} onError={handleImage} alt="Imagen no encontrada" />
                    <div className="episode-list-info"> 
                        <p className="episode-title">T{episode.season_number}.E{episode.episode_number} {episode.name}<span className="air-date">{episode.air_date}</span> </p>
                        <p className="episode-sinopsis">{episode.overview.length===0 ? 'no hay sinopsis disponible' : episode.overview.substring(0,300)}...</p>
                        <div className="episode-average-container"> 
                            <FaStar className="episode-star-icon" style={{color:'red'}}/>
                            <p className="episode-average">{episode.vote_average}</p>
                        </div>
                    </div>
                </div>

            ))}
        </div>      
        </>
    )
}

export default EpisodeList