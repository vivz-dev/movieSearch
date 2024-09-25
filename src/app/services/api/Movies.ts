import { API_POPULAR, API_KEY, TRENDING_DAY, TRENDING_WEEK } from "@/app/config/apiConfig";


export const fetchAllMovies = async (page: number) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  };

  const response = await fetch(API_POPULAR+page, options);

  if (!response.ok) {
    throw new Error('Error fetching movie data'); // Manejo básico de errores
  }

  const data = await response.json();
  return {datos: data.results, this_page: data.page, total_pages: data.total_pages}; // Devuelve solo los resultados
};

export const fetchMostPopular = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
  
    const response = await fetch(API_POPULAR+'1', options);
  
    if (!response.ok) {
      throw new Error('Error fetching movie data'); // Manejo básico de errores
    }
  
    const data = await response.json();
    return data.results[0]; // Devuelve solo los resultados
};

export const fetchTrendingMoviesDay = async (page: number) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
  
    const response = await fetch(TRENDING_DAY+page, options);
  
    if (!response.ok) {
      throw new Error('Error fetching movie data'); // Manejo básico de errores
    }
  
    const data = await response.json();
    return {datos: data.results, this_page: data.page, total_pages: data.total_pages}; // Devuelve solo los resultados
};

export const fetchTrendingMoviesWeek = async (page: number) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
  
    const response = await fetch(TRENDING_WEEK+page, options);
  
    if (!response.ok) {
      throw new Error('Error fetching movie data'); // Manejo básico de errores
    }
  
    const data = await response.json();
    return {datos: data.results, this_page: data.page, total_pages: data.total_pages}; // Devuelve solo los resultados
};