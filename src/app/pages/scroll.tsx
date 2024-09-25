
'use client'; // Añade esta línea para marcarlo como un componente cliente

import React, { useEffect, useState } from 'react';
import { fetchAllMovies, fetchMostPopular } from '../services/api/Movies';
import * as getImage from '../services/api/Images';
import { IMAGE_SIZES} from '../services/api/Images';
import { Movie } from '../types/movie';
import InfiniteScroll from 'react-infinite-scroll-component';
import useMovie from '../hooks/useMovie';

const MovieList: React.FC = () => {
    
    const {movies} = useMovie()
    
    return (
      <div>
        <h2>La mas popular</h2>
        <h2>No. 1 en películas hoy</h2>
        {/* <li key={mostPopular!.id}>
        <img src={getImage.backdropUrl(mostPopular!.backdrop_path, IMAGE_SIZES.backdrop.original)} alt={mostPopular!.title} />
            Movie: {mostPopular!.title}
            {mostPopular!.overview}
            
        </li> */}

        <h2>Top Vistos</h2>
        <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <img src={getImage.posterUrl(movie.poster_path, IMAGE_SIZES.poster.medium)} alt={movies[0].title} />
          </li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default MovieList;