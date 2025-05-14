"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const CatsContext = createContext<CatsContextType | undefined>(undefined);

export function CatsContextProvider({ children }: { children: ReactNode }) {
  const [catStickers, setCatStickers] = useState<string[]>([]);
  return (
    <CatsContext.Provider value={{ catStickers, setCatStickers }}>
      {children}
    </CatsContext.Provider>
  );
}

export const useCatsContext = () => {
  const context = useContext(CatsContext);
  if (context === undefined) {
    throw new Error("useCatsContext must be used within a CatsContextProvider");
  }
  return context;
};
