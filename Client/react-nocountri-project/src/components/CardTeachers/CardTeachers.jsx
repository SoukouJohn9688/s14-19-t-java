import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import DocentesImg from "../../assets/Docentes.jpg";

export const CardTeachers = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="font-bold text-3xl text-orange-500 mb-4">
        <img className="h-16 mx-auto lg:ml-0" src={DocentesImg} alt="alumnos" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Link to={"/"} className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300">
          <BsFillTelephoneFill className="text-orange-500 text-lg m-2" />
          <span className="text-sm text-center">Llamados</span>
        </Link>
        <Link to={"/"} className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300">
          <HiOutlineIdentification className="text-orange-500 text-xl m-2" />
          <span className="text-sm text-center">Certificados</span>
        </Link>
        <Link to={"/"} className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300">
          <IoPeopleSharp className="text-orange-500 text-xl m-2" />
          <span className="text-sm text-center">Juntas Calificadoras</span>
        </Link>
        <Link to={"/"} className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300">
          <FaPlus className="text-orange-500 text-xl m-2" />
          <span className="text-sm text-center">Más</span>
        </Link>
      </div>
    </div>
  );
};
