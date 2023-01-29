import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState({ title: "", message: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");

  const handleCompleteButton = () => {
    if (params.title === "") {
      alert("제목을 입력해주세요");
    } else if (params.message === "") {
      alert("메세지를 입력해주세요");
    } else {
      createParts();
    }
  };

  const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
  };

  const createParts = async () => {
    const position = JSON.parse(localStorage.getItem("position"));
    const parts = localStorage.getItem("parts");
    const api_params = {
      tid: no,
      message: params.message,
      loc_x: position.x,
      loc_y: position.y,
      parts: parts,
    };
    try {
      const res = await axios.post("/api/contents/create", api_params);
      localStorage.clear();
      alert("추가가 완료되었습니다.");
      navigate("/complete");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header text={"메세지"} link={`/decoration?timeline_no=${no}`} />
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
