import React from "react";
import backgroundImage from "../assets/background_login.png";
import { GiTeacher } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { FiEye } from "react-icons/fi";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-200 min-h-screen mt-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sm:m-12 items-center">
        <div className="container mx-auto px-8">
          <section className="text-center bg-white shadow-lg rounded-3xl p-12 mt-10">
            <h1 className="text-3xl font-bold mb-5 sm:mx-14">
              Bienvenido a nuestra Plataforma de Gestión Educativa EdTech
            </h1>
            <p className="text-lg text-gray-700">
              Digitaliza tu centro educativo con nuestra plataforma todo en uno,
              diseñada para simplificar la gestión académica, escolar y
              administrativa, así como mejorar la comunicación con el alumnado y
              las familias.
            </p>
          </section>
          <section className="flex flex-col md:flex-row m-8 md:space-x-10 my-16">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <div className="flex my-4">
                <PiTargetBold className="text-sky-600 mx-1 text-4xl" />
                <h2 className="text-xl font-semibold p-1">Misión</h2>
              </div>
              <p>
                Ser el apoyo de gestión educativa que el centro necesita.
                Ponemos el alumno en el centro, y por eso ayudamos a los
                docentes, administrativos, secretaría y dirección a que su día a
                día sea más fructífero.
              </p>
            </div>
            <div className="mb-10 md:mb-0 md:w-1/2">
              <div className="flex my-4">
                <FiEye className="text-sky-600 mx-1 text-4xl" />
                <h2 className="text-xl font-semibold p-1">Visión</h2>
              </div>
              <p>
                Dar forma al futuro de la educación, aprovechando nuestra
                solidez en el sector tecnológico y nuestra experiencia
                pedagógica.
              </p>
            </div>
          </section>

          <section className="my-20 p-8 mx-auto border-2 border-black rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Características Principales
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Información Centralizada:</span>{" "}
                Toda la información de la escuela, incluyendo grupos base,
                docentes, alumnado, se encuentra en un único lugar.
              </li>
              <li className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">
                  Expedientes e Historial Académico:
                </span>{" "}
                Accede fácilmente a expedientes e historiales académicos de
                manera rápida y segura.
              </li>
              <li className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">
                  Roles y Permisos Personalizados:
                </span>{" "}
                Define roles personalizados para cada usuario, garantizando
                acceso seguro a los datos compartidos a nivel de centro.
              </li>
            </ul>
          </section>
        </div>

        <div className="text-center my-10">
          <h2 className="text-3xl font-semibold sm:my-12">Útil para todos</h2>
          <ul className="flex flex-col sm:flex-row sm:space-x-8">
            <li className="m-8 sm:m-2">
              <FaSchoolFlag className="text-6xl my-3 mx-auto" />
              <h3 className="font-bold">Colegios</h3>
              <p>Gestión integral y sostenible</p>
            </li>
            <li className="m-8 sm:m-2">
              <GiTeacher className="text-6xl my-3 mx-auto" />
              <h3 className="font-bold">Profesorado</h3>
              <p>Las herramientas más innovadoras</p>
            </li>
            <li className="m-8 sm:m-2">
              <GiSchoolBag className="text-6xl my-3 mx-auto" />
              <h3 className="font-bold">Alumnado</h3>
              <p>El mejor entorno para el aprendizaje</p>
            </li>
            <li className="m-8 sm:m-2">
              <MdFamilyRestroom className="text-6xl my-3 mx-auto" />
              <h3 className="font-bold">Familias</h3>
              <p></p>Más transparencia para mayor tranquilidad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
