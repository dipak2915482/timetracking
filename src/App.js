import React, { useState, useEffect } from 'react';
import './Components/Task';
import Timer from './/Components/Timer';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (title, description, time) => {
    setTasks([...tasks, { title, description, time }]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleEditTask = (index, title, description) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, title, description } : task));
  };

  return (
    <div className="app">
      <h1>Task Timer</h1>
      <Timer onSave={handleSaveTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
