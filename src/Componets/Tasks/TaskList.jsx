 import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import TaskItem from './TaskItem';
import './Tasks.css';

const TaskList = () => {
  const { tasks, addTask } = useApp();
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', priority: 'medium', category: 'Dev', dueDate: '' });

  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'done') return t.completed;
    return true;
  });

  const handleAdd = () => {
    if (!newTask.title.trim()) return;
    addTask({ ...newTask, completed: false });
    setNewTask({ title: '', priority: 'medium', category: 'Dev', dueDate: '' });
    setShowForm(false);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <div>
          <h2 className="section-title">My Tasks</h2>
          <p className="section-sub">{tasks.filter(t => !t.completed).length} pending · {tasks.filter(t => t.completed).length} completed</p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancel' : '+ Add Task'}
        </button>
      </div>

      {showForm && (
        <div className="task-form glass">
          <input className="form-input" placeholder="Task title..." value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
          <div className="form-row">
            <select className="form-select" value={newTask.priority} onChange={e => setNewTask({ ...newTask, priority: e.target.value })}>
              <option value="high">🔴 High</option>
              <option value="medium">🟡 Medium</option>
              <option value="low">🟢 Low</option>
            </select>
            <select className="form-select" value={newTask.category} onChange={e => setNewTask({ ...newTask, category: e.target.value })}>
              <option>Dev</option><option>Design</option><option>Meeting</option><option>Personal</option><option>Study</option>
            </select>
            <input type="date" className="form-select" value={newTask.dueDate} onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })} />
          </div>
          <button className="btn-primary" onClick={handleAdd}>Add Task ✓</button>
        </div>
      )}

      <div className="filter-tabs">
        {['all', 'active', 'done'].map(f => (
          <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="task-list">
        {filtered.length === 0 && <div className="empty-state">🎉 No tasks here!</div>}
        {filtered.map(task => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default TaskList;