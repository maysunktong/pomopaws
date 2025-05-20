'use client'
import { useEffect } from "react";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmitButtonClick,
  buttonText,
  children,
}) => {
  useEffect(() => {
    if (isOpen && buttonText === "Close") {
      const soundSticker = new Audio('/sounds/meow.wav');
      soundSticker.play().catch(error => {
        console.warn('Sound play failed:', error);
      });
    }
  }, [isOpen, buttonText]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmitButtonClick();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onSubmitButtonClick]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevent overlay click from closing modal
      >
        {children}
        <button className="button-main" type="button" onClick={onSubmitButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
