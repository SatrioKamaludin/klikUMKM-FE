import React from 'react';
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import MovieInfo from './components/MovieInfo/MovieInfo';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Movie />
        <Routes>
          <Route path='/films/:id' element={<MovieInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
