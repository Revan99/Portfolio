import React, { useState } from "react";
import Navbar from "./components/Menu/Navbar";
import ContactMe from "./sections/ContactMe";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

import "./App.css";
import AboutMe from "./sections/AboutMe";
function App() {
  const [them, setThem] = useState(() => true);
  return (
    <div className="App">
      <Navbar />
      <Home them={them} setThem={setThem} />
      <AboutMe them={them} />
      <Skills them={them} />
      <ContactMe />
    </div>
  );
}

export default App;
