import React from "react";

//style
import { Container } from "./style";

const Index = (props) => {
  const { text, style } = props;
  return <Container style={style}>{text}</Container>;
};

export default Index;
