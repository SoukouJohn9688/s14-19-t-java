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

export const CardTeachers = () => {
  const [expandedAsignatura, setExpandedAsignatura] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showGradeTable, setShowGradeTable] = useState(false);
  const [showCalendarAsis, setShowCalendarAsis] = useState(false);

  const toggleAsignatura = (id) => {
    if (expandedAsignatura === id) {
      setExpandedAsignatura(null);
    } else {
      setExpandedAsignatura(id);
    }
  }

  const toggleGradeTable = (student) => {
    if (selectedStudent === student) {
      setShowGradeTable(!showGradeTable);
    } else {
      setSelectedStudent(student);
      setShowGradeTable(true);
      setShowCalendarAsis(false);
    }
  };

  const toggleCalendarAsis = (student) => {
    if (selectedStudent === student) {
      setShowCalendarAsis(!showCalendarAsis);
    } else {
      setSelectedStudent(student);
      setShowCalendarAsis(true);
      setShowGradeTable(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="font-bold text-3xl text-orange-500 mb-4">
        <img className="h-16 mx-auto lg:ml-0" src={DocentesImg} alt="alumnos" />
      </h2>
      <h1>Asignaturas de los alumnos:</h1>
      {AsignaturasData.map(asignatura => (
        <div key={asignatura.id}>
          <h2 onClick={() => toggleAsignatura(asignatura.id)} style={{ cursor: "pointer" }}>{asignatura.asignatures}</h2>
          {expandedAsignatura === asignatura.id && (
            <div className="gap-5 grid col-span-2 mb-10 lg:mb-0 lg:mx-9">
              {asignatura.students.map((student, index) => (
                <div key={index}>{student}
                  <button
                    className="flex flex-col items-center hover:text-sky-600 hover:transition hover:duration-300"
                    onClick={() => toggleGradeTable(student)}
                  >
                    <FaGraduationCap className="text-sky-600 text-xl m-2" />
                    <span className="text-sm">Rendimiento</span>
                  </button>
                  <button
                    className="flex flex-col items-center hover:text-sky-600 hover:transition hover:duration-300"
                    onClick={() => toggleCalendarAsis(student)}
                  >
                    <FaRegCalendarCheck className="text-sky-600 text-lg m-2" />
                    <span className="text-sm">Asistencia</span>
                  </button>
                  {selectedStudent === student && (
                    <Fragment>
                      {showGradeTable && (
                        <Fragment>
                          <div className="text-sm">Detalles de Rendimiento para {student}</div>
                          <GradeTable />
                        </Fragment>
                      )}
                      {showCalendarAsis && (
                        <Fragment>
                          <div className="text-sm">Detalles de Asistencia para {student}</div>
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
