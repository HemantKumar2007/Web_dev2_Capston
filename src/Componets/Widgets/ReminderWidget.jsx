import React from 'react';
import { useApp } from '../../Context/AppContext';

const RemindersWidget = () => {
  const { reminders } = useApp();
  return (
    <div className="widget reminders-widget">
      <div className="widget-header">
        <span className="widget-title">⏰ Reminders</span>
        <button className="widget-add">+</button>
      </div>
      <div className="reminders-list">
        {reminders.map(r => (
          <div key={r.id} className={`reminder-item ${r.urgent ? 'urgent' : ''}`}>
            <span className="reminder-dot" />
            <div className="reminder-info">
              <span className="reminder-title">{r.title}</span>
              <span className="reminder-time">{r.time}</span>
            </div>
            {r.urgent && <span className="urgent-tag">Urgent</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemindersWidget;
