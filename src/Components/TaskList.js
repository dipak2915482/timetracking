// TaskList.js
import React from 'react';
const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Time Tracked: {Math.floor(task.time / 60000)} minutes {((task.time % 60000) / 1000).toFixed(0)} seconds</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
