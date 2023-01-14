import React, { useState } from "react";
import { Link } from "react-router-dom";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

//로고, style 다시
const Index = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container>
      <Header text={"탐앤탐꾸"} />

      <div className="container__img-wrap">로고 사진</div>

      <div sub> 나만의 타임라인을 꾸며줘! </div>

      {isLogin ? (
        <>
          <Button
            text={"로그인"}
            style={{ marginBottom: "10px" }} //나중에 수정하기
            //onClick={handleCompleteButton}
          />
          <Button
            text={"회원가입"}
            style={{ marginBottom: "10px" }} //나중에 수정하기
            //onClick={handleCompleteButton}
          />
        </>
      ) : (
        <Button
          text={"꾸미기"}
          style={{ marginBottom: "30px" }} //나중에 수정하기
          //onClick={handleCompleteButton}
        />
      )}
    </Container>
  );
};

export default Index;
