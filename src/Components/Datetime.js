// Datetime.js
import React, { useState, useEffect } from 'react';

const Datetime = ({ elapsedTime }) => {
  const [time, setTime] = useState(new Date(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(time.getTime() + 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');

  return (
    <div className="datetime">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Datetime;
