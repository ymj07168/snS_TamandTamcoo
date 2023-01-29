import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios"; 

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");

  const getDB = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.get('/api/users/login'); 
      console.log(JSON.stringify(response?.data));
    } 
    catch (err) {
      console.log(err);
    }
  }
  const handleCompleteButton = () => {
    navigate (`/decoration?timeline_no=${no}`);
  }
  const loginButton = () => {
    navigate ('/login?timeline_no=${no}')
  }
  const registerButton = () => {
    navigate ('/signup?timeline_no=${no}')
  }
  return (
    <Container>
      <div className = "title">
        <img src = {"image/ico/maintitle.png"} width ={360} height ={100}/></div> 

      <div className="img-wrap">
        <img src={"/image/ico/newlogo.png"} width={360} height ={330} />
      </div>

      <div className="sub"> 타임라인을 꾸며줘! </div>

      { !no? (
        <>
          <Button
            text={"로그인"}
            style={{ marginBottom: "10px" }} 
            onClick ={loginButton}
          />
          <Button
            text={"회원가입"}
            style={{ marginBottom: "10px" }} 
            onClick ={registerButton}
          />
        </>
      ) : (
        <Button
          text={"꾸미기"}
          style={{ marginBottom: "20px" }} 
          onClick={handleCompleteButton}
        />
      )}
    </Container>
  );
};

export default Index;
