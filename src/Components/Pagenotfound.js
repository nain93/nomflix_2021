import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Cotainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #e74c3c;
`;

function Pagenotfound({ text }) {
  return (
    <Cotainer>
      <Text>{text}</Text>
    </Cotainer>
  );
}

Pagenotfound.prototype = {
  text: PropTypes.string.isRequired,
};

export default Pagenotfound;
