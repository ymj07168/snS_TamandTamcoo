import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Timeline from "./pages/timeline/index";
import Detail from "./pages/detail/index";
import Creation from "./pages/creation/index";
import Decoration from "./pages/decoration/index";
import StickerSelect from "./pages/stickerSelect/index";
import Message from "./pages/message/index";
import Complete from "./pages/complete/index";
import Login from "./pages/login/index";
import Signup from "./pages/signup/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/creation" element={<Creation />} />
      <Route path="/decoration" element={<Decoration />} />
      <Route path="/sticker-select" element={<StickerSelect />} />
      <Route path="/message" element={<Message />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
