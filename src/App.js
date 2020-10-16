import React, { useState } from "react";
import Home from "./sections/Home";
// import Skills from "./sections/Skills";
import Navbar from "./components/Menu/Navbar";
import ContactMe from "./sections/ContactMe";
import "./App.css";
function App() {
  const [them, setThem] = useState(() => true);
  return (
    <div className="App">
      <Navbar them={them} />
      <Home them={them} setThem={setThem} />
      <ContactMe them={them} />

      {/* <Skills them={them} /> */}
    </div>
  );
}

export default App;
