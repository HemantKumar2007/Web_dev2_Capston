import React from 'react';
import { useApp } from '../../context/AppContext';

const priorityConfig = {
  high: { color: '#f87171', label: 'High', dot: '🔴' },
  medium: { color: '#f59e0b', label: 'Medium', dot: '🟡' },
  low: { color: '#22d3a5', label: 'Low', dot: '🟢' },
};

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useApp();
  const p = priorityConfig[task.priority];

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <button className={`task-checkbox ${task.completed ? 'checked' : ''}`} onClick={() => toggleTask(task.id)}>
        {task.completed ? '✓' : ''}
      </button>
      <div className="task-content">
        <span className="task-title">{task.title}</span>
        <div className="task-meta">
          <span className="task-category">{task.category}</span>
          {task.dueDate && <span className="task-due">📅 {task.dueDate}</span>}
          <span className="task-priority" style={{ color: p.color }}>{p.dot} {p.label}</span>
        </div>
      </div>
      <button className="task-delete" onClick={() => deleteTask(task.id)}>✕</button>
    </div>
  );
};

export default TaskItem;