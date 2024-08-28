import React, { useState, useEffect } from "react";
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
    height: 35rem;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)")};
  gap: 10px;
  justify-items: center;
  transition: transform 0.5s ease-in-out;
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
  ${(props) => (props.disabled ? "opacity: 0.5; cursor: not-allowed;" : "")}
`;

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 620);

  const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  const totalCards = cards.length;
  const cardsPerPage = isMobile ? 4 : 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + cardsPerPage < totalCards) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  return (
    <Container>
      <CardWrapper isMobile={isMobile}>
        {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </CardWrapper>
      <Button left onClick={prevSlide} disabled={currentIndex === 0}>
        &lt;
      </Button>
      <Button right onClick={nextSlide} disabled={currentIndex + cardsPerPage >= totalCards}>
        &gt;
      </Button>
    </Container>
  );
}

export default Cards;
