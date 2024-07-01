import axios from 'axios';

const apiKey = '8e59c5c5'; 

export async function searchMovies(query) {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
  return response.data.Search;
}

export async function getMovieDetails(imdbID) {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
  return response.data;
}
