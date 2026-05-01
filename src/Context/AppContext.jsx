import React, { createContext, useContext, useState } from 'react';
import { initialTasks, initialNotes, calendarEvents, reminders, aiSuggestions, weatherData } from '../Data/mockdata';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [notes, setNotes] = useState(initialNotes);
  const [events] = useState(calendarEvents);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };
  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };
  const addNote = (note) => {
    setNotes(prev => [...prev, { ...note, id: Date.now(), createdAt: new Date().toISOString().split('T')[0] }]);
  };
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <AppContext.Provider value={{
      tasks, notes, events,
      activeTab, setActiveTab,
      toggleTask, addTask, deleteTask,
      addNote, deleteNote,
      reminders, aiSuggestions, weatherData,
      completedCount, pendingCount,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
