import axios from 'axios';

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzE0YTEwNDA0ZWQ4ZjYxNDU1NmE4YzYxM2JiNzg5OCIsIm5iZiI6MTcyNTczNjMyMS45MDc5MDEsInN1YiI6IjY2ZGNhM2Q5ZjI3OGYzOTEwZDM4YTIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nu1-eu1fIkZ5W8vaDMlslt3W0TJHqZFDaNIEXRtDouE';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;

export async function fetchTrandingMovies() {
  const response = await axios.get('/trending/movie/day');
  return response.data;
}

export async function fetchMoviesByQuery(query) {
  const response = await axios.get('/search/movie', { params: { query } });
  return response.data;
}

export async function fetchMovieDetails(movieID) {
  const response = await axios.get(`/movie/${movieID}`);
  return response.data;
}

export async function fetchMovieCast(movieID) {
  const response = await axios.get(`/movie/${movieID}/credits`);
  return response.data;
}

export async function fetchMovieReviews(movieID) {
  const response = await axios.get(`/movie/${movieID}/reviews`);
  return response.data;
}
