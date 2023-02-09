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
    font-size: 25px;
    color: white;
    background-color: ${Color.blue};
    width: 100%;
    min-height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  & > .img-wrap {
    width: 100%;
    height: 520px;
    margin-bottom: 20px;
    position: relative;
    background-image: url(${(props) =>
    //`http://localhost:5000/${props.bg}`
    `http://54.65.17.182:5000/${props.bg}`

  });
    background-size: 100%;
    & > .img-wrap__bg {
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    & > .img-wrap__sticker {
      width: 100px;
      position: absolute;
    }
  }
`;
