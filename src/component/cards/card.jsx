import styled from "styled-components";

const Card = styled.a`
  height: 17rem;
  width: 18rem;
  padding: 1.75rem, 2rem;
  position: relative;
  display: flex;
  border-radius: 1rem;
  box-shadow: 0.25rem 0.25rem 0.4rem rgba(112, 144, 176, 0.2);
  cursor: pointer;
  background-color: #fff;
  @media (max-width: 1280px) {
    margin: 0.5rem;
    padding-bottom: 3.125rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 20vh;
    weight: 20vw;
  }
`;

export default Card;
