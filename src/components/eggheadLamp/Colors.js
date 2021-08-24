import React from "react";
import styled from "styled-components";

const ColorCircleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
`;

const Circles = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: red;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
    &:hover {

    transform: scale(1.2)
  }
  }
`;

function Colors() {
  return (
    <ColorCircleWrapper>
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
      <Circles />
    </ColorCircleWrapper>
  );
}

export default Colors;
