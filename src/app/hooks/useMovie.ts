import { useEffect, useState } from 'react';
import { fetchMostPopular, fetchAllMovies, fetchTrendingMoviesDay, fetchTrendingMoviesWeek } from '../services/api/Movies';
import { Movie } from '../types/movie';


function useMovie(){
    const [movies, setMovies] = useState<Movie[]>([]); // Estado para almacenar las películas
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [verMas, setVerMas] = useState(true);
    const [firstMovie, setfirstMovie] = useState<Movie>();

    const loadMovies = async (page: number = 1) => {
        const movieData = await fetchTrendingMoviesWeek(page);
        const {datos, this_page, total_pages} = movieData;
        if (!Array.isArray(datos)) {
            console.error('Expected an array for datos but got:', datos);
            return;
        }
        setMovies(prev => [...prev, ...datos]); 
        setNextPage(this_page+1);
        setPage(this_page);
        if (!firstMovie && datos.length > 0) {
            setfirstMovie(datos[0]);
        }
        page===total_pages?setVerMas(false):setVerMas(true);
    };

    const moreMovies = async() =>{
        await loadMovies(nextPage);
    }

    useEffect(() => {
      loadMovies(page);
    }, []);

    return {movies, moreMovies, verMas, firstMovie}

}

export default useMovie;