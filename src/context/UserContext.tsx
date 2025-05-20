"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    } else {
      setIsLoginModalOpen(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        username,
        nameInput,
        isLoginModalOpen,
        setUsername,
        setNameInput,
        setIsLoginModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within UserProvider");
  return context;
};
