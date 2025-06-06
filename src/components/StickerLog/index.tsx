"use client";

import { useCatsContext } from "../../context/CatsContext";

const StickerLog = () => {
  const { catStickers } = useCatsContext();

  return (
    <div>
      <div>
        {catStickers.length > 0 ? (
          catStickers.map((sticker, index) => (
            <img
              key={index}
              src={sticker}
              alt={`Sticker ${index}`}
              width={200}
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
