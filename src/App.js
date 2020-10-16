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
      <Navbar />
      <Home></Home>
      <ContactMe />
      <Home them={them} setThem={setThem} />
      {/* <Skills them={them} /> */}
    </div>
  );
}

export default App;
