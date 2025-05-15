"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const CatArrayContext = createContext<CatsContextType | undefined>(undefined);

export function CatsContextProvider({ children }: { children: ReactNode }) {
  const [catStickers, setCatStickers] = useState<string[]>([]);
  return (
    <CatArrayContext.Provider value={{ catStickers, setCatStickers }}>
      {children}
    </CatArrayContext.Provider>
  );
}

export const useCatsContext = () => {
  const context = useContext(CatArrayContext);
  if (context === undefined) {
    throw new Error("useCatsContext must be used within a CatsContextProvider");
  }
  return context;
};
