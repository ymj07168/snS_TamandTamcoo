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
  const [params, setParams] = useState({ title: "", message: "" });

  const handleCompleteButton = () => {
    if (params.title === "") {
      alert("제목을 입력해주세요");
    } else if (params.message === "") {
      alert("메세지를 입력해주세요");
    } else {
      navigate("/complete");
    }
  };

  const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
  };

  return (
    <Container>
      <Header text={"메세지"} link={"/decoration"} />
      <input
        placeholder="제목 입력"
        value={params.title}
        onChange={(e) => onChangeValue("title", e.target.value)}
      />
      <textarea
        placeholder="메세지 입력"
        value={params.message}
        onChange={(e) => onChangeValue("message", e.target.value)}
      />

      <Button
        text={"완성"}
        style={{ marginBottom: "10px" }}
        onClick={handleCompleteButton}
      />
    </Container>
  );
};

export default Index;
