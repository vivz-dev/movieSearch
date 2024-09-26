
'use client'; // Añade esta línea para marcarlo como un componente cliente

import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useMovie from '../../hooks/useMovie';
import MovieCard from '../movieGrid/MovieCard';

const MovieGrid: React.FC = () => {
    const {movies, moreMovies, verMas} = useMovie()

    return (
        <div
            className="bg-black flex flex-wrap justify-center"
        >
            <InfiniteScroll
                className="flex flex-wrap justify-center p-0 overflow-y-scroll h-full bg-black"
                dataLength={movies.length}
                next={moreMovies}
                hasMore={verMas}
                loader={<h4>Cargando....</h4>}
                endMessage={<h4>No hay mas peliculas para recomendar</h4>}
                >
                {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
            </InfiniteScroll>
        </div>
        
    );
  };
  
  export default MovieGrid;