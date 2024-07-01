import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './MovieList.css';

function MovieList({ movies }) {
  const moviesArray = Array.isArray(movies)? movies : [];

  if (moviesArray.length === 0) {
    return <div className="no-movies">No movies found.</div>;
  }

  return (
    <div className="movie-grid">
      {moviesArray.map((movie, index) => (
        <motion.div
          key={movie.imdbID}
          className="movie-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.01 }}
          whileHover={{ scale: 1.15, x:5 ,y: -5 }}
          whileTap={{ scale: 0.95 }} 
        >
          <Link to={`/movie/${movie.imdbID}`} className="movie-link">
            <div className="movie-poster-wrapper">
              <img className="movie-poster" src={movie.Poster} alt={`${movie.Title} Poster`} />
            </div>
            <div className="movie-details">
              <motion.p className="movie-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {movie.Title}
              </motion.p>
              <motion.p className="movie-year" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {movie.Year}
              </motion.p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default MovieList;
