
'use client'; // Añade esta línea para marcarlo como un componente cliente

import useMovie from '@/app/hooks/useMovie';
import React from 'react';
import { IMAGE_SIZES } from "@/app/services/api/Images";
import * as getImage from '../../services/api/Images';

interface MainMovieProps{
    imageUrl: string;
    altText: string;
    descripcion: string;
};

const MainMovie2: React.FC<MainMovieProps> = ({
    imageUrl,
    altText,
    descripcion,
  }) => {
    return (
        <div className="relative">
          <img
            src={getImage.posterUrl(imageUrl, IMAGE_SIZES.backdrop.original)}
            alt="Sample"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold bg-black bg-opacity-50">
            {descripcion}
          </div>
        </div>
      );
      
};

const MainMovie: React.FC = () => {
    const {firstMovie} = useMovie()

    if (!firstMovie) {
        return <div>Loading...</div>; // Muestra algo mientras se carga la primera película
    }

    return (
        <MainMovie2 imageUrl={firstMovie.backdrop_path} altText={''} descripcion={firstMovie.overview}/>
      );
};
  
export default MainMovie;