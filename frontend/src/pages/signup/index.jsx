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


  const handleCompleteButton = () => {
    if (params.nickname === "") {
      alert("닉네임을 입력해주세요");
    } else if (params.email === "") {
      alert("이메일을 입력해주세요"); }
      else if (params.password === "") {
        alert("비밀번호를 입력해주세요.")
      }else if (params.check ==="") {
        alert("비밀번호를 확인해주세요.") 
    } else if (params.password !== params.check) {
      alert("비밀번호와 비밀번호 확인란이 다릅니다.");
    } else{
      navigate("/home");
    }
    if (params.password !== params.check) {
      alert("비밀번호와 비밀번호 확인란이 다릅니다.");
    }
  };

  //sns 연동
  const Google = () => {
    navigate("https://www.google.com/");
  }
  const Kakao = () => {
    navigate("https://www.kakaocorp.com/page/");
  }

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
        value={params.password}
        onChange={(e) => onChangeValue("password", e.target.value)}
        style={{ marginTop: "20px" }}
      />
      <input
        placeholder="비밀번호 확인"
        value={params.check}
        onChange={(e) => onChangeValue("check", e.target.value)}
        style={{ marginTop: "20px", marginBottom: "20px"}}
      />

    <div className="others" onClick={Google}>
      <img src={"/image/ico/google.png"} width={20} height ={20} paddingRight={20} />
        구글계정으로 로그인 
      </div>

      <div className="others2" onClick={Kakao} 
      style = {{marginBottom: "30px"}}>
      <img src={"/image/ico/kakao.png"} width={25} height ={25}/>
        카카오톡으로 로그인
      </div>


      <Button
        text={"가입 완료"}
        style={{ marginBottom: "10px" }}
        onClick={handleCompleteButton}
      />
    </Container>
  );
};

export default Index;
