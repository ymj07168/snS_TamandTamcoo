import styled from "@emotion/styled";
import { Color } from "../../style";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  & > .loading {
    width: 100%;
    height: 500px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Color.gray};
  }
  & > a {
    width: 100%;
  }
`;
