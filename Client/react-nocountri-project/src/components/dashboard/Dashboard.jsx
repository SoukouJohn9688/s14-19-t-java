import React from 'react'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Calendar } from "@/components/ui/Calendar";

const Dashboard = () => {
    const Calendary = () => {
        return <Calendar />;
      };
    
      const AttendanceInfo = () => {
        return (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">
              Información de Asistencias
            </h2>
          </div>
        );
      };
    
      const Advices = () => {
        return (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Avisos</h2>
          </div>
        );
      };
    
      const Notas = () => {
        return (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Notas</h2>
          </div>
        );
      };
    
      const handleDayClick = (day) => {
        console.log("Clicked day:", day);
      };
    
  return (
    <>
    <Tabs
      aria-label="Tabs with underline"
      style="underline"
      className="p-6 mx-4 mt-2 justify-center rounded-lg bg-[#ffffff] shadow-xl"
    >
      <Tabs.Item active title="Perfil" icon={HiUserCircle}>
        This is{" "}
        <span className="font-medium text-gray-800">
          Profile tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content
        visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={MdDashboard}>
        <div className="bg-white shadow-lg p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Calendario</h2>
              <Calendary
                showOutsideDays={true}
                className="my-calendar w-full"
                onDayClick={handleDayClick}
              />
            </div>
          </div>
          <div className="col-span-1">
            <AttendanceInfo />
          </div>
          <div className="col-span-1">
            <Advices />
          </div>
          <div className="col-span-2">
            <Notas />
          </div>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        This is{" "}
        <span className="font-medium text-gray-800">
          Settings tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content
        visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        This is{" "}
        <span className="font-medium text-gray-800">
          Contacts tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content
        visibility and styling.
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  </>
  )
}

export default Dashboard