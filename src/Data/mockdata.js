export const initialTasks = [
  { id: 1, title: "Design landing page wireframe", priority: "high", completed: false, category: "Design", dueDate: "2026-04-29" },
  { id: 2, title: "Review pull requests on GitHub", priority: "medium", completed: false, category: "Dev", dueDate: "2026-04-28" },
  { id: 3, title: "Write unit tests for auth module", priority: "high", completed: true, category: "Dev", dueDate: "2026-04-27" },
  { id: 4, title: "Prepare weekly team standup notes", priority: "low", completed: false, category: "Meeting", dueDate: "2026-04-30" },
  { id: 5, title: "Update portfolio with new projects", priority: "medium", completed: false, category: "Personal", dueDate: "2026-05-01" },
];

export const initialNotes = [
  { id: 1, title: "React Performance Tips", content: "Use React.memo for expensive components. Avoid anonymous functions in render. Use useCallback and useMemo wisely.", color: "#7c5cfc", createdAt: "2026-04-25" },
  { id: 2, title: "Project Ideas Brainstorm", content: "AI Dashboard, E-commerce, Resume Builder, Chat App. Focus on portfolio quality projects only.", color: "#22d3a5", createdAt: "2026-04-26" },
  { id: 3, title: "Interview Prep Notes", content: "DSA practice, System design basics, React hooks deep dive, CSS flexbox/grid mastery.", color: "#f59e0b", createdAt: "2026-04-27" },
];

export const calendarEvents = [
  { id: 1, title: "React Workshop", date: "2026-04-28", time: "10:00 AM", type: "work" },
  { id: 2, title: "Team Code Review", date: "2026-04-29", time: "2:00 PM", type: "meeting" },
  { id: 3, title: "Gym Session", date: "2026-04-30", time: "7:00 AM", type: "personal" },
  { id: 4, title: "Project Deadline", date: "2026-05-01", time: "11:59 PM", type: "deadline" },
  { id: 5, title: "DSA Practice", date: "2026-05-02", time: "9:00 AM", type: "study" },
];

export const reminders = [
  { id: 1, title: "Submit assignment", time: "Today 5:00 PM", urgent: true },
  { id: 2, title: "Drink water 💧", time: "Every 2 hours", urgent: false },
  { id: 3, title: "Team standup call", time: "Tomorrow 10:00 AM", urgent: false },
  { id: 4, title: "Pay monthly subscription", time: "Apr 30", urgent: true },
];

export const aiSuggestions = [
  { id: 1, icon: "🎯", text: "You have 2 high-priority tasks due today. Start with 'Review pull requests' as it blocks others.", action: "Focus Mode" },
  { id: 2, icon: "🧠", text: "You're most productive at 9–11 AM based on your pattern. Schedule deep work now!", action: "Block Time" },
  { id: 3, icon: "⚡", text: "3 tasks are overdue. Want me to reschedule them to this week?", action: "Auto-Reschedule" },
  { id: 4, icon: "📚", text: "You haven't added notes in 2 days. Capture your ideas while they're fresh.", action: "Quick Note" },
];

export const weatherData = {
  city: "Mumbai",
  temp: 32,
  condition: "Partly Cloudy",
  humidity: 78,
  wind: 14,
  icon: "⛅",
  forecast: [
    { day: "Tue", icon: "🌤️", high: 33, low: 26 },
    { day: "Wed", icon: "🌧️", high: 29, low: 24 },
    { day: "Thu", icon: "⛈️", high: 27, low: 23 },
    { day: "Fri", icon: "🌤️", high: 31, low: 25 },
  ]
};