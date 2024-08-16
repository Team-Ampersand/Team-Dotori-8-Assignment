import styled from "styled-components";

const Input = styled.input`
  background: none;
  color: #191919;
  width: 100%;
  outline: none;
  border: 0;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2.1875rem;
  letter-spacing: -0.035rem;
`;

const SearchContainer = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
  background: #ededed;
  width: 16rem;
  height: 1.8rem;
  border-radius: 3.125rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export default function Search() {
  return (
    <SearchContainer>
      <svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 17L12.9581 12.9581M12.9581 12.9581C14.052 11.8641 14.6666 10.3804 14.6666 8.8333C14.6666 7.28621 14.052 5.80249 12.9581 4.70853C11.8641 3.61458 10.3804 3 8.8333 3C7.28621 3 5.80249 3.61458 4.70853 4.70853C3.61458 5.80249 3 7.28621 3 8.8333C3 10.3804 3.61458 11.8641 4.70853 12.9581C5.80249 14.052 7.28621 14.6666 8.8333 14.6666C10.3804 14.6666 11.8641 14.052 12.9581 12.9581Z"
          stroke="#A7A7A7"
          stroke-opacity="0.5"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <Input placeholder="검색"></Input>
    </SearchContainer>
  );
}
