import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  font-size: 30px;
  margin-bottom: 20px;
  position: relative;
  & > a {
    position: absolute;
    left: 0;
    top: 33px;
    & > span {
      font-size: 30px;
    }
  }
`;
