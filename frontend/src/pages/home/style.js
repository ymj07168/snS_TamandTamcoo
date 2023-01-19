import styled from "@emotion/styled";
import { Color } from "../../style";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 70px;
    font-weight: 500;
    margin-bottom:30px;
    margin-top: 60px;
    color: #12CC6F;
  }

  & > .img-wrap{
    width:100%;
    height: 463px; 
    margin-bottom:10px;
    position: relative;
    margin-left: 300px;
  }

  & > .sub {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-size: 28px;
    font-weight: 750;
    margin-bottom: 30px;
  }
`;

