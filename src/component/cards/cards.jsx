import React from "react";
import styled from "styled-components";
import Card from "../cards/card";

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

function Cards() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default Cards;
