import { ModalContainer } from "./style";
import { Color } from "../../style";

const Index = (props) => {
  const { isOpen, toggle, bg, item } = props;
  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={toggle}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          zIndex: 10,
        },
        content: {
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          background: bg === "sky" ? Color.blue20 : Color.yellow20,
          overflow: "auto",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          WebkitOverflowScrolling: "touch",
          borderRadius: "14px",
          outline: "none",
          zIndex: 10,
          width: "300px",
          height: "200px",
          border: "3px solid #fff",
        },
      }}
    >
      <div className="detail">
        <div className="detail__title">{item.title}</div>
        <div className="detail__message">{item.message}</div>
      </div>
    </ModalContainer>
  );
};

export default Index;
