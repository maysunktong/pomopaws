'use client'

import { useState } from "react";
import { useStickerPickerContext } from "../../context/StickerPickerContext";

const Stickers = [
  { name: "fasting", icon: "../cats/hungry.png" },
  { name: "practise", icon: "../cats/hunt.png" },
  { name: "procrastinate", icon: "../cats/playful.png" },
  { name: "read", icon: "../cats/read.png" },
  { name: "research", icon: "../cats/trash.png" },
  { name: "socialize", icon: "../cats/phone.png" },
  { name: "study", icon: "../cats/study.png" },
  { name: "work", icon: "../cats/work.png" },
];

const StickersContainer = () => {
  const { selectedSticker, setSelectedSticker } = useStickerPickerContext();
  const [isStickerPanelOpen, setIsStickerPanelOpen] = useState(false);

  return (
    <div className="sticker-picker">
      <button
        type="button"
        onClick={() => setIsStickerPanelOpen(!isStickerPanelOpen)}
        className="sticker-picker__button"
      >
        {selectedSticker && <img src={selectedSticker} alt="Selected sticker" width={200} />}
        
      </button>
      {isStickerPanelOpen && (
        <ul className="sticker-picker__dropdown">
          {Stickers.map((sticker, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedSticker(sticker.icon);
                setIsStickerPanelOpen(false);
              }}
              className="sticker-picker__item"
            >
              <img src={sticker.icon} alt={sticker.name} width={50} />
              <span>{sticker.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StickersContainer;
