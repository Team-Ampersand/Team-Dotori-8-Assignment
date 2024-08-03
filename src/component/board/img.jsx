import styled from "styled-components";

const Container = styled.div`
  width: 22rem;
  height: 100%;
  display: flex;
  position: relative;
  & > img {
    left: 0;
  }
`;

export default function Img() {
  return (
    <Container>
      <img alt="Rocket" src="../../../src/assets/Rocket.png" />
    </Container>
  );
}
