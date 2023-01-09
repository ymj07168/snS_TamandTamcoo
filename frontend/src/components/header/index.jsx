import React from "react";
import { Link } from "react-router-dom";
//style
import { Container } from "./style";

const index = (props) => {
  const { text, link } = props;
  return (
    <Container>
      {link && (
        <Link to={link}>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </Link>
      )}
      {text}
    </Container>
  );
};

export default index;
