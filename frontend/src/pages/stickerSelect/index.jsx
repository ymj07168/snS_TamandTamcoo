import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//component
import Header from "../../components/header/index";

//style
import { Container } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("timeline_no");

  const imgList = [
    "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-autumn-maple-leaf-element-design-leaf-elementautumn-leavesautumn-png-image_602484.jpg",
    "https://png.pngtree.com/png-vector/20210923/ourmid/pngtree-autumn-leaves-border-hello-october-greeting-png-image_3952783.png",
    "https://png.pngtree.com/png-vector/20210502/ourmid/pngtree-autumn-tree-clipart-png-image_3255103.png",
    "https://png.pngtree.com/png-clipart/20210415/ourmid/pngtree-orange-indian-harvest-wheat-ears-green-leaves-png-image_3217611.png",
  ];

  return (
    <Container>
      <Header text={"스티커 선택"} link={`/decoration?timeline_no=${no}`} />
      <div className="img-list">
        {(imgList || []).map((item) => {
          return (
            <img
              src={item}
              onClick={() => {
                navigate(`/decoration?timeline_no=${no}`);
                localStorage.setItem("parts", item);
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
