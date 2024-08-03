import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 620px) {
    width: 3.625rem;
    height: 1.75rem;
  }
  @media (max-width: 1280px) {
    width: 4.125rem;
    height: 2rem;
  }
  width: 3.5rem;
  height: 1.8rem;
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  cursor: pointer;
  background-color: #e3e3e3;
`;

export default function ThemeSwitch() {
  return <Container />;
}
