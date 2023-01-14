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

  & > .img-wrap {
    width: 100%;
    height: 463px;
    background: ${Color.gray};
    margin-bottom: 20px;
    position: relative;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;
