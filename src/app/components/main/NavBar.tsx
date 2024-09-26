
'use client'; // Añade esta línea para marcarlo como un componente cliente

import Link from "next/link";
import React from "react";

type Props = {}

const NavBar = () =>{
    return(
        <div className="fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-3 bg-blue-600 text-white w-full transition-all">
            <div className="flex gap-4">
                <button className="hover:text-gray-300">Inicio</button>
            </div>
            <Link className="hover:text-gray-300" href={"#"}>Buscador</Link>
        </div>
    );
}

export default NavBar;