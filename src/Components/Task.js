import React from 'react';
const Task = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Time Tracked: {task.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
