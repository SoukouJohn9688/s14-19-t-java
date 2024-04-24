import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Menu, Transition } from "@headlessui/react";
import DocentesImg from "../../assets/Docentes.jpg";
import { AsignaturasData } from "@/mock";
import GradeTable from "../Table/GradeTable";
import CalendarioAsistencias from "../CalendarioAsistencias/CalendarioAsistencias";
import { FaGraduationCap, FaRegCalendarCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const CardTeachers = () => {
  const [expandedAsignatura, setExpandedAsignatura] = useState(null);
  const [showGradeTable, setShowGradeTable] = useState(false);
  const [showCalendarAsis, setShowCalendarAsis] = useState(false);
  const [showStudentDetails, setShowStudentDetails] = useState({});

  const toggleAsignatura = (id) => {
    if (expandedAsignatura === id) {
      setExpandedAsignatura(null);
    } else {
      setExpandedAsignatura(id);
    }
  };

  const toggleGradeTable = (student) => {
    setShowGradeTable(!showGradeTable);
    setShowCalendarAsis(false);
  };

  const toggleCalendarAsis = (student) => {
    setShowCalendarAsis(!showCalendarAsis);
    setShowGradeTable(false);
  };

  const toggleStudentDetails = (student) => {
    setShowStudentDetails((prevState) => ({
      ...prevState,
      [student]: !prevState[student],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="font-bold text-3xl text-orange-500 mb-4">
        <img className="h-16 mx-auto lg:ml-0" src={DocentesImg} alt="alumnos" />
      </h2>
      <h1 className="text-[18px] font-bold p-3">ASIGNATURAS:</h1>
      {AsignaturasData.map((asignatura) => (
        <div key={asignatura.id} className="flex flex-col gap-[10px] items-start">
          <div className="flex gap-2 items-center">
            <FaEdit className="text-orange-500 cursor-pointer" />
            <h2
              className="cursor-pointer text-center text-orange-500"
              onClick={() => toggleAsignatura(asignatura.id)}
            >
              {asignatura.asignatures}
            </h2>
            
          </div>
          {expandedAsignatura === asignatura.id && (
            <div className="flex flex-col gap-[5px] justify-around items-start">
              <h1>-Lista de estudiantes</h1>
              {asignatura.students.map((student, index) => (
                <div key={index} className="flex flex-col items-start justify-around gap-[5px]">
                  <h1 className="text-sky-600 ml-[30px]" onClick={() => toggleStudentDetails(student)}>{student}</h1>
                  {showStudentDetails[student] && (
                    <Fragment >
                      <div className="flex flex-col gap-2 justify-center">
                        <button
                          className="flex items-center hover:text-sky-600 hover:transition hover:duration-300"
                          onClick={() => toggleGradeTable(student)}
                           
                        >
                          <FaGraduationCap className="text-sky-600 text-xl m-2" />
                          <span className="text-sm">Rendimiento</span>
                        </button>
                        <button
                          className="flex items-center hover:text-sky-600 hover:transition hover:duration-300"
                          onClick={() => toggleCalendarAsis(student)}
                          
                        >
                          <FaRegCalendarCheck className="text-sky-600 text-lg m-2" />
                          <span className="text-sm">Asistencia</span>
                        </button>
                      </div>
                      {showGradeTable && (
                        <Fragment>
                          <div className="text-sm mb-1">Ingrese notas de {student}</div>
                          <GradeTable />
                        </Fragment>
                      )}
                      {showCalendarAsis && (
                        <Fragment>
                          <div className="text-sm mb-1"> Asistencias de {student}</div>
                          <CalendarioAsistencias />
                        </Fragment>
                      )}
                    </Fragment>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};