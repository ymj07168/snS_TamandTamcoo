import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const { state } = useLocation();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleStickerDrag = (position) => {
    setPosition({ x: position.x, y: position.y });
  };

  return (
    <Container position={position}>
      <Header text={"탐라 꾸미기"} />
      <div className="container__title">제목</div>
      <div className="img-wrap">
        <img src={""} className="img-wrap__bg" />
        {state && (
          <Draggable
            onDrag={(e, data) => handleStickerDrag(data)}
            bounds={"parent"}
          >
            <img src={state} className="img-wrap__sticker" />
          </Draggable>
        )}
      </div>
      <Link to="/sticker-select">
        <Button text={"스티커 선택하기"} style={{ marginBottom: "10px" }} />
      </Link>
      <Link to="/message">
        <Button text={"메세지 작성하기"} />
      </Link>
    </Container>
  );
};

export default Index;
