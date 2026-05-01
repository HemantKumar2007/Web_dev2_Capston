import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import './Calendar.css';

const typeColors = {
  work: '#7c5cfc', meeting: '#5b8af0', personal: '#22d3a5',
  deadline: '#f87171', study: '#f59e0b',
};

const Calendar = () => {
  const { events } = useApp();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getEventsForDay = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => e.date === dateStr);
  };

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="calendar-container">
      <div className="task-header">
        <div>
          <h2 className="section-title">Calendar</h2>
          <p className="section-sub">{events.length} events this month</p>
        </div>
      </div>
      <div className="cal-grid-wrapper">
        <div className="cal-box glass">
          <div className="cal-header">
            <button className="cal-nav" onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>‹</button>
            <h3 className="cal-month">{monthName} {year}</h3>
            <button className="cal-nav" onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>›</button>
          </div>
          <div className="cal-weekdays">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <span key={d} className="weekday">{d}</span>)}
          </div>
          <div className="cal-days">
            {days.map((day, i) => {
              if (!day) return <div key={`e-${i}`} />;
              const dayEvents = getEventsForDay(day);
              const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
              return (
                <div key={day} className={`cal-day ${isToday ? 'today' : ''}`}>
                  <span className="day-num">{day}</span>
                  <div className="day-dots">
                    {dayEvents.slice(0,3).map(e => <span key={e.id} className="event-dot" style={{ background: typeColors[e.type] }} />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="events-list">
          <h3 className="events-title">Upcoming Events</h3>
          {events.map(event => (
            <div key={event.id} className="event-item" style={{ borderLeft: `3px solid ${typeColors[event.type]}` }}>
              <div className="event-info">
                <span className="event-name">{event.title}</span>
                <span className="event-time">📅 {event.date} · {event.time}</span>
              </div>
              <span className="event-type" style={{ color: typeColors[event.type] }}>{event.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;