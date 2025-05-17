"use client";

import { CirclePause, CirclePlay, CircleStop } from "lucide-react";
import { useState, useEffect } from "react";
import { useCatsContext } from "../../context/CatsContext";
import { useStickerPickerContext } from "../../context/StickerPickerContext";
import StickersContainer from "../StickersContainer";
import Modal from "../UI/Modal";

const TimerIntervals: TimerInterval[] = [
  { name: "Test", value: 3 },
  { name: "15mins", value: 60 * 15 },
  { name: "30mins", value: 60 * 15 * 2 },
  { name: "1hr", value: 60 * 15 * 2 * 2 },
];

const Timer = () => {
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { catStickers, setCatStickers } = useCatsContext();
  const { selectedSticker, setSelectedSticker } = useStickerPickerContext();
  const [hasAwardedSticker, setHasAwardedSticker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (time === 0 && isRunning && selectedInterval) {
      setIsRunning(false);
      setCatStickers((prev) => [...prev, selectedSticker]);
      setHasAwardedSticker(true);
      setSelectedInterval(0);
      setIsModalOpen(true);
    }
  }, [time, isRunning, selectedSticker, setCatStickers, selectedInterval]);

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
    if (isRunning) {
      setIsRunning(false);
    } else if (time > 0) {
      setHasAwardedSticker(false);
      setIsRunning(true);
    }
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
    <div className="timer-container">
      <section className="interval-container">
        <div>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <h2>Modal Title</h2>
              <p>This is modal content.</p>
            </Modal>
          )}
        </div>
        <div className="interval-container__interval-name">
          {selectedInterval && time > 0 ? formatInterval(time) : "Choose time"}
        </div>
        <StickersContainer isRunning={isRunning} />
        <div className="interval-container__interval-variants">
          {TimerIntervals.map((interval, index) => (
            <button
              type="button"
              onClick={() => {
                setSelectedInterval(interval.value);
                if (!isRunning) setTime(interval.value);
              }}
              key={index}
              className="btn-interval"
            >
              {interval.name}
            </button>
          ))}
        </div>
      </section>
      <section className="btn-playback">
        <button type="button" onClick={startTimer}>
          {isRunning ? (
            <CirclePause color="lightgray" size={60} />
          ) : (
            <CirclePlay color="#81b29a" size={60} />
          )}
        </button>
        <button type="button" onClick={cancelTimer}>
          {""}
          <CircleStop color="gray" size={60} />
        </button>
      </section>
    </div>
  );
};
export default Timer;
