import styled from "styled-components";
import Text from "./text.jsx";
import Img from "./img.jsx";

const Wrapper = styled.div`
  @media (max-width: 1280px) {
    padding: 2rem;
  }
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

const Container = styled.div`
  @media (max-width: 620px) {
    width: 87.5vw;
    height: 9.5rem;
  }
  @media (max-width: 1280px) {
    width: calc(75vw + 1.5rem);
    height: 13.75rem;
  }
  background: linear-gradient(275deg, #ffe870 -8.75%, #e23c96 100%);
  border-radius: 1.25rem;
  width: 71rem;
  height: 18.75rem;
  display: flex;
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
