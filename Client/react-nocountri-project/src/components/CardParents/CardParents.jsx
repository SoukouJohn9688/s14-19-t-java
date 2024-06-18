import padres from "../../assets/Padres.jpg";
import StudentRecord from "./StudentRecord";

export const CardParents = ({ onShowGradeTable, onShowCalendarAsis }) => {


  // GET http://substantial-allsun-proyect-test-1e5fae8f.koyeb.app/api/v1/parent/{parentId}/children

  // Map con todos los hijos
  return (
    <div className="p-2 rounded-lg shadow-xl bg-white border-[1px]">
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-start">
        <img src={padres} className="h-16 mx-auto lg:ml-0" alt="Padres" />
      </div>
      <div className="grid md:grid-cols-2 lg:place-items-center xl:grid-cols-3">
        <StudentRecord
          onShowGradeTable={onShowGradeTable}
          onShowCalendarAsis={onShowCalendarAsis}
        />

        <StudentRecord
          onShowGradeTable={onShowGradeTable}
          onShowCalendarAsis={onShowCalendarAsis}
        />
      </div>
    </div>
  );
};
