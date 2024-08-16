import React, { useState } from "react";
import styled from "styled-components";
import Card from "../cards/card";

const Container = styled.div`
  padding-top: 5%;
  width: 80%;
  overflow: hidden;
  margin: auto;
  position: relative;
  width: 60rem;
  height: 17rem;
  @media (max-width: 1280px) {
    @media (max-width: 620px) {
      width: 85vw;
      height: 10rem;
    }
    width: calc(75vw + 1.5rem);
    height: 13.75rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.translate}%)`};
  width: ${(props) => props.totalWidth}%;
  div {
    flex: "0 0 11.2%";
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: gray;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
`;

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  const totalCards = cards.length;
  const cardsPerPage = 3;
  const totalWidth = (totalCards / cardsPerPage) * 100;

  const nextSlide = () => {
    if (currentIndex < totalCards - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container>
      <CardWrapper translate={(100 / cardsPerPage) * currentIndex} totalWidth={totalWidth}>
        {cards.map((card, index) => (
          <div style={{ flex: "0 0 11.2%" }} key={index}>
            {card}
          </div>
        ))}
      </CardWrapper>
      <Button left onClick={prevSlide}>
        &lt;
      </Button>
      <Button right onClick={nextSlide}>
        &gt;
      </Button>
    </Container>
  );
}

export default Cards;
