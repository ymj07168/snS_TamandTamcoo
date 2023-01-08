import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Decoration from "./pages/decoration/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decoration" element={<Decoration />} />
    </Routes>
  );
}

export default App;
