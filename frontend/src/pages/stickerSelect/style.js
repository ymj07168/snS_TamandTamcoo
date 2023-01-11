import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  & > .img-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    gap: 10px;

    & > img {
      width: 100%;
    }
  }
`;
