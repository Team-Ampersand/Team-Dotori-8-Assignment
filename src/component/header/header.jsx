import React from "react";
import Logo from "./logo.jsx";
import Search from "./search.jsx";
import ThemeSwitch from "./themeSwitch.jsx";
import styled from "styled-components";

const Wrapper = styled.header`
  @media (max-width: 1280px) {
    height: 5.5rem;
  }
  @media (max-width: 620px) {
    background-color: #f1f1f5;
    height: 3.5rem;
    border: none;
  }
  top: 0;
  height: 5.75rem;
  display: flex;
  width: 99.9vw;
  justify-content: center;
  background-color: #ffffff;
  border: 0.0625rem solid rgba(153, 153, 153, 0.5);
`;

const Container = styled.div`
  @media (max-width: 1280px) {
    width: calc(75vw + 1.75rem);
  }
  @media (max-width: 620px) {
    width: 85vw;
  }
  width: 60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Search />
        <ThemeSwitch />
      </Container>
    </Wrapper>
  );
}

export default Header;
