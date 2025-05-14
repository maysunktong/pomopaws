'use client'

import { useCatsContext } from "../../context/CatsContext";

const CatStickerContainer = () => {
  const { catStickers } = useCatsContext();

  return (
    <div>
      {catStickers.length > 0 ? (
        catStickers.map((sticker, index) => (
          <span key={index} className="text-2xl">
            {sticker}
          </span>
        ))
      ) : (
        <p>No sticker yet</p>
      )}
    </div>
  );
};
export default CatStickerContainer;
