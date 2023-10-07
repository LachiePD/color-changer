"use client";
import { createContext, useContext, useState } from "react";

export const SelectedColorContext = createContext(null);
export const ButtonListenerContext = createContext(null);
export const AppContext = ({ children }) => {
  const [color, setSelectedColor] = useState('blue')
  const [triggered, setTriggered] = useState('false');
  return (
    <SelectedColorContext.Provider value={{ color, setSelectedColor }}>
    <ButtonListenerContext.Provider value={{triggered, setTriggered}}>
      {children}
    </ButtonListenerContext.Provider>
    </SelectedColorContext.Provider>
  );
};
