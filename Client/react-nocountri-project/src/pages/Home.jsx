import CardProfile from "@/components/CardProfile/CardProfile";
import { useState, useEffect } from "react";
import CalendarioGeneral from "@/components/CalendarioGeneral/CalendarioGeneral";
import { CardStudents } from "@/components/CardStudents/CardStudents";
import { CardTeachers } from "@/components/CardTeachers/CardTeachers";
import { CardParents } from "@/components/CardParents/CardParents";
import GradeTable from "@/components/Table/GradeTable";
import CalendarioAsistencias from "@/components/CalendarioAsistencias/CalendarioAsistencias";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [showGradeTable, setShowGradeTable] = useState(false);
  const [showCalendarAsis, setShowCalendarAsis] = useState(false);
  const userRol = useSelector((state) => state.auth.userRol);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/api/v1/teacher");
    console.log(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        onShowGradeTable={toggleGradeTable}
        onShowCalendarAsis={toggleCalendarAsis}
      />
    );
  } else if (userRol === "docente") {
    mainComponent = <CardTeachers />;
  } else if (userRol === "padre") {
    mainComponent = (
      <CardParents
        onShowGradeTable={toggleGradeTable}
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
              <CardProfile />
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
