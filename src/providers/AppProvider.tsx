import { useState, type ReactNode } from "react";

import { AppContext } from "contexts/appContext";

function AppProvider({ children }: { children: ReactNode }) {
  const [charLength, setCharLength] = useState(1);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [incNumbers, setIncNumbers] = useState(true);
  const [incSymbols, setIncSymbols] = useState(false);

  const contextValue = {
    charLength,
    setCharLength,
    lowerCase,
    setLowerCase,
    upperCase,
    setUpperCase,
    incNumbers,
    setIncNumbers,
    incSymbols,
    setIncSymbols,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
