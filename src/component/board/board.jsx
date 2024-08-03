import styled from "styled-components";
import Text from "./text.jsx";
import Img from "./img.jsx";

const Wrapper = styled.div`
  @media (max-width: 1280px) {
    @media (max-width: 620px) {
      padding-top: 0;
    }
    padding-top: 2rem;
  }

  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

const Container = styled.div`
  @media (max-width: 1280px) {
    @media (max-width: 620px) {
      width: 85vw;
      height: 10rem;
    }
    width: calc(75vw + 1.5rem);
    height: 13.75rem;
  }
  background: linear-gradient(275deg, #ffe870 -8.75%, #e23c96 100%);
  border-radius: 1.25rem;
  width: 60rem;
  height: 17rem;
  display: flex;
  position: relative;
`;

export default function Board() {
  return (
    <Wrapper>
      <Container>
        <Text />
        <Img />
      </Container>
    </Wrapper>
  );
}
