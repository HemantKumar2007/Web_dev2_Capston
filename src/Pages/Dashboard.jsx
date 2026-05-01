 import React from 'react';
import { useApp } from '../Context/AppContext';
import TaskList from '../Componets/Tasks/TaskList';
import WeatherWidget from '../Componets/Widgets/WeatherWidget';
import RemindersWidget from '../Componets/Widgets/ReminderWidget';
import './Dashboard.css';

const StatCard = ({ icon, label, value, color, sub }) => (
  <div className="stat-card">
    <div className="stat-icon" style={{ background: `${color}22`, color }}>{icon}</div>
    <div className="stat-body">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {sub && <span className="stat-sub">{sub}</span>}
    </div>
  </div>
);

const Dashboard = () => {
  const { tasks, notes, events, aiSuggestions, completedCount, pendingCount } = useApp();
  const completion = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div className="dashboard">
      <div className="stats-row">
        <StatCard icon="✅" label="Tasks Done" value={completedCount} color="#22d3a5" sub={`${completion}% complete`} />
        <StatCard icon="⏳" label="Pending" value={pendingCount} color="#f59e0b" sub="Need attention" />
        <StatCard icon="📝" label="Notes" value={notes.length} color="#7c5cfc" sub="Saved notes" />
        <StatCard icon="📅" label="Events" value={events.length} color="#5b8af0" sub="This month" />
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Daily Progress</span>
          <span className="progress-pct" style={{ color: '#22d3a5' }}>{completion}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${completion}%` }} />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="grid-col-main"><TaskList /></div>
        <div className="grid-col-side">
          <WeatherWidget />
          <RemindersWidget />
          <div className="quick-ai glass">
            <div className="quick-ai-header">
              <span>🤖</span>
              <span className="quick-ai-title">AI Insight</span>
            </div>
            <p className="quick-ai-text">{aiSuggestions[0]?.text}</p>
            <button className="quick-ai-btn">View All Suggestions →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
