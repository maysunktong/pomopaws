"use client";
import { setMaxListeners } from "events";
import { CirclePause, CirclePlay, CircleStop } from "lucide-react";
import { useState, useEffect } from "react";

const TimerIntervals: TimerInterval[] = [
  { name: "5s", value: 5 },
  { name: "15mins", value: 60 * 15 },
  { name: "30mins", value: 60 * 15 * 2 },
  { name: "1hr", value: 60 * 15 * 2 * 2 },
];

const Timer = () => {
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((s) => {
          if (s <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          } else return s - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const cancelTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatInterval = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const remainderSec = seconds % 60;
    if (min > 0 && remainderSec > 0) return `${min} min ${remainderSec} sec`;
    if (min > 0 && min < 60) return `${min} min`;
    if (min >= 60) return `${min / 60} hr`;
    return `${remainderSec} sec`;
  };

  return (
    <div>
      {TimerIntervals.map((interval, index) => (
        <button
          type="button"
          onClick={() => {
            setSelectedInterval(interval.value);
            if (!isRunning) setTime(interval.value);
          }}
          key={index}
        >
          {interval.name}
        </button>
      ))}
      <div>{formatInterval(time)}</div>
      <button type="button" onClick={startTimer}>
        {isRunning ? <CirclePause color="white" size={48} /> : <CirclePlay color="white" size={48} />}
      </button>
      <button type="button" onClick={cancelTimer}>
        {''}
        <CircleStop color="white" size={48} />
      </button>
    </div>
  );
};
export default Timer;
