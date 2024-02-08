import { useState } from 'react';
import './App.css';
import Genre from './componentes/Genre';
import Header from './componentes/Header'
import Movie from './componentes/Movie';
function App() {
  const [idGenre, setIdGenre]=useState('');
  const [searchValue, setSearchValue] = useState('');

  
  const getIdGenre=(datos)=>{
    setIdGenre(datos)
  }
  const getSearchValue=(datos)=>{
    setSearchValue(datos)
  }
  return (
    <div className="App">
      <Header setSearchValue={getSearchValue}/>

      <div className='body body-container'>
        <div className='genre-container'>
          <Genre idGenre={getIdGenre} />
        </div>
        <div className='movie-container'>
          <Movie idGenre={idGenre} searchValue={searchValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
