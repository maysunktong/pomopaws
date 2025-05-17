"use client";

import { useCatsContext } from "../../context/CatsContext";

const CatStickerContainer = () => {
  const { catStickers } = useCatsContext();

  return (
    <div className="cats-container">
      <div className="cats-container__inner">
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
export default CatStickerContainer;
