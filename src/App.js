import './App.css';
import Header from './componentes/Header';
import Index from './paginas/index';
import CardMovie from './paginas/CardMovie';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/peliculas/:genre' element={<Index />}></Route>
          <Route path='/search/:search' element={<Index />}></Route>
          <Route path='/pelicula/:movie' element={<CardMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
