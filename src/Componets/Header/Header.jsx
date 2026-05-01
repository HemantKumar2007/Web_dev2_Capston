import React, { useState } from 'react';
import './Header.css';

const Header = ({ title }) => {
  const [search, setSearch] = useState('');
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const getGreeting = () => {
    const h = now.getHours();
    if (h < 12) return 'Good Morning';
    if (h < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
        <p className="header-date">{getGreeting()} · {dateStr}</p>
      </div>
      <div className="header-right">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search tasks, notes..." value={search} onChange={e => setSearch(e.target.value)} className="search-input" />
        </div>
        <button className="notif-btn">🔔<span className="notif-badge">3</span></button>
        <button className="add-btn">+ New</button>
      </div>
    </header>
  );
};

export default Header;