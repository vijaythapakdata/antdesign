import * as React from 'react';
import { useEffect, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const MyCalendar: React.FC = () => {
  const [calendarEl, setCalendarEl] = useState<HTMLElement | null>(null);
  const [calendar, setCalendar] = useState<Calendar | null>(null);

  useEffect(() => {
    if (calendarEl) {
      const newCalendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth', // Initial view
        headerToolbar: {
          left: 'prev,next today', // Left side buttons
          center: 'title', // Title
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' // Right side buttons
        },
        // Add any additional options here
      });
      setCalendar(newCalendar);
    }
  }, [calendarEl]);

  useEffect(() => {
    if (calendar) {
      calendar.render();
    }
  }, [calendar]);

//   const changeView = (viewName: string) => {
//     if (calendar) {
//       calendar.changeView(viewName);
//     }
//   };

  return (
    <div>
      <div id="calendar" ref={setCalendarEl}></div>
      {calendar && (
        <div>
          {/* <button onClick={() => changeView('dayGridMonth')}>Month</button>
          <button onClick={() => changeView('timeGridWeek')}>Week</button>
          <button onClick={() => changeView('timeGridDay')}>Day</button>
          <button onClick={() => changeView('listWeek')}>List</button> */}
        </div>
      )}
    </div>
  );
};


export default MyCalendar;
