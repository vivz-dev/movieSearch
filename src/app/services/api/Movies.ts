import { API_POPULAR, API_KEY } from "@/app/config/apiConfig";


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
  return data.results; // Devuelve solo los resultados
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

export const fetchTrendingMoviesDay = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
  
    const response = await fetch(API_POPULAR, options);
  
    if (!response.ok) {
      throw new Error('Error fetching movie data'); // Manejo básico de errores
    }
  
    const data = await response.json();
    return data.results; // Devuelve solo los resultados
};

export const fetchTrendingMoviesWeek = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
  
    const response = await fetch(API_POPULAR, options);
  
    if (!response.ok) {
      throw new Error('Error fetching movie data'); // Manejo básico de errores
    }
  
    const data = await response.json();
    return data.results; // Devuelve solo los resultados
};