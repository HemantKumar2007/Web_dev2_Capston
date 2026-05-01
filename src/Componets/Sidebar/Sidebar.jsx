import React from 'react';
import { useApp } from '../../context/AppContext';
import './Sidebar.css';

const navItems = [
  { id: 'dashboard', icon: '⚡', label: 'Dashboard' },
  { id: 'tasks', icon: '✅', label: 'Tasks' },
  { id: 'notes', icon: '📝', label: 'Notes' },
  { id: 'calendar', icon: '📅', label: 'Calendar' },
  { id: 'ai', icon: '🤖', label: 'AI Assistant' },
];

const Sidebar = () => {
  const { activeTab, setActiveTab, completedCount, pendingCount } = useApp();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">⚡</div>
        <div className="logo-text">
          <span className="logo-name">TaskFlow</span>
          <span className="logo-sub">Productivity Suite</span>
        </div>
      </div>

      <div className="sidebar-profile">
        <div className="avatar">HK</div>
        <div className="profile-info">
          <span className="profile-name">Hemant Kumar</span>
          <span className="profile-role">Developer</span>
        </div>
        <div className="status-dot" />
      </div>

      <div className="sidebar-stats">
        <div className="stat-pill">
          <span className="stat-num green">{completedCount}</span>
          <span className="stat-lbl">Done</span>
        </div>
        <div className="stat-pill">
          <span className="stat-num orange">{pendingCount}</span>
          <span className="stat-lbl">Pending</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <span className="nav-label">MENU</span>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.label}</span>
            {activeTab === item.id && <div className="nav-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="settings-btn">⚙️ Settings</button>
      </div>
    </aside>
  );
};

export default Sidebar;