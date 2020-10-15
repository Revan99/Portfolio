import React from "react";
import Navbar from "./components/Menu/Navbar";
import Aboutus from "./sections/Aboutus";
import Home from "./sections/Home";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <Aboutus />
    </div>
  );
}

export default App;
