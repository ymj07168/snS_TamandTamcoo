import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//component
import Button from "../../components/button/index";
import Header from "../../components/header/index";

//style
import { Container, SliderContainer } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState({ title: "" });
  const [list, setList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    getList();
  }, []);

  //배경목록 가져오는 api 호출하는 함수
  const getList = async () => {
    try {
      const res = await axios.get(`/api/backgrounds`);
      setList(res.data.backgrounds);
    } catch (err) {
      console.log(err);
    }
  };

  //타임라인 생성 api 호출하는 함수
  const createTimeline = async () => {
    const api_params = { ...params, bid: list[currentSlide]._id };
    try {
      const res = await axios.post(`/api/timelines/create`, api_params);
      if (res.data.success) {
        handleCopyClipBoard(
          `http://54.65.17.182:5000?timeline_no=${res.data.timelines[0]._id}`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  //저장버튼 누르면 호출되는 함수
  const handleSaveButton = () => {
    if (params.title === "") {
      alert("제목을 입력해주세요");
    } else {
      createTimeline(navigate.path);
    }
  };

  //params값 변경하는 함수
  const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
  };

  //현재 보여지고 있는 슬라이드 인덱스 관리하는 함수
  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  //클립보드에 텍스트 복사하는 함수
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 공유 링크가 복사되었습니다.");
      navigate(`/timeline`);
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Header text={"생성하기"} link={"/timeline"} />
      <input
        placeholder="제목 입력"
        value={params.title}
        onChange={(e) => onChangeValue("title", e.target.value)}
      />

      <SliderContainer beforeChange={handleBeforeChange} {...settings}>
        {(list || []).map((item) => {
          return (
            <div className="img-wrap">
              <img
                //src={`http://localhost:5000/${item.imgURL}`
                src={`http://54.65.17.182/${item.imgURL}`
                }
                className="img-wrap__bg"
              />
            </div>
          );
        })}
      </SliderContainer>

      <Button
        text={"저장하기"}
        style={{ marginBottom: "10px" }}
        onClick={handleSaveButton}
      />
      <Button
        text={"목록으로 돌아가기"}
        style={{ marginBottom: "10px" }}
        onClick={() => navigate("/timeline")}
      />
    </Container>
  );
};

export default Index;
