import CalendarioAsistencias from "./CalendarioAsistencias/CalendarioAsistencias";
import CardParents from "@/components/CardParents/CardParents";
import CardProfile from "@/components/CardProfile/CardProfile";
import React from "react";
import CalendarioGeneral from "@/components/CalendarioGeneral/CalendarioGeneral";

const Home = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-50 grid grid-cols-2 p-10 lg:space-x-5 gap-5">
          <div className="sticky top-10">
            <div>
              <CardProfile />
            </div>
          </div>
          <div className="grid row-span-4">
            <CardParents />
            <CalendarioGeneral />
            {/* <CalendarioAsistencias /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
