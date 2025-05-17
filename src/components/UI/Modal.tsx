'use client'
import { useEffect } from "react";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      const soundSticker = new Audio('/sounds/meow.mp3');
      soundSticker.play().catch(error => {
        console.warn('Sound play failed:', error);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container">
        <button type="button" className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
