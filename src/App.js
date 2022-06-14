import React, { useEffect } from "react";
import { Home } from './pages';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
