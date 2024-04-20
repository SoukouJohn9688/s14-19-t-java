import React, { useState } from "react";
import backgroundImage from "../assets/background_login.png";
import { Button } from "@/components";
import ModalRegister from "@/components/AdminComponents/ModalRegister/ModalRegister";
import ModalNotificacions from "@/components/AdminComponents/ModalNotificacions/ModalNotificacions";
import ModalCursos from "@/components/AdminComponents/ModalCursos/ModalCursos";
import ModalDocentes from "@/components/AdminComponents/ModalDocentes/ModalDocentes";

const HomeMaster = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showAddNotificacion, setAddNotifacion] = useState(false);
  const [showCursos, setShowCursos] = useState(false);
  const [showDocentes, setShowDocentes] = useState(false);

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const toggleNotficacion = () => {
    setAddNotifacion(!showAddNotificacion);
  };
  
  const toggleCursos = () => {
    setShowCursos(!showCursos);
  };

  const toggleDocentes = () => {
    setShowDocentes(!showDocentes);
  };

  return (
    <div
      className="flex flex-col justify-start items-center bg-gray-200 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-20 w-[70%] md:w-full space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4">
        <Button
          onClick={toggleRegister}
          className={`w-full md:w-[70%] bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Agregar Usuarios
        </Button>
        {showRegister && <ModalRegister isOpen={showRegister} onClose={toggleRegister} />}
        <Button
          onClick={toggleNotficacion}
          className={`w-full md:w-[70%] bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Agregar Notificación
        </Button>
        {showAddNotificacion && <ModalNotificacions isOpen={showAddNotificacion} onClose={toggleNotficacion} />}
        <Button
          onClick={toggleCursos}
          className={`w-full md:w-[70%] bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Listado de Cursos
        </Button>
        {showCursos && <ModalCursos />}
        <Button
          onClick={toggleDocentes}
          className={`w-full md:w-[70%] bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Listado de Docentes
        </Button>
        {showDocentes && <ModalDocentes />}
      </div>
    </div>
  );
};

export default HomeMaster;
