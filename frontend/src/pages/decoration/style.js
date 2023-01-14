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

  & > .img-wrap {
    width: 100%;
    height: 463px;
    background-color: ${Color.gray};
    margin-bottom: 20px;
    position: relative;

    & > .img-wrap__sticker {
      width: 100px;
      height: 100px;
      position: absolute;
    }
  }
`;
