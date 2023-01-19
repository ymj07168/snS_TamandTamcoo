import styled from "@emotion/styled";
import { Color } from "../../style";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    width: 100%;
  }

  & > .container__title {
    font-size: 20px;
    font-weight: 500;
    color: white;
    background-color: ${Color.blue};
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  & > input {
    width: 100%;
    height: 58px;
    border: 1px solid ${Color.blue};
    border-radius: 10px;
    padding: 0 10px;
    font-size: 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  & > .others {
    font-family:'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: 100;
    margin-top: 20px;
  }

  & > .others2 {
    font-family:'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: 100;
    margin-top: 20px;
  }
`;
