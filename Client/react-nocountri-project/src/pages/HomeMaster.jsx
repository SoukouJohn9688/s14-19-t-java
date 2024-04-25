import React, { useState } from "react";
import { Button } from "@/components";
import ModalRegister from "@/components/AdminComponents/ModalRegister/ModalRegister";
import ModalNotificacions from "@/components/AdminComponents/ModalNotificacions/ModalNotificacions";
import ModalCursos from "@/components/AdminComponents/ModalCursos/ModalCursos";
import ModalDocentes from "@/components/AdminComponents/ModalDocentes/ModalDocentes";
import CardProfile from "@/components/CardProfile/CardProfile";
import CalendarioGeneral from "@/components/CalendarioGeneral/CalendarioGeneral";

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
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-20">
      <div className="col-span-1 bg-white p-4">
        <div className="sticky top-10">
          <CardProfile />
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-start items-center p-4">
        <div className="flex flex-col justify-center gap-4 w-full bg-white rounded-lg shadow-md p-8 border-[1px]">
          <Button
            onClick={toggleRegister}
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-[160px] w-full"
          >
            Agregar Usuarios
          </Button>
          {showRegister && (
            <ModalRegister isOpen={showRegister} onClose={toggleRegister} />
          )}
          <Button
            onClick={toggleNotficacion}
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-[160px] w-full"
          >
            Agregar Notificación
          </Button>
          {showAddNotificacion && (
            <ModalNotificacions isOpen={showAddNotificacion} onClose={toggleNotficacion} />
          )}
          <Button
            onClick={toggleCursos}
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-[160px] w-full"
          >
            Listado de Cursos
          </Button>
          {showCursos && <ModalCursos />}
          <Button
            onClick={toggleDocentes}
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-[160px] w-full"
          >
            Listado de Docentes
          </Button>
          {showDocentes && <ModalDocentes />}
        </div>
      </div>
    </div>
  );
};

export default HomeMaster;
