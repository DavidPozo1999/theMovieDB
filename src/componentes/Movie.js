import React from "react";
import { useMovies } from "../api/useEffect.js";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination.js";
import '../hojas_estilo/movie.css';
function Movie({ search, genreId, pagination, page, kindPage }){
    const getUrl=()=>{
        //Creación endpoint
        let url=`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=es&page=${page ? page : 1}&sort_by=popularity.desc&api_key=915d3db1d56234a45bf89e71a4552ea2`;   
        //Comprobación de props. dependiendo de las props cambian las propiedades del endpoint
        if(genreId!==undefined && kindPage===undefined){
            url=`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=es&page=${page ? page : 1}&with_genres=${genreId}&sort_by=popularity.desc&api_key=915d3db1d56234a45bf89e71a4552ea2`;
        }else if(search!==undefined){
            url=`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=es&page=1&api_key=915d3db1d56234a45bf89e71a4552ea2`
        }else if(kindPage!==undefined){
            if(kindPage==="popular"){
                url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page ? page : 1}&with_genres=${genreId===undefined ?'':genreId}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=915d3db1d56234a45bf89e71a4552ea2`
            }else if(kindPage==="series"){
                url=`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es&page=${page ? page : 1}&sort_by=popularity.desc&with_genres=${genreId===undefined ?'': genreId}&api_key=915d3db1d56234a45bf89e71a4552ea2`
            }
        }
        return url;
    }
    const data=useMovies(getUrl());
    return(
            <>
                {data && data.results?.map((movie)=>(
                    <div className="movie-item" key={movie.id}>
<<<<<<< HEAD
                        <NavLink to={kindPage==='series'? `/serie/${movie.original_name}` :`/pelicula/${movie.title}`} state={{movie}}>
=======
                        <NavLink to={`/pelicula/${movie.title ? movie.title: movie.original_name}`} state={{movie}}>
>>>>>>> 2c1a3158405a94e66696dc15e473834cf18edc92
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Imagen no encontrada" />
                            <p>{movie.title ? movie.title : movie.original_name}</p>
                        </NavLink>
                    </div>
                ))}
                {pagination && !search && <Pagination totalPages={data.total_pages} currentPage={page} kindPage={kindPage}/>}
            </>
        )
}

export default Movie