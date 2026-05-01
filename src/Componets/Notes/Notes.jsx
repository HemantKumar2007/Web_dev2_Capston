import React, { useState } from 'react';
import { useApp } from '../../Context/AppContext';
import './Notes.css';

const COLORS = ['#7c5cfc', '#22d3a5', '#f59e0b', '#f472b6', '#5b8af0', '#f87171'];

const Notes = () => {
  const { notes, addNote, deleteNote } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '', color: '#7c5cfc' });

  const handleAdd = () => {
    if (!newNote.title.trim()) return;
    addNote(newNote);
    setNewNote({ title: '', content: '', color: '#7c5cfc' });
    setShowForm(false);
  };

  return (
    <div className="notes-container">
      <div className="task-header">
        <div>
          <h2 className="section-title">My Notes</h2>
          <p className="section-sub">{notes.length} notes saved</p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancel' : '+ Add Note'}
        </button>
      </div>

      {showForm && (
        <div className="note-form glass">
          <input className="form-input" placeholder="Note title..." value={newNote.title} onChange={e => setNewNote({ ...newNote, title: e.target.value })} />
          <textarea className="form-textarea" placeholder="Write your note here..." value={newNote.content} onChange={e => setNewNote({ ...newNote, content: e.target.value })} rows={4} />
          <div className="color-picker">
            <span className="color-label">Color:</span>
            {COLORS.map(c => (
              <button key={c} className={`color-dot ${newNote.color === c ? 'selected' : ''}`} style={{ background: c }} onClick={() => setNewNote({ ...newNote, color: c })} />
            ))}
          </div>
          <button className="btn-primary" onClick={handleAdd}>Save Note ✓</button>
        </div>
      )}

      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="note-card" style={{ borderTop: `3px solid ${note.color}` }}>
            <div className="note-card-header">
              <h3 className="note-title" style={{ color: note.color }}>{note.title}</h3>
              <button className="note-delete" onClick={() => deleteNote(note.id)}>✕</button>
            </div>
            <p className="note-content">{note.content}</p>
            <span className="note-date">📅 {note.createdAt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
