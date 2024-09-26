"use client"; // Añade esta línea para marcarlo como un componente cliente

import { Movie } from "@/app/types/movie";
import React from "react";
import ActionButton from "./actionButton";
import InfoIcon from "../../icons/info"
import PlayIcon from "../../icons/play"

interface descriptionProps {
  movie: Movie;
}

const MovieDescription: React.FC<descriptionProps> = ({ movie }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-left text-white bg-black bg-opacity-40">
      <div className="w-2/5 ml-4 mr-4 flex flex-col gap-2">
        <div className="uppercase text-6xl">{movie.title}</div>
        <div className="flex flex-row items-center font-bold">
          <img src={"/top1.png"} alt="Sample" className="w-[40px] mr-2" />
          No. 1 en películas esta semana
        </div>
        <div>{movie.overview}</div>
        <div className="flex flex-row gap-4">
            <ActionButton icon={<PlayIcon/>} descripcion='Reproducir'></ActionButton>
            <ActionButton icon={<InfoIcon/>} descripcion='Más Información'></ActionButton>
          </div>
      </div>
    </div>
  );
};

export default MovieDescription;
