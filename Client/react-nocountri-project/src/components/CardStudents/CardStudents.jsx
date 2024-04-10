
import { Link } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FaGraduationCap, FaRegCalendarCheck } from "react-icons/fa";
import AlumnosImg from "../../assets/Alumnos.jpg";

export const CardStudents = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border-[1px]">
      <h2 className="font-bold text-3xl text-sky-600 mb-4">
        <img className="h-16 mx-auto lg:ml-0" src={AlumnosImg} alt="Alumnos" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to={"/"}
          className="flex flex-col items-center hover:text-sky-600 hover:transition hover:duration-300"
        >
          <HiOutlineIdentification className="text-sky-600 text-xl m-2" />
          <span className="text-sm">Documentación</span>
        </Link>
        <Link
          to={"/"}
          className="flex flex-col items-center hover:text-sky-600 hover:transition hover:duration-300"
        >
          <FaGraduationCap className="text-sky-600 text-xl m-2" />
          <span className="text-sm">Rendimiento</span>
        </Link>
        <Link
          to={"/"}
          className="flex flex-col items-center hover:text-sky-600 hover:transition hover:duration-300"
        >
          <FaRegCalendarCheck className="text-sky-600 text-lg m-2" />
          <span className="text-sm">Asistencia</span>
        </Link>
      </div>
    </div>
  );
};
