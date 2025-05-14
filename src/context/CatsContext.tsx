"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const CatsContext = createContext<CatsContextType>('');

export function CatsContextProvider({ children }: { children: ReactNode }) {
  const [catStickers, setCatStickers] = useState<string[]>([]);
  return (
    <CatsContext.Provider value={{ catStickers, setCatStickers }}>
      {children}
    </CatsContext.Provider>
  );
}

export const useCatsContext = () => {
  if (!useContext(CatsContext)) {
    throw new Error("useTreeContext must be used within a TreeProvider");
  }
  return useContext(CatsContext);
} 
