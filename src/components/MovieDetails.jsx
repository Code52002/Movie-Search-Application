import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../utils/api'; 
import './MovieDetails.css';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { imdbID } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(imdbID);
      setMovie(details);
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (!movie.Title) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="movie-content">
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{movie.Title} <span className="movie-year">({movie.Year})</span></h1>
          <p className="movie-genre"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="movie-director"><strong>Director:</strong> {movie.Director}</p>
          <p className="movie-actors"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="movie-plot"><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;