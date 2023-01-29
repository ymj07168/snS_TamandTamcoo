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
  const [params, setParams] = useState({ email: "", password: "" });

  const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
  };


  //api 연동
  const handleSubmit = async(e) => {
    e.preventDefault(); 


    if (params.email === "") {
      alert("이메일을 입력해주세요");
    } else if (params.password === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      try {
        const response = await axios.post('/api/users/login', params); 
        console.log(JSON.stringify(response?.data));
        if (response.data.loginSuccess == true) {
          navigate("/timeline");  
        } else {alert(response.data.message)}
        
      } 
      catch (err) {
        console.log(err);
      }
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
        type="password"
        value={params.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
        style={{ marginTop: "30px", marginBottom: "40px" }} 
      />

      <Button
        text={"로그인"}
        style={{ marginBottom: "15px" }}  
        onClick={handleSubmit}
      />

    </Container>
  );
};

export default Index;
