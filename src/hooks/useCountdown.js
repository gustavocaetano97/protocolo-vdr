import { useState, useEffect } from 'react';

/**
 * Custom hook for handling countdown timer functionality
 * @param {number} initialTime - Initial time in seconds
 * @returns {Object} - Timer state and formatted time string
 */
export const useCountdown = (initialTime) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return {
    timeRemaining,
    formattedTime: formatTime(timeRemaining),
    isComplete: timeRemaining === 0
  };
};