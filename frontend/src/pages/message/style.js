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

  & > input::placeholder,
  textarea::placeholder {
    color: ${Color.gray};
  }

  & > input:focus:focus-visible,
  textarea:focus:focus-visible {
    border: 2px solid ${Color.blue};
  }

  & > textarea {
    width: 100%;
    height: 300px;
    border: 1px solid ${Color.blue};
    border-radius: 10px;
    padding: 10px 10px;
    font-size: 20px;
    box-sizing: border-box;
    margin-bottom: 100px;
  }
`;
