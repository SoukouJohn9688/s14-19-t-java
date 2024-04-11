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
    <div>
      <div className="bg-gray-50 p-10">
        <div className="grid grid-cols-4 lg:gap-5 gap-5">
          <div className="col-span-1">
            <div className="sticky top-10">
              <CardProfile />
            </div>
          </div>
          <div className="col-span-3 grid gap-5">
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
