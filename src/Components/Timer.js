import React, { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay'; // Import the TimeDisplay component

const Timer = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleStart = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
    }, 1000);
    setIntervalId(id);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const handleSave = () => {
    if (title && description) {
      onSave(title, description, elapsedTime);
      setTitle('');
      setDescription('');
      setElapsedTime(0);
      setIsRunning(false);
      clearInterval(intervalId);
    } else {
      alert('Please enter both title and description');
    }
  };

  return (
    <div className="timer">
      <TimeDisplay elapsedTime={elapsedTime} />
      <button
        type="button"
        className="btn"
        style={{ borderRadius: '15px', backgroundColor: '#4caf50', padding: '10px 20px', margin: '5px' }}
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        type="button"
        className="btn"
        style={{ borderRadius: '15px', backgroundColor: '#ff9800', padding: '10px 20px', margin: '5px' }}
        onClick={handlePause}
        disabled={!isRunning}
      >
        Pause
      </button>
      <button
        type="button"
        className="btn"
        style={{ borderRadius: '15px', backgroundColor: '#2196f3', padding: '10px 20px', margin: '5px' }}
        onClick={handleSave}
      >
        Save
      </button>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mt-3"
        placeholder="Enter task description"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Timer;
