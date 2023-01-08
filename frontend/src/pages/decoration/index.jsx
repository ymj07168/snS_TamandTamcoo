import React from "react";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <Header text={"탐라 꾸미기"} />
      <Button text={"스티커 선택하기"} />
    </Container>
  );
};

export default index;
