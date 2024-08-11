import Board from "../component/board/board";
import Cards from "../component/cards/cards";

import styled from "styled-components";

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 4rem;
`;

export default function Body() {
  return (
    <>
      <Wrapper>
        <Board />
        <Cards />
      </Wrapper>
    </>
  );
}
