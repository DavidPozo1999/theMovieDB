import React from "react";
import { useLocation } from "react-router-dom";
import '../hojas_estilo/cardMovie.css'
import { useDetails, usePersonal, useTrailer } from "../api/useEffect";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineVideocam } from "react-icons/md";
import imagenNotFound from '../imagenes/imagen-no-encontrada.jpg'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function CardMovie(){
    //Recogemos los datos de la pelicula con useLocation
    const { state }= useLocation();

    //guardamos los datos en una variable
    const movie=state.movie;
    //construimos variables con endpoints de toda la información que necesitamos
    const urlDetails=`https://api.themoviedb.org/3/movie/${movie.id}?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2`;
    const urlPersonal=`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2`;
    const urlTrailer=`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2`;
    const details=useDetails(urlDetails);
    const personal=usePersonal(urlPersonal);
    const trailer=useTrailer(urlTrailer);
    
    //función que maneja que una imagen no cargue
    const handleImageActor=(event)=>{
        event.target.src=imagenNotFound;
    }
    return(
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
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                </div>
                <div className="average-container">
                    <p className="average-movie">{movie.vote_average.toString().substring(0,3)}</p>
                </div>
            </div>
            <div className="info-container-right">
                <div className="title-container">
                    <h1 className="title-movie">{movie.title}</h1>
                    <h3 className="date-movie">Fecha: <span>{movie.release_date.substring(0,4)}</span></h3>
                    <h3>Géneros: {details.genres?.map((genre, index) => (
                        <span key={genre.id} className="genre-movie"><Link to={`/peliculas/${genre.name}`} state={{genreId: genre.id}}>{genre.name}</Link>
                            {index !== details.genres.length - 1 && ' / '} 
                        </span>
                    ))}</h3>
                </div>
                <div className="sinopsis-container">
                    <div className="sinopsis-title-container container-title">
                        <BiCameraMovie className="sinopsis-logo title-logo"/>
                        <h1 className="sinopsis-title text-title">Sinopsis</h1>
                    </div>
                    <p className="sinopsis-body">{movie.overview}</p>
                </div>
                <div className="reparto-container">
                    <div className="reparto-title-container container-title">
                        <IoPersonSharp className="reparto-logo title-logo" />
                        <h1 className="reparto-title text-title">Reparto principal</h1>
                    </div>
                    <div className="reparto-body">
                    <ul className="actor-list">
                        {personal.cast?.slice(0,4).map((person)=>(
                            <li key={person.id}>
                                <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} className="actor-image" 
                                    onError={handleImageActor} />
                                <div className="actor-name-container">
                                    <p className="actor-name">{person.original_name}</p>
                                    <p className="character-name">{person.character}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="actor-list">
                        {personal.cast?.slice(4,8).map((person)=>(
                            <li key={person.id}>
                                <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} className="actor-image"
                                    onError={handleImageActor} />
                                <div className="actor-name-container">
                                    <p className="actor-name">{person.original_name}</p>
                                    <p className="character-name">{person.character}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="trailer-container">
                    <div className="trailer-title-container container-title">
                            <MdOutlineVideocam className="trailer-logo title-logo"/>
                            <h1 className="trailer-title text-title">Trailer</h1>
                    </div>
                
                {trailer && <iframe
                    width="100%"
                    height="375px"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title="Trailer"
                    allowFullScreen />}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default CardMovie;