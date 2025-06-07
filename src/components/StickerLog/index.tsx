"use client";

import { useCatsContext } from "../../context/CatsContext";

const StickerLog = () => {
  const { catStickers, setCatStickers } = useCatsContext();

  const clearCatStickers = () => {
    setCatStickers([]);
  };
  return (
    <div className="stickerlog-container">
      <button type="button" onClick={clearCatStickers} className="button-clear">
        Clear stickers
      </button>
      <div className="stickerlog">
        {catStickers.length > 0 ? (
          catStickers.map((sticker, index) => (
            <img
              key={index}
              src={sticker}
              alt={`Sticker ${index}`}
              width={100}
            />
          ))
        ) : (
          <p>Start a timer to generate a cat ...</p>
        )}
      </div>
    </div>
  );
};
export default StickerLog;
