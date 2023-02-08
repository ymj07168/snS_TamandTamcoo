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
  const [timelines, setTimelines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTimelineAll();
  }, []);

  const getTimelineAll = async () => {
    try {
      const res = await axios.get(`/api/timelines/read`);
      setTimelines(res.data.timelines);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header text={"타임라인"} />
      <div className="content">
        {!loading ? (
          timelines.length !== 0 ? (
            timelines.map((timeline, index) => (
              <Link to={`/detail?timeline_no=${timeline._id}`}>
                <img
                  key={index}
                  src={
                    //`http://localhost:5000/${timeline.bid.imgURL}`
                    `http://54.65.17.182:5000/${timeline.bid.imgURL}`
                  }
                  alt="이미지 없음"
                  width="90%"
                  height="300"
                  style={{ margin: 10 }}
                />
                <div className="content__title">{timeline.title}</div>
              </Link>
            ))
          ) : (
            <div className="content__empty">텅!</div>
          )
        ) : (
          <div className="content__loading">Loading...</div>
        )}
      </div>
      <Link to="/creation">
        <Button text={"타임라인 추가하기"} style={{ marginBottom: "10px" }} />
      </Link>
    </Container>
  );
};

export default Index;
