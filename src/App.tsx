import HomePage from "pages/HomePage/HomePage";
import Providers from "providers/Providers";

import "styles/base.css";

function App() {
  return (
    <Providers>
      <HomePage />
    </Providers>
  );
}

export default App;
