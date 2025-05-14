"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const StickerPickerContext = createContext<StickerPickerContextType | undefined>(undefined);

export function StickerPickerProvider({ children }: { children: ReactNode }) {
  const [selectedSticker, setSelectedSticker] = useState<string>("../cats/read.png");

  return (
    <StickerPickerContext.Provider value={{ selectedSticker, setSelectedSticker }}>
      {children}
    </StickerPickerContext.Provider>
  );
}

export const useStickerPickerContext = () => {
  const context = useContext(StickerPickerContext);
  if (context === undefined) {
    throw new Error("useCatsContext must be used within a CatsContextProvider");
  }
  return context;
};
