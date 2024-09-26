
'use client'; // Añade esta línea para marcarlo como un componente cliente

import useMovie from '@/app/hooks/useMovie';
import React from 'react';
import { IMAGE_SIZES } from "@/app/services/api/Images";
import * as getImage from '../../services/api/Images';
import useOpacity from '@/app/hooks/useOpacity';
import { Movie } from '@/app/types/movie';
import MovieDescription from './mainMovie/movieDescription';

interface MainMovieProps{
  movie: Movie,
};

const MainMovie2: React.FC<MainMovieProps> = ({
    movie
  }) => {
    const {opacity} = useOpacity();
    return (
        <div className="fixed top-0 left-0 relative" style={{ opacity }}>
          <img
            src={getImage.backdropUrl(movie.backdrop_path, IMAGE_SIZES.backdrop.original)}
            alt="Sample"
            className="w-full h-full object-cover"
          />
          <MovieDescription movie={movie}/>
        </div>
      );
      
};

const MainMovie: React.FC = () => {
    const {firstMovie} = useMovie()

    if (!firstMovie) {
        return <div>Loading...</div>;
    }

    return (
        <MainMovie2 movie={firstMovie}/>
      );
};
  
export default MainMovie;