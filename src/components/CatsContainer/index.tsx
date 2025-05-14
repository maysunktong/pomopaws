'use client'

import { useCatsContext } from "../../context/CatsContext";

const CatStickerContainer = () => {
  const { catStickers } = useCatsContext();

  return (
    <div>
      {catStickers.length > 0 ? (
        catStickers.map((sticker, index) => (
          <img
            key={index}
            src={sticker}
            alt={`Sticker ${index}`}
            width={50}
            height={50}
            className="rounded"
          />
        ))
      ) : (
        <p>No sticker yet</p>
      )}
    </div>
  );
};
export default CatStickerContainer;
