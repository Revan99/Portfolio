import React, { useState } from "react";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Project from "./sections/Projects";

import Navbar from "./components/Menu/Navbar";
import ContactMe from "./sections/ContactMe";
import "./App.css";
import AboutMe from "./sections/AboutMe";
function App() {
  const [them, setThem] = useState(() => true);
  return (
    <div className="App">
      <Navbar them={them} />
      <Home them={them} setThem={setThem} />
      <AboutMe them={them} />
      <Skills them={them} />
      <Project them={them} />
      <ContactMe them={them} />
    </div>
  );
}

export default App;
