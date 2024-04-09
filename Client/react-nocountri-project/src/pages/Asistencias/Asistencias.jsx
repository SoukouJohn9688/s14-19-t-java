import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

export default function App() {
  // initial state
  const [events, setEvents] = useState([
    { id: "1", title: "Event 1" },
    { id: "2", title: "Event 2" }
  ]);

  const [allEvents, setAllEvents] = useState([]);
  const [showmodal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDays: false,
    id: 0
  });

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    if (draggableEl) {
      console.log("entre aqui");
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          return { title, id, start }
        }
      })
    }
  }, [])


  return (
    <div>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "resourceTimelineWook,dayGridMonth,timeGridWeek"
        }}
        events={{}}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
      // dateClick={{}}
      // drop={{}}
      // eventClick={{}}
      />
      <div id="draggable-el">
        <h1>Drag events</h1>
        {
          events.map(event => (
            <div
            className="fc-event"
              title={event.title}
              key={event.id}
            >
              {event.title}
            </div>
          ))
        }
      </div>
    </div>
  );
}
