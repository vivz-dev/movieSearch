import { useEffect, useState } from 'react';
import { fetchMostPopular, fetchAllMovies } from '../services/api/Movies';
import { Movie } from '../types/movie';


function useMovie(){
    const [movies, setMovies] = useState<Movie[]>([]); // Estado para almacenar las películas
    const [page, setPage] = useState(1);

    useEffect(() => {
      const loadMovies = async (page: number) => {
            const movieData = await fetchAllMovies(page);
            console.log(movieData)
            setMovies(movieData); 
      };
  
      loadMovies(page);
    }, [page]);


    return {movies}

}

export default useMovie;