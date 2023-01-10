import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Decoration from "./pages/decoration/index";
import StickerSelect from "./pages/stickerSelect/index";
import Message from "./pages/message/index";
import Complete from "./pages/complete/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decoration" element={<Decoration />} />
      <Route path="/sticker-select" element={<StickerSelect />} />
      <Route path="/message" element={<Message />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
}

export default App;
