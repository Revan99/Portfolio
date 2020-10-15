import React from "react";
import Navbar from "./components/Menu/Navbar";
import Aboutme from "./sections/Aboutme";
import Home from "./sections/Home";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <Aboutme />
    </div>
  );
}

export default App;
