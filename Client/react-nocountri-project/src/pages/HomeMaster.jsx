import React from "react";
import backgroundImage from "../assets/background_login.png";
import { Button } from "@/components";

const HomeMaster = () => {
  return (
    <div
      className="flex gap-10 justify-around items-start bg-gray-200 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-20">
        <Button
          className={`w-[100%] mx-auto mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Agregar Usuarios
        </Button>
      </div>
      <div className="mt-20">
        <Button
          className={`w-[100%] mx-auto mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Agregar Notificación
        </Button>
      </div>
      <div className="mt-20">
        <Button
          className={`w-[100%] mx-auto mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Listado de Cursos
        </Button>
      </div>
      <div className="mt-20">
        <Button
          className={`w-[100%] mx-auto mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Listado de Docentes
        </Button>
      </div>
    </div>
  );
};

export default HomeMaster;
