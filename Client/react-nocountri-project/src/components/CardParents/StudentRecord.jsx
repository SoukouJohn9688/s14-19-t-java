
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FaGraduationCap, FaRegCalendarCheck } from "react-icons/fa";

const StudentRecord = () => {
  return (
    <div className="flex flex-col p-5 gap-5 border-b-[1px] last:border-0 pb-5 lg:w-[95%] md:border-b-0">
      <div className="flex items-center p-2">
        <HiUserCircle className="text-[#57CAAA] text-6xl m-2" />
        <h2 className="uppercase">Cabrera, Andres</h2>
      </div>
      <div className="flex flex-col gap-3 space-y-3 ml-7">
        <Link to={"/"} className="hover:text-[#57CAAA] hover:transition hover:duration-300">
          <div className="flex items-center gap-4">
            <HiOutlineIdentification className="text-[#57CAAA] text-xl m-2" />
            <h2>Documentación</h2>
          </div>
        </Link>
        <Link to={"/"} className="hover:text-[#57CAAA] hover:transition hover:duration-300">
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-[#57CAAA] text-xl m-2" />
            <h2>Rendimiento</h2>
          </div>
        </Link>
        <Link to={"/"} className="hover:text-[#57CAAA] hover:transition hover:duration-300">
          <div className="flex items-center gap-4">
            <FaRegCalendarCheck className="text-[#57CAAA] text-xl m-2" />
            <h2>Asistencia</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StudentRecord;
