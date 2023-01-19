import React, { useState } from "react";
import { Link } from "react-router-dom";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container>
      <div className = "title"> 탐앤탐꾸 </div>

      <div className="img-wrap">
        <img src={"/image/ico/logo.png"} width={400} height ={350} />
      </div>

      <div className="sub"> 나만의 타임라인을 꾸며줘! </div>

      {isLogin ? (
        <>
          <Button
            text={"로그인"}
            style={{ marginBottom: "10px" }} 
            //onClick={handleCompleteButton}
          />
          <Button
            text={"회원가입"}
            style={{ marginBottom: "10px" }} 
            //onClick={handleCompleteButton}
          />
        </>
      ) : (
        <Button
          text={"꾸미기"}
          style={{ marginBottom: "30px" }} 
          //onClick={handleCompleteButton}
        />
      )}
    </Container>
  );
};

export default Index;

