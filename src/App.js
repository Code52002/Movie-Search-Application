import React, { useState } from 'react'; // Ensure useState is imported
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
// import './App.css';
function App() {
  const [movies, setMovies] = useState([]); // Using useState for movies state

  const handleSearch = (results) => {
    setMovies(results);
  };

  return (
    <Router>
      <Routes>
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/" element={
          <>
            <SearchBar onSearch={handleSearch} />
            <MovieList movies={movies} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;