import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FetchMovies from './Components/GetMovies';
import DisplayMovies from './Components/GetMovies/Carousel';
import Navbar from './Components/GetMovies/NavigationBar';
import MovieDetails from './Components/GetMovies/MovieDetails';

function App() {
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <DisplayMovies/>
      <Routes>
        <Route path='/' element={<FetchMovies />}/>
        <Route path='/movies/:movieId' element={<MovieDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
