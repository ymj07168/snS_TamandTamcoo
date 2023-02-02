import React from "react";
import { Link, useSearchParams, Prompt } from "react-router-dom";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import axios from "axios";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const parts = localStorage.getItem("parts");
  const [position, setPosition] = useState(
    !!localStorage.getItem("position")
      ? JSON.parse(localStorage.getItem("position"))
      : { x: 0, y: 0 }
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");
  const [detail, setDetail] = useState();

  const handleStickerDrag = (position) => {
    setPosition({ x: position.x, y: position.y });
  };

  useEffect(() => {
    localStorage.setItem("position", JSON.stringify(position));
  }, [position]);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const res = await axios.get(`/api/timelines/${no}`);
      setDetail({ ...res.data.timelines[0], bg: "sky" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container position={position}>
      <Header text={"탐라 꾸미기"} />
      <div className="container__title">{detail?.title}</div>
      <div className="img-wrap">
        <img src={""} className="img-wrap__bg" />
        {parts && (
          <Draggable
            onDrag={(e, data) => handleStickerDrag(data)}
            bounds={"parent"}
            defaultPosition={position}
          >
            <img
              src={parts}
              className="img-wrap__sticker"
              style={{ zIndex: 9999 }}
            />
          </Draggable>
        )}
        {(detail?.contents || []).map((item) => {
          return (
            <img
              src={item.parts}
              className="img-wrap__sticker"
              style={{ left: item.loc_x, top: item.loc_y }}
            />
          );
        })}
      </div>
      <Link to={`/sticker-select?timeline_no=${no}`} state={detail?.bg}>
        <Button text={"스티커 선택하기"} style={{ marginBottom: "10px" }} />
      </Link>
      <Link
        to={`/message?timeline_no=${no}`}
        onClick={(e) => {
          if (!localStorage.getItem("parts")) {
            e.preventDefault();
            alert("스티커를 선택해주세요");
          }
        }}
      >
        <Button text={"메세지 작성하기"} />
      </Link>
    </Container>
  );
};

export default Index;
