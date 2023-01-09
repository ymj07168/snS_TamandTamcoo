import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const [sticker, setSticker] = useState("");
  return (
    <Container>
      <Header text={"탐라 꾸미기"} />
      <div className="container__title">제목</div>
      <div className="img-wrap">
        <img src={""} className='img-wrap__bg'/>
        <img src={sticker} className='img-wrap__sticker'/>
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
