import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../App.css';
import Genre from '../componentes/Genre';
import Header from '../componentes/Header'
import Movie from '../componentes/Movie';
import Pagination from '../componentes/Pagination';
function Index() {

  const { search, page }=useParams();
  //Desestructuramos el useLocation
  const { state } = useLocation();
  //Si el state es null le asignamos un undefined. Si es true entonces le asignamos el id del genero.
  const genreId = state ? state.genreId : undefined;
  console.log(genreId);
  return (
    <div className="App">
      <div className='body body-container'>
        <div className='genre-container'>
          <Genre/>
        </div>
        <div className='movie-container'>
          <Movie search={search} genreId={genreId} pagination={true} page={page}/>
        </div>
      </div>
    </div>
  );
}

export default Index;
