"use client";

import { CirclePause, CirclePlay, CircleStop } from "lucide-react";
import { useState, useEffect } from "react";
import { useCatsContext } from "../../context/CatsContext";
import { useStickerPickerContext } from "../../context/StickerPickerContext";
import StickersContainer from "../StickersContainer";
import Modal from "../UI/Modal";
import { useUserContext } from "../../context/UserContext";

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
  const { selectedSticker } = useStickerPickerContext();
  const [hasAwardedSticker, setHasAwardedSticker] = useState(false);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const {
    username,
    nameInput,
    setUsername,
    setNameInput,
    isLoginModalOpen,
    setIsLoginModalOpen
  } = useUserContext();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
      const storedStickers = localStorage.getItem(`stickers_${storedUser}`);
      if (storedStickers) {
        setCatStickers(JSON.parse(storedStickers));
      }
    } else {
      setIsLoginModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem(`stickers_${username}`, JSON.stringify(catStickers));
    }
  }, [catStickers, username]);

  useEffect(() => {
    if (time === 0 && isRunning && selectedInterval) {
      setIsRunning(false);
      if (!hasAwardedSticker) {
        setCatStickers((prev) => [...prev, selectedSticker]);
        setHasAwardedSticker(true);
        setIsRewardModalOpen(true);
      }
      setSelectedInterval(0);
    }
  }, [
    time,
    isRunning,
    selectedInterval,
    selectedSticker,
    setCatStickers,
    hasAwardedSticker,
  ]);

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

  const handleLogin = () => {
    if (nameInput.trim()) {
      localStorage.setItem("username", nameInput.trim());
      setUsername(nameInput.trim());
      setIsLoginModalOpen(false);
      setCatStickers([]);
    } else {
      setUsername("Guest");
      setIsLoginModalOpen(false);
    }
  };

  return (
    <div className="timer-container">
      {isLoginModalOpen && (
        <Modal
          isOpen={isLoginModalOpen}
          onClose={() => setIsRewardModalOpen(false)}
          onSubmitButtonClick={handleLogin}
          buttonText="Log in"
        >
          <h2>Welcome!</h2>
          <p>Please enter your name to begin:</p>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Your name"
          />
        </Modal>
      )}

      {isRewardModalOpen && (
        <Modal
          isOpen={isRewardModalOpen}
          onClose={() => setIsRewardModalOpen(false)}
          onSubmitButtonClick={() => setIsRewardModalOpen(false)}
          buttonText="Close"
        >
          <h2>Great job!</h2>
          <p>You earned a new sticker 🎉</p>
        </Modal>
      )}
      <div>
        <section className="interval-container">
          <div className="interval-container__interval-name">
            {selectedInterval && time > 0
              ? formatInterval(time)
              : "Choose time"}
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
                className="button-main"
              >
                {interval.name}
              </button>
            ))}
          </div>
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
        </section>
        
      </div>
    </div>
  );
};

export default Timer;
