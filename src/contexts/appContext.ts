import { createContext, useContext } from "react";
import type { SetStateAction, Dispatch } from "react";

export interface appContext {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  charLength: number;
  setCharLength: Dispatch<SetStateAction<number>>;
  includeLowercase: boolean;
  setIncludeLowercase: Dispatch<SetStateAction<boolean>>;
  includeUppercase: boolean;
  setIncludeUppercase: Dispatch<SetStateAction<boolean>>;
  includeNumbers: boolean;
  setIncludeNumbers: Dispatch<SetStateAction<boolean>>;
  includeSymbols: boolean;
  setIncludeSymbols: Dispatch<SetStateAction<boolean>>;
}

const contextValue: appContext = {
  password: "",
  setPassword: () => {},
  charLength: 0,
  setCharLength: () => {},
  includeLowercase: false,
  setIncludeLowercase: () => {},
  includeUppercase: false,
  setIncludeUppercase: () => {},
  includeNumbers: false,
  setIncludeNumbers: () => {},
  includeSymbols: false,
  setIncludeSymbols: () => {},
};

export const AppContext = createContext(contextValue);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContext Provider");
  }

  return context;
}
