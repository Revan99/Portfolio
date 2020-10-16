import React from "react";
import Navbar from "./components/Menu/Navbar";
import ContactMe from "./sections/ContactMe";
import Home from "./sections/Home";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <ContactMe />
    </div>
  );
}

export default App;
