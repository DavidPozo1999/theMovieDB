import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import '../hojas_estilo/seasonList.css'
import EpisodeList from "./EpisodeList";
function SeasonList({seasons, serieId}){
    const [firstSeason, setFirstSeason]=useState(0);
    const [lastSeason, setLastSeason]=useState(5);
    const [seasonSelected, setSeasonSelected]= useState(1);
    

    const getNextSeason=()=>{
        
        if(lastSeason<seasons.length){
            //comprobamos el estado de la ultima posición. Si al sumarle 5 sobrepasa la cantidad de temporadas disponibles
            //entonces solo le añadimos las temporadas restantes, en caso contrario le sumamos 5
            if(lastSeason+5> seasons.length){
                setLastSeason(lastSeason=>lastSeason+(seasons.length-lastSeason));
                //sumamos 5 al estado de la primera posición
                setFirstSeason(firstSeason=>firstSeason+(seasons.length-lastSeason));
            }else{
                 //sumamos 5 al estado de la primera posición
                setFirstSeason(firstSeason=>firstSeason+5);
                setLastSeason(lastSeason=>lastSeason+5)
            }
        }
    }
    const getPrevSeason=()=>{
        if(firstSeason>0){

            if(firstSeason-5< 0){
                setLastSeason(lastSeason=>lastSeason-firstSeason);
                setFirstSeason(firstSeason=>firstSeason-firstSeason)
            }else{
                setFirstSeason(firstSeason=>firstSeason-5)
                setLastSeason(lastSeason=>lastSeason-5);
            }
        }
    }

    return (
        <>
            <div className="season-list-container">
                <IoIosArrowBack  className="arrow-prev" onClick={getPrevSeason}/>
                <ul>
                    {seasons && seasons.slice(firstSeason, lastSeason).map((season)=>(
                        <li key={season.id} className="season-item" onClick={()=>setSeasonSelected(season.season_number)}>{season.season_number}</li>
                    ))}
                </ul>
                <IoIosArrowForward className="arrow-next" onClick={getNextSeason}/>
            </div>
            <EpisodeList serieId={serieId} seasonNumber={seasonSelected} />
        </>
    );
}

export default SeasonList