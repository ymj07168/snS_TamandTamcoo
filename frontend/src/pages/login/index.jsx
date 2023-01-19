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

  //api연동..
  const handleCompleteButton = () => {
    if (params.email === "") {
      alert("이메일을 입력해주세요");
    } else if (params.message === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      navigate("/home");
    }
  };

  return (
    <Container>
      <Header text={"로그인"}/>
      <input
        placeholder="이메일"
        value={params.email}
        onChange={(e) => onChangeValue("email", e.target.value)}
        style={{ marginTop: "100px" }} 
      />
      <input
        placeholder="비밀번호"
        value={params.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
        style={{ marginTop: "30px", marginBottom: "40px" }} 
      />

      <Button
        text={"로그인"}
        style={{ marginBottom: "15px" }}  
        onClick={handleCompleteButton}
      />

      <div className="others">
      <img src={"/image/ico/google.png"} width={20} height ={20} paddingRight={20} />
        구글계정으로 로그인 
      </div>
      <div className="others2">
      <img src={"/image/ico/kakao.png"} width={25} height ={25} marginRight />
        카카오톡으로 로그인 
      </div>

    </Container>
  );
};

export default Index;
