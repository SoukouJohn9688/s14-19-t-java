import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Menu, Transition } from "@headlessui/react";
import DocentesImg from "../../assets/Docentes.jpg";

export const CardTeachers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="font-bold text-3xl text-orange-500 mb-4">
        <img className="h-16 mx-auto lg:ml-0" src={DocentesImg} alt="alumnos" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Link
          to={"/"}
          className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300"
        >
          <BsFillTelephoneFill className="text-orange-500 text-lg m-2" />
          <span className="text-sm text-center">Llamados</span>
        </Link>
        <Link
          to={"/"}
          className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300"
        >
          <HiOutlineIdentification className="text-orange-500 text-xl m-2" />
          <span className="text-sm text-center">Certificados</span>
        </Link>
        <Link
          to={"/"}
          className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300"
        >
          <IoPeopleSharp className="text-orange-500 text-xl m-2" />
          <span className="text-sm text-center">Juntas Calificadoras</span>
        </Link>
        <div className="flex flex-col items-center">
          <Menu as="div" className="relative ml-3">
            <Menu.Button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center hover:text-orange-500 hover:transition hover:duration-300"
            >
              <FaPlus className="text-orange-500 text-xl m-2" />
              <span className="text-sm text-center">Más</span>
            </Menu.Button>
            <Transition
              show={isOpen}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-200">
                {" "}
                <Menu.Item>
                  <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ver Cursos</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ver alumnos</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Agregar notificación</Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
