import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {

  const formatTime = (elapsedTime) => {
    const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Time: {formatTime(task.time)}</p>
          <button
            onClick={() => onDelete(index)}
            style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', borderRadius: '5px', marginRight: '10px' }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              const newTitle = prompt('Enter new title', task.title);
              const newDescription = prompt('Enter new description', task.description);
              if (newTitle && newDescription) {
                onEdit(index, newTitle, newDescription);
              }
            }}
            style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', borderRadius: '5px' }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
