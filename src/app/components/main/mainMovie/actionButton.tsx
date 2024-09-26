"use client"; // Añade esta línea para marcarlo como un componente cliente

import React from "react";

interface buttonProps{
    descripcion: string,
    icon: React.ReactNode,
  };

const ActionButton: React.FC<buttonProps> = ({
    descripcion,
    icon
  }) => {
  return (
  <button className="w-2/4 h-[40px] bg-black bg-opacity-40 rounded-lg flex flex-row justify-center items-center gap-2">
    {icon}
    {descripcion}
  </button>);
};

export default ActionButton;
