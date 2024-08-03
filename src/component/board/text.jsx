import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 620px) {
    display: flex;
    padding-top: 0;
  }
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.08rem;
  padding-top: 7.5%;
  margin-left: 3rem;
`;

const TitleForMobile = styled.p`
  @media (max-width: 620px) {
    align-self: center;
    font-size: 1.75rem;
    line-height: 7vw;
    font-weight: 700;
    letter-spacing: -0.03em;
    width: 17.5rem;
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
  letter-spacing: 0.15rem;
  font-size: 1.25rem;
`;

const Title = styled.p`
  @media (max-width: 620px) {
    display: none;
  }
  @media (max-width: 1280px) {
    font-size: 3.25rem;
    margin-top: 1.5rem;
  }
  margin-top: 1rem;
  font-size: 4.25rem;
`;

export default function Text() {
  return (
    <Container>
      <TitleForMobile>
        GSM의 모든 프로젝트를
        <br /> 한 곳에, EveryGSM
      </TitleForMobile>
      <Subtitle>GSM의 모든 프로젝트를 한 곳에</Subtitle>
      <Title>EveryGSM</Title>
    </Container>
  );
}
