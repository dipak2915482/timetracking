import React, { useState, useEffect } from 'react';
import Datetime from './Datetime';

const Timer = ({ onSave }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1000);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleSave = () => {
    onSave(title, description, elapsedTime);
    setTitle('');
    setDescription('');
    setElapsedTime(0);
  };

  return (
    <div className="timer">
      <Datetime elapsedTime={elapsedTime} />
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

