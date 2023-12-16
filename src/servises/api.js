import axios from 'axios';
const API_KEY = '4c0e7f751de589a214c7a7cb256ddfec';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getAllTrending = async period => {
  const response = await axios(`${BASE_URL}/trending/all/${period}`);
  //   console.log(response.data.results);
  return response.data.results;
};

export async function searchMovie(query, page) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?&query=${query}&page=${page}`
  );

  return response.data;
}
export const getMovieDetails = async id => {
  const response = await axios(`${BASE_URL}/movie/${id}`);

  return response.data;
};
export const getMovieCredits = async id => {
  const response = await axios(`${BASE_URL}/movie/${id}/credits`);

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios(`${BASE_URL}/movie/${id}/reviews`);

  return response.data;
};
