import React from "react";

//style
import { Container } from "./style";

const Index = (props) => {
  const { text, style, onClick } = props;
  return (
    <Container style={style} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Index;
