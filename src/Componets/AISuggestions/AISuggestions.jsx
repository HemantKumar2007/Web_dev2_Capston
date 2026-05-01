import React, { useState } from 'react';
import { useApp } from '../../Context/AppContext';
import './AISuggestions.css';

const AISuggestions = () => {
  const { aiSuggestions } = useApp();
  const [dismissed, setDismissed] = useState([]);
  const [chat, setChat] = useState([
    { role: 'ai', text: "Hi! I'm your AI productivity assistant. Ask me anything! 🤖" }
  ]);
  const [input, setInput] = useState('');

  const mockResponses = {
    task: "You have 2 overdue tasks that need attention first!",
    note: "You haven't updated your notes in 2 days. Want to review them?",
    calendar: "You have a React Workshop tomorrow at 10 AM. Prepare tonight!",
    help: "I can help you manage tasks, notes, calendar and give productivity tips!",
    default: "Break this into smaller tasks and tackle them in the morning when you're most focused. 💪"
  };

  const getResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('task')) return mockResponses.task;
    if (lower.includes('note')) return mockResponses.note;
    if (lower.includes('calendar')) return mockResponses.calendar;
    if (lower.includes('help')) return mockResponses.help;
    return mockResponses.default;
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setChat(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'ai', text: getResponse(input) }]);
    }, 800);
  };

  const active = aiSuggestions.filter(s => !dismissed.includes(s.id));

  return (
    <div className="ai-container">
      <div className="task-header">
        <div>
          <h2 className="section-title">🤖 AI Assistant</h2>
          <p className="section-sub">Smart suggestions & productivity AI</p>
        </div>
        <div className="ai-badge">MOCK AI</div>
      </div>

      <div className="suggestions-section">
        <h3 className="sub-heading">Smart Suggestions</h3>
        <div className="suggestions-grid">
          {active.map(s => (
            <div key={s.id} className="suggestion-card">
              <div className="suggestion-top">
                <span className="suggestion-icon">{s.icon}</span>
                <button className="dismiss-btn" onClick={() => setDismissed(d => [...d, s.id])}>✕</button>
              </div>
              <p className="suggestion-text">{s.text}</p>
              <button className="suggestion-action">{s.action} →</button>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-section">
        <h3 className="sub-heading">Chat with AI</h3>
        <div className="chat-box glass">
          <div className="chat-messages">
            {chat.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                {msg.role === 'ai' && <span className="chat-avatar">🤖</span>}
                <div className="chat-bubble"><p>{msg.text}</p></div>
              </div>
            ))}
          </div>
          <div className="chat-input-row">
            <input className="chat-input" placeholder="Ask about tasks, schedule..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} />
            <button className="chat-send" onClick={sendMessage}>Send ➤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISuggestions;
