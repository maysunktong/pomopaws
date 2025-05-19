'use client'
import { useEffect } from "react";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmitButtonClick, buttonText, children }) => {
  useEffect(() => {
    if (isOpen && buttonText === "Close") {
      const soundSticker = new Audio('/sounds/meow.wav');
      soundSticker.play().catch(error => {
        console.warn('Sound play failed:', error);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container">
        {children}
        <button className="button-main" type="button" onClick={onSubmitButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Modal;
