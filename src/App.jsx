 import React from 'react';
import { AppProvider, useApp } from './Context/AppContext';
import Sidebar from './Componets/Sidebar/Sidebar';
import Header from './Componets/Header/Header';
import Dashboard from './pages/Dashboard';
import TaskList from './Componets/Tasks/TaskList';
import Notes from './Componets/Notes/Notes';
import Calender from './Componets/Calender/Calendar';
import AISuggestions from './Componets/AIsuggestions/AISuggestions';
import './App.css';

const pageTitles = {
  dashboard: '⚡ Dashboard',
  tasks: '✅ Tasks',
  notes: '📝 Notes',
  calendar: '📅 Calendar',
  ai: '🤖 AI Assistant',
};

const AppContent = () => {
  const { activeTab } = useApp();

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'tasks': return <TaskList />;
      case 'notes': return <Notes />;
      case 'calendar': return <Calendar />;
      case 'ai': return <AISuggestions />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Header title={pageTitles[activeTab]} />
        <main className="app-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
