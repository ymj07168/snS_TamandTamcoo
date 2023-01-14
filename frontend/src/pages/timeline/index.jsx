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
      <Header text={"타임라인"} link={"/"} />
      <Link to="/creation">
        <Button text={"타임라인 추가하기"} style={{ marginBottom: "10px" }} />
      </Link>
    </Container>
  );
};

export default Index;
