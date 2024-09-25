// app/components/MovieService.ts
export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjgwNTE3MzEyZjBjNTJiNWQwNDZmNjgyZWEzZjUwYyIsIm5iZiI6MTcyNzIyNjk0MC4xNTIxNTgsInN1YiI6IjY2ZjM2MzdjNzA5MWQ1NzU1ZDY5ZDY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dh9vFvWFgH_WqOJBUxyoqxy65gDPLsE3E7vaZ2DwxPw'; // Tu token de autorización

const API_BASE_URL = 'https://api.themoviedb.org/3/'; // URL de la API

//configs
const language = 'language=es-EC';

export const API_POPULAR = API_BASE_URL+'movie/popular?'+language+'&page=';
export const TRENDING_DAY = API_BASE_URL+'trending/movie/day?'+language+'&page=';
export const TRENDING_WEEK = API_BASE_URL+'trending/movie/week?'+language+'&page=';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'
