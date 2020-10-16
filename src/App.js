import React, { useState } from "react";
import Home from "./sections/Home";
// import Skills from "./sections/Skills";

function App() {
  const [them, setThem] = useState(() => true);
  return (
    <div>
      <Home them={them} setThem={setThem} />
      {/* <Skills them={them} /> */}
    </div>
  );
}

export default App;
