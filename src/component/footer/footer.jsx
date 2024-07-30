import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  @media (max-width: 1260px) {
    display: none;
  }
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  width: 100vw;
  height: 5rem;
  background-color: #e3e3e3;
`;

function Footer() {
  return (
    <Wrapper>
      <p>Copyright 2023. the moment All rights reserved.</p>
    </Wrapper>
  );
}

export default Footer;
