import Modal from "react-modal";
import styled from "@emotion/styled";
import { Color } from "../../style";

export const ModalContainer = styled(Modal)`
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .detail__title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      min-height: 50px;
    }

    & > .detail__message {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
