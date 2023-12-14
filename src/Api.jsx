import axios from 'axios';

const API_KEY = '3bc5ea567716597088a9f8a065113fe0';

const TREND_BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const GENRE_BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie/';
const SEARCH_BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const OTHER_BASE_URL = 'https://api.themoviedb.org/3/movie/';

export const TrendingMovie = async () => {
    try {
      const { data } = await axios.get(`${TREND_BASE_URL}?api_key=${API_KEY}`);
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const GetGenre = async () => {
    try {
      const { genres } = await axios.get(`${GENRE_BASE_URL}?api_key=${API_KEY}`);
      return genres;
    } catch (error) {
      console.error(error);
    }
  };
  // https://api.themoviedb.org/3/genre/movie/list?api_key=83cba2c85d0df477852b094af9fbdddb
  
  export const GetMovieById = async id => {
    try {
      const { data } = await axios.get(
        `${MOVIE_BASE_URL}${id}?api_key=${API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  // https://api.themoviedb.org/3/movie/766220?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US
  
  export const GetMovieBySearch = async q => {
    try {
      const { data } = await axios.get(
        `${SEARCH_BASE_URL}?api_key=${API_KEY}&query=${q}&include_adult=false`
      );
  
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };
  // https://api.themoviedb.org/3/search/movie?api_key=83cba2c85d0df477852b094af9fbdddb&query=cat&page=1&include_adult=false
  
  export const GetCast = async id => {
    try {
      const { data } = await axios.get(
        `${OTHER_BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US`
      );
  
      return data.cast;
    } catch (error) {
      console.error(error);
    }
  };
  
  // https://api.themoviedb.org/3/movie/361743/credits?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US
  
  export const GetReviews = async id => {
    try {
      const { data } = await axios.get(
        `${OTHER_BASE_URL}${id}/reviews?api_key=${API_KEY}&language=en-US`
      );
  
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };
  
  // https://api.themoviedb.org/3/movie/361743/reviews?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US