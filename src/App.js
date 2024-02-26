import './App.css';
import Header from './componentes/Header';
import Index from './paginas/index';
import CardMovie from './paginas/CardMovie';
import CardSerie from './paginas/CardSerie';
import {BrowserRouter, Route, Routes, Navigate, Outlet} from 'react-router-dom'
import Footer from './componentes/Footer';
import Form from './paginas/Form';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/registro" element={<Form kindForm={"registro"} />}></Route>
          <Route path='/iniciosesion' element={<Form kindForm={"inicio"} />}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}
function WithoutHeaderFooter() {
  return <Outlet />;
}
export default App;
