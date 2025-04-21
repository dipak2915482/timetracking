import React from 'react';

const TimeDisplay = ({ elapsedTime }) => {
  const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');

  return (
    <div className="time-display">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default TimeDisplay;
