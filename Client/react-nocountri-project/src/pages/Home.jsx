import CardProfile from "@/components/CardProfile/CardProfile";
import { useState } from "react";
import CalendarioGeneral from "@/components/CalendarioGeneral/CalendarioGeneral";
import { CardStudents } from "@/components/CardStudents/CardStudents";
import { CardTeachers } from "@/components/CardTeachers/CardTeachers";
import { CardParents } from "@/components/CardParents/CardParents";
import GradeTable from "@/components/Table/GradeTable";
import CalendarioAsistencias from "@/components/CalendarioAsistencias/CalendarioAsistencias";
import { useSelector } from "react-redux";

const Home = () => {
  const [showGradeTable, setShowGradeTable] = useState(false);
  const [showCalendarAsis, setShowCalendarAsis] = useState(false);
  const userRol = useSelector((state) => state.auth.userRol);

  const toggleGradeTable = () => {
    setShowGradeTable(true);
    setShowCalendarAsis(false);
  };

  const toggleCalendarAsis = () => {
    setShowCalendarAsis(true);
    setShowGradeTable(false);
  };

  const showCalendarioGeneral = () => {
    setShowCalendarAsis(false);
  };

  let mainComponent;

  if (userRol === "alumno") {
    mainComponent = (
      <CardStudents
        onShowGradeTable={() => setShowGradeTable(true)}
        onShowCalendarAsis={toggleCalendarAsis}
      />
    );
  } else if (userRol === "docente") {
    mainComponent = <CardTeachers 
    
    />;
  } else if (userRol === "padre") {
    mainComponent = (
      <CardParents
        onShowGradeTable={() => setShowGradeTable(true)}
        onShowCalendarAsis={toggleCalendarAsis}
      />
    );
  }

  return (
    <div className="mt-12">
      <div className="bg-gray-50 p-8 lg:p-12">
        <div className=" md:gap-5 md:grid lg:grid-cols-3 grid-flow-row md:grid-flow-col">
          <div className="md:col-span-1">
            <div className="top-10 sticky mb-16 lg:mb-0">
              <CardProfile/>
            </div>
          </div>
          <div className="gap-5 grid col-span-2 mb-10 lg:mb-0 lg:mx-9">
            {mainComponent}
            {showGradeTable && <GradeTable />}
            {!showCalendarAsis && <CalendarioGeneral />}
            {showCalendarAsis && <CalendarioAsistencias />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
