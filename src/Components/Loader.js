import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 32px;
  position: fixed;
`;

function Loader() {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        ⌚
      </span>
    </Container>
  );
}

export default Loader;
