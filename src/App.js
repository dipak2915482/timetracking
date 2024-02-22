import React, { useState } from 'react';
import Timer from './Components/Timer';
import TaskList from './Components/TaskList'; // Corrected import statement

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (title, description, time) => {
    setTasks([...tasks, { title, description, time }]);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Time Tracking</h1>
      <Timer onSave={handleSaveTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
