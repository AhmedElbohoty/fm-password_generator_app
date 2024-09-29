import { ReactNode } from "react";

import AppProvider from "providers/AppProvider";

function Providers({ children }: { children: ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export default Providers;
