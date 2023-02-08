import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

//component
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleCompleteButton = () => {
    navigate(`/decoration?timeline_no=${no}`);
  };
  const loginButton = () => {
    navigate("/login");
  };
  const registerButton = () => {
    navigate("/signup");
  };
  return (
    <Container>
      <div className="title">
        <img
          src={"image/ico/maintitle.png"}
          width={"90%"}
          height={"auto"}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="img-wrap">
        <img
          src={"/image/ico/newlogo.png"}
          width={"90%"}
          height={"auto"}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="sub"> 타임라인을 꾸며줘! </div>

      {!no ? (
        <>
          <Button
            text={"로그인"}
            style={{ marginBottom: "10px" }}
            onClick={loginButton}
          />
          <Button
            text={"회원가입"}
            style={{ marginBottom: "10px" }}
            onClick={registerButton}
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
