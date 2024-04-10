import  { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarioAsistencia = () => {
  const [events, setEvents] = useState([]);

  const handleEventDrop = (eventDropInfo) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventDropInfo.event.id) {
        return {
          ...event,
          start: eventDropInfo.event.start,
          end: eventDropInfo.event.end || eventDropInfo.event.start
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleEventResize = (eventResizeInfo) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventResizeInfo.event.id) {
        return {
          ...event,
          start: eventResizeInfo.event.start,
          end: eventResizeInfo.event.end
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter event title:");
    if (title) {
      const newEvent = {
        id: Math.random().toString(36).substr(2, 9),
        title: title,
        start: selectInfo.startStr,
        end: selectInfo.endStr || selectInfo.startStr
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        select={handleDateSelect}
      />
    </div>
  );
};

export default CalendarioAsistencia;
