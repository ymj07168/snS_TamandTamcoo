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
      //params.loginSuccess('');
    } 
    catch (err) {
      console.log(err);
    }
  }
  const handleCompleteButton = () => {
    navigate (`/decoration?timeline_no=${no}`);
  }

  //로그인 여부에 따라 다르게 home1/ home2 구분
  return (
    <Container>
      <div className = "title"> 탐앤탐꾸 </div>

      <div className="img-wrap">
        <img src={"/image/ico/logo.png"} width={380} height ={330} />
      </div>

      <div className="sub"> 타임라인을 꾸며줘! </div>

      { !no? (
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
          style={{ marginBottom: "20px" }} 
          onClick={handleCompleteButton}
        />
      )}
    </Container>
  );
};

export default Index;
