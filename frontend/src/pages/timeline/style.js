import styled from "@emotion/styled";
import { Color } from "../../style";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  & > .content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 50px;

    & > .content__loading {
      width: 100%;
      height: 400px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${Color.gray};
    }

    & > .content__empty {
      width: 100%;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      color: ${Color.gray};
    }

    & > a {
      width: 50%;
      height: fit-content;
      position: relative;
      display: block;

      & > .content__title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 10px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  & > a {
    width: calc(100% - 40px);
    position: fixed;
    bottom: 0;
  }
`;
