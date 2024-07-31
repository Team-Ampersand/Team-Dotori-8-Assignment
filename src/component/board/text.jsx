import styled from "styled-components";

const Container = styled.div`
  font-weight: 700;
  color: #ffffff;
  padding-top: 5%;
  letter-spacing: 0.08rem;
  margin-left: 2rem;
`;

const TitleForMobile = styled.p`
  @media (max-width: 620px) {
    font-size: 4vw;
    line-height: 7vw;
    font-weight: 700;
    letter-spacing: -0.03em;
  }
  @media (min-width: 620px) {
    display: none;
  }
`;

const Subtitle = styled.p`
  @media (max-width: 620px) {
    display: none;
  }
  @media (max-width: 1280px) {
    font-size: 1rem;
  }
  font-size: 1.5rem;
`;

const Title = styled.p`
  @media (max-width: 620px) {
    display: none;
  }
  @media (max-width: 1280px) {
    font-size: 3.25rem;
    margin-top: 1.5rem;
  }
  margin-top: 3.25rem;
  font-size: 5rem;
`;

export default function Text() {
  return (
    <Container>
      <TitleForMobile>
        GSM의 모든 프로젝트를 한 곳에, <br /> EveryGSM
      </TitleForMobile>
      <Subtitle>GSM의 모든 프로젝트를 한 곳에</Subtitle>
      <Title>EveryGSM</Title>
    </Container>
  );
}
