import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import axios from "axios";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
  const { state } = useLocation();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");
  const [detail, setDetail] = useState();
  const handleStickerDrag = (position) => {
    setPosition({ x: position.x, y: position.y });
  };

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const res = await axios.get(`/api/timelines/63cf79cea8ef1d038b790764`);
      setDetail(res.data.timelines[0]);
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
        {state && (
          <Draggable
            onDrag={(e, data) => handleStickerDrag(data)}
            bounds={"parent"}
          >
            <img src={state} className="img-wrap__sticker" />
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
      <Link to="/sticker-select">
        <Button text={"스티커 선택하기"} style={{ marginBottom: "10px" }} />
      </Link>
      <Link to="/message">
        <Button text={"메세지 작성하기"} />
      </Link>
    </Container>
  );
};

export default Index;