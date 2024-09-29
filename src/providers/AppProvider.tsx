import { useState, type ReactNode } from "react";

import { AppContext } from "contexts/appContext";

function AppProvider({ children }: { children: ReactNode }) {
  const [password, setPassword] = useState("");
  const [charLength, setCharLength] = useState(3);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const contextValue = {
    password,
    setPassword,
    charLength,
    setCharLength,
    includeLowercase,
    setIncludeLowercase,
    includeUppercase,
    setIncludeUppercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
