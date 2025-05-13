"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const CatsContext = createContext<CatsContextType | undefined>(undefined);

export function TreeProvider({ children }: { children: ReactNode }) {
  const [cats, setCats] = useState<string[]>([]);
  return (
    <CatsContext.Provider value={{ cats, setCats}}>
      {children}
    </CatsContext.Provider>
  );
}

export const useCatsContext = () => useContext(CatsContext);
