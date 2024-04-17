import CardProfile from "@/components/CardProfile/CardProfile";
import React, { useState } from "react";
import CalendarioGeneral from "@/components/CalendarioGeneral/CalendarioGeneral";
import { CardStudents } from "@/components/CardStudents/CardStudents";
import GradeTable from "@/components/Table/GradeTable";
import CalendarioAsistencias from "@/components/CalendarioAsistencias/CalendarioAsistencias";

const Home = () => {
  const [showGradeTable, setShowGradeTable] = useState(false);
  const [showCalendarAsis, setShowCalendarAsis] = useState(false);

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

  return (
    <div className="mt-12">
      <div className="bg-gray-50 p-10">
        <div className="gap-5 lg:gap-5 grid lg:grid-cols-4 grid-flow-row md:grid-flow-col">
          <div className="md:col-span-1 mx-auto">
            <div className="top-10 sticky">
              <CardProfile />
            </div>
          </div>
          <div className="gap-5 grid col-span-3">
            <CardStudents
              onShowGradeTable={() => setShowGradeTable(true)}
              onShowCalendarAsis={toggleCalendarAsis}
            />
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
