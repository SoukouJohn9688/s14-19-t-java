import padres from "../../assets/Padres.jpg";
import StudentRecord from "./StudentRecord";

const CardParents = () => {
  return (
    <div className="m-6 p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center gap-2  lg:flex-row lg:justify-start">
        <img src={padres} className="w-40" alt="Padres" />
      </div>
      <div className="grid lg:grid-cols-2 lg:place-items-center">
        <StudentRecord />
        <StudentRecord />
      </div>
    </div>
  );
};

export default CardParents;
