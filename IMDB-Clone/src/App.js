import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path='movie/:id' element={<MovieDetails />} />
          <Route path='movies/:type' element={<MovieList/>} />
          <Route path='/*' element={<h1>ERROR</h1>}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
