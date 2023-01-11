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
      <Header text={"탐라 완성"} />
      <div className="container__title">제목</div>
      <div className="container__img-wrap">배경이미지</div>
      <Link to="/decoration">
        <Button text={"하나 더 추가하기"} style={{ marginBottom: "10px" }} />
      </Link>
    </Container>
  );
};

export default Index;
