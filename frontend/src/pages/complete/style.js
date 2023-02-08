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
    color: white;
    background-color: ${Color.blue};
    width: 100%;
    min-height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 10px 10px;
    box-sizing: border-box;
  }

  & > .img-container {
    width: 100%;
    height: 530px;
    margin-bottom: 20px;
    position: relative;
    background-image: url(${(props) =>
    //`http://localhost:5000/file/background/${props.bg}.png`
    `http://54.65.17.182:5000/file/background/${props.bg}.png`
  });
    background-size: 100%;

    & > .img-wrap {
      width: 100px;
      position: absolute;
      height: fit-content;

      & > .img-wrap__sticker {
        width: 100px;
      }

      & > .img-wrap__title {
        position: absolute;
        color: #fff;
        width: fit-content;
        max-width: 100px;
        height: 14x;

        padding: 5px;
        box-sizing: border-box;
        border-radius: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        top: 115%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #fff;
      }
    }
  }
`;
