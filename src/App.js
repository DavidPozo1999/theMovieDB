import './App.css';
import Header from './componentes/Header';
import Index from './paginas/index';
import CardMovie from './paginas/CardMovie';
import CardSerie from './paginas/CardSerie';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Footer from './componentes/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/popular' element={<Index kindPage={'popular'} />}></Route>
          <Route path='/popular/page/:page' element={<Index kindPage={'popular'} />}></Route>
          <Route path='/popular/:genre' element={<Index kindPage={'popular'} />}></Route>
          <Route path='/series' element={<Index kindPage={'series'} />}></Route>
          <Route path='/peliculas/:genre' element={<Index />}></Route>
          <Route path='/series/:genre' element={<Index kindPage={'series'} />}></Route>
          <Route path='/series/page/:page' element={<Index kindPage={'series'} />}></Route>
          <Route path='/series/:genre/page/:page' element={<Index kindPage={'series'} />}></Route>
          <Route path='/search/:search' element={<Index />}></Route>
          <Route path='/pelicula/:movie' element={<CardMovie />}></Route>
          <Route path='/serie/:movie' element={<CardSerie />}></Route>
          <Route exact path='/peliculas/:genre/page/:page' element={<Index />}></Route>
          <Route path='/page/:page' element={<Index />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
