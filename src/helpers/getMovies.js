import axios from 'axios';

export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
export const PLACEHOLDER = 'https://via.placeholder.com/182x273';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3bc5ea567716597088a9f8a065113fe0';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getCastMovie = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data.cast;
};
export const getReviewsMovie = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
