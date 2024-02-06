import './App.css';
import Genre from './componentes/Genre';
import Header from './componentes/Header'
import Movie from './componentes/Movie';
function App() {
  return (
    <div className="App">
      <Header />

      <div className='body body-container'>
        <div className='genre-container'>
          <Genre />
        </div>
        <div className='movie-container'>
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default App;
