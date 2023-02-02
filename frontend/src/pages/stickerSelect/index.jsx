import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

//component
import Header from "../../components/header/index";

//style
import { Container } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");
  const location = useLocation();
  const bg = location.state;
  console.log(bg);
  const imgList = {
    sky: [
      "네온-꽃다발.png",
      "네온-달력.png",
      "네온-배.png",
      "네온-열기구.png",
      "네온-음표.png",
      "네온-카메라.png",
      "네온-향수.png",
      "음식-버거.png",
      "음식-오렌지.png",
      "음식-푸딩.png",
      "음식-핫케이크.png",
      "캔뱃지-로켓.png",
      "캔뱃지-별똥별.png",
      "캔뱃지-별똥별2.png",
      "캔뱃지-행성.png",
      "캔뱃지-행성2.png",
      "캔뱃지-행성3.png",
      "픽셀-선글라스.png",
      "픽셀-아이스크림1.png",
      "픽셀-아이스크림2.png",
      "픽셀-아이스크림3.png",
      "픽셀-콧수염.png",
    ],
    snow: [
      "눈송이.png",
      "능히해냄.png",
      "버섯송이.png",
      "송이1.png",
      "송이2.png",
      "송이3.png",
      "여행-가방.png",
      "여행-나침반.png",
      "여행-지도.png",
      "여행-카메라.png",
      "여행-캐리어.png",
      "여행-티켓.png",
      "전구.png",
      "주목 송이.png",
      "참잘했송.png",
      "팝스티커-번개.png",
      "팝스티커-별.png",
      "팝스티커-보석.png",
      "팝스티커-편지.png",
      "팝스티커-하트.png",
      "팝스티커-하트2.png",
    ],
  };

  return (
    <Container>
      <Header text={"스티커 선택"} link={`/decoration?timeline_no=${no}`} />
      <div className="img-list">
        {(imgList[bg] || []).map((item) => {
          return (
            <img
              src={`/image/ico/${bg}Sticker/${item}`}
              onClick={() => {
                navigate(`/decoration?timeline_no=${no}`);
                localStorage.setItem(
                  "parts",
                  `/image/ico/${bg}Sticker/${item}`
                );
                localStorage.setItem(
                  "position",
                  JSON.stringify({ x: 0, y: 0 })
                );
              }}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Index;
