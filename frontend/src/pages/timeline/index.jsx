import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//component
import Header from "../../components/header/index";
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {

  const [timelines, setTimelines] = useState('');

  useEffect(() => {
    getTimelineAll();
  }, []);

  const getTimelineAll = async () => {
    try {
      const res = await axios.get(`/api/timelines/read`);
      setTimelines(res.data.timelines);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header text={"타임라인"} link={"/"} />
      <div>
        {timelines ? timelines.map((timeline, index) => (<img key={index} src={timeline.bid.imgURL} alt="이미지 없음" />)) : <div>Loading...</div>}
      </div>
      <Link to="/creation">
        <Button text={"타임라인 추가하기"} style={{ marginBottom: "10px" }} />
      </Link>
    </Container>
  );
};

export default Index;
