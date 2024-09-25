
'use client'; // Añade esta línea para marcarlo como un componente cliente

import useMovie from '@/app/hooks/useMovie';
import React, { useEffect, useState } from 'react';
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
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const maxScroll = 300; // Ajusta este valor para controlar cuándo empieza a oscurecerse
          const newOpacity = Math.min(scrollTop / maxScroll, 1);
          setOpacity(newOpacity);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative bg-gradient-to-t from-black to-transparent" style={{ opacity }}>
          <img
            src={getImage.posterUrl(imageUrl, IMAGE_SIZES.backdrop.original)}
            alt="Sample"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold bg-black bg-opacity-50">
            {descripcion}
          </div>
        </div>
        // <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        // <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
        //     <h1 className="text-4xl">{descripcion}</h1>
        // </div>
        // </div>
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