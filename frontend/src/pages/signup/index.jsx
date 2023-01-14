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
  const [params, setParams] = useState({
    nickname: "",
    email: "",
    password: "",
    check: "",
  });

  const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
  };

  //link 수정하기
  return (
    <Container>
      <Header text={"회원가입"} link={"/decoration"} />
      <input
        placeholder="닉네임"
        value={params.nickname}
        onChange={(e) => onChangeValue("nickname", e.target.value)}
      />
      <input
        placeholder="이메일"
        value={params.email}
        onChange={(e) => onChangeValue("email", e.target.value)}
      />
      <input
        placeholder="비밀번호"
        value={params.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
      />
      <input
        placeholder="비밀번호 확인"
        value={params.check}
        onChange={(e) => onChangeValue("check", e.target.value)}
      />

      <Button
        text={"가입 완료"}
        style={{ marginBottom: "10px" }} //확인후 수정
        //onClick={handleCompleteButton}
      />
    </Container>
  );
};

export default Index;
