import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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

  //api 연동
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('/api/users/register'); 
      console.log(JSON.stringify(response?.data));
      params.nickname('');
      params.email('');
      params.password('');
      params.password_c('');
    } 
    catch (err) {
      console.log(err);
    }
    if (params.nickname === "") {
      alert("닉네임을 입력해주세요");
    } else if (params.email === "") {
      alert("이메일을 입력해주세요"); }
      else if (params.password === "") {
        alert("비밀번호를 입력해주세요.")
      }else if (params.password_c ==="") {
        alert("비밀번호를 확인해주세요.") 
    } else if (params.password !== params.password_c) {
      alert("비밀번호가 서로 다릅니다.");
    } else{
      navigate("/timeline");
    }
    if (params.password !== params.password_c) {
      alert("비밀번호가 서로 다릅니다.");
    }
  };

  return (
    <Container>
      <Header text={"회원가입"} />
      <input
        placeholder="닉네임"
        value={params.nickname}
        onChange={(e) => onChangeValue("nickname", e.target.value)}
        style={{ marginTop: "20px" }}
      />
      <input
        placeholder="이메일"
        value={params.email}
        onChange={(e) => onChangeValue("email", e.target.value)}
        style={{ marginTop: "20px" }}
      />
      <input
        placeholder="비밀번호"
        type="password"
        value={params.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
        style={{ marginTop: "20px" }}
      />
      <input
        placeholder="비밀번호 확인"
        type="password"
        value={params.password_c}
        onChange={(e) => onChangeValue("password_c", e.target.value)}
        style={{ marginTop: "20px", marginBottom: "20px"}}
      />

      <Button
        text={"가입 완료"}
        style={{ marginBottom: "10px" }}
        onClick={handleSubmit}
      />
    </Container>
  );
};

export default Index;
