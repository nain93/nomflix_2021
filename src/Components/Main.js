import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  height: 600px;
  padding: 0 80px;
`;

const MainSectionLeft = styled.section`
  /* background-color: blue; */
  width: 100%;
  border-right: 1px solid rgba(62, 62, 62, 0.6);
  padding: 45px 85px;
`;

const MainSectionRight = styled.section`
  /* background-color: green; */
  width: 100%;
  border-left: 1px solid rgba(62, 62, 62, 0.6);
  padding: 45px 85px;
`;

function Main() {
  return (
    <StyledMain>
      <MainSectionLeft>
        <MainContent />
      </MainSectionLeft>
      <MainSectionRight></MainSectionRight>
    </StyledMain>
  );
}

export default Main;
