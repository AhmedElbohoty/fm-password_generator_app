import { createContext, useContext } from "react";
import type { SetStateAction, Dispatch } from "react";

interface appContext {
  charLength: number;
  setCharLength: Dispatch<SetStateAction<number>>;
  lowerCase: boolean;
  setLowerCase: Dispatch<SetStateAction<boolean>>;
  upperCase: boolean;
  setUpperCase: Dispatch<SetStateAction<boolean>>;
  incNumbers: boolean;
  setIncNumbers: Dispatch<SetStateAction<boolean>>;
  incSymbols: boolean;
  setIncSymbols: Dispatch<SetStateAction<boolean>>;
}

const contextValue: appContext = {
  charLength: 0,
  setCharLength: () => {},
  lowerCase: false,
  setLowerCase: () => {},
  upperCase: false,
  setUpperCase: () => {},
  incNumbers: false,
  setIncNumbers: () => {},
  incSymbols: false,
  setIncSymbols: () => {},
};

export const AppContext = createContext(contextValue);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContext Provider");
  }

  return context;
}
