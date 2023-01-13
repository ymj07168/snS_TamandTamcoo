import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//component
import Button from "../../components/button/index";

//style
import { Container } from "./style";

const Index = () => {
    const navigate = useNavigate();
    const [params, setParams] = useState({ title: "" });

    const handleCompleteButton = () => {
        if (params.title === "") {
            alert("제목을 입력해주세요");
        } else {
            navigate("/timeline");
        }
    };

    const onChangeValue = (key, value) => {
    const temp = { ...params, [key]: value };
    setParams(temp);
    };

    return (
    <Container>
        <input
        placeholder="제목 입력"
        value={params.title}
        onChange={(e) => onChangeValue("title", e.target.value)}
        />
        

        <Button
        text={"공유하기"}
        style={{ marginBottom: "10px" }}
        onClick={handleCompleteButton}
        />
        <Button
        text={"목록으로 돌아가기"}
        style={{ marginBottom: "10px" }}
        onClick={handleCompleteButton}
        />
    </Container>
    );
};

export default Index;
