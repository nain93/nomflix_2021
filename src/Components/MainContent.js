import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const ContentStyle = styled(Slider)`
  .slick-list {
    background-color: red;
    color: black;
  }
`;

const ImageStyle = styled.div`
  background-color: blue;
  width: 10px;
  height: 10px;
`;

function MainContent() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <ContentStyle {...settings}>
        <div>
          <ImageStyle>rkrrrr</ImageStyle>
        </div>
        <div>
          <ImageStyle>asdf</ImageStyle>
        </div>
        <div>
          <ImageStyle>dfasdfsdf</ImageStyle>
        </div>
        <div>
          <ImageStyle>4</ImageStyle>
        </div>
        <div>
          <ImageStyle>5</ImageStyle>
        </div>
        <div>
          <ImageStyle>6</ImageStyle>
        </div>
      </ContentStyle>
    </div>
  );
}

export default MainContent;
