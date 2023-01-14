import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState({ email: "", password: "" });

  const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
  };

  //link 확인
  return (
    <Container>
      <Header text={"로그인"} link={"/decoration"} />
      <input
        placeholder="이메일"
        value={params.email}
        onChange={(e) => onChangeValue("email", e.target.value)}
      />
      <input
        placeholder="메시지 입력"
        value={params.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
      />

      <Button
        text={"로그인"}
        style={{ marginBottom: "10px" }} //확인 후 수정 
        onClick={handleCompleteButton}
      />
    </Container>
  );
};

export default Index;
