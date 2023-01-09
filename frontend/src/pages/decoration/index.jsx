import React from "react";
import { Link } from "react-router-dom";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  return (
    <Container>
      <Header text={"탐라 꾸미기"} />
      <div className="container__title">제목</div>
      <div className="container__img-wrap">배경이미지</div>
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
