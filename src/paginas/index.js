import { useParams, useLocation } from 'react-router-dom';
import '../App.css';
import Genre from '../componentes/Genre';
import Movie from '../componentes/Movie';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Index({kindPage}) {
  //Recogida de parametros de la url
  const { search, page }=useParams();
  //Desestructuramos el useLocation para recoger el state
  const { state } = useLocation();
  const location=useLocation();
  //Si el state es null le asignamos un undefined. Si es true entonces le asignamos el id del genero.
  const genreId = state ? state.genreId : undefined;
  const usuario=state ? state.username: undefined;
  console.log(usuario)
  return (
    <div className="App">
      <Header />
      <div className='body body-container'>
        <div className='genre-container'>
          <Genre kindPage={kindPage}/>
        </div>
        <div className='movie-container'>
          <Movie 
            search={search} 
            genreId={genreId} 
            pagination={true} 
            page={page}
            kindPage={kindPage}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
