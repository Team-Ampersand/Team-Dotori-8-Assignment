import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  @media (max-width: 620px) {
    font-size: 1.25rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  font-size: 1.75rem;
  font-weight: 500;
`;

export default function Logo() {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width="2.75rem" height="2.75rem" viewBox="0 0 44 44" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 7.93293C9 5.76083 10.7608 4 12.9329 4H31.0244C33.1965 4 34.9573 5.76083 34.9573 7.93293C34.9573 10.105 33.1965 11.8659 31.0244 11.8659H19.6575C19.2153 12.4402 18.911 13.1343 18.7669 13.5956C18.5097 16.2024 19.2019 17.7707 19.8651 18.5518H27.0915C29.2636 18.5518 31.0244 20.3126 31.0244 22.4847C31.0244 24.6568 29.2636 26.4176 27.0915 26.4176H20.1512C19.4387 27.0241 18.9597 28.0573 18.7669 28.6741C18.5581 30.7902 18.9749 32.2219 19.4939 33.1038H31.0244C33.1965 33.1038 34.9573 34.8646 34.9573 37.0367C34.9573 39.2088 33.1965 40.9696 31.0244 40.9696H12.9329C10.7608 40.9696 9 39.2088 9 37.0367C9 34.8646 10.7608 33.1038 12.9329 33.1038H16.1222C16.6874 31.8729 16.7218 29.8609 16.625 28.6741C16.514 27.6083 15.9174 26.8685 15.3362 26.4176H12.9329C10.7608 26.4176 9 24.6568 9 22.4847C9 20.3126 10.7608 18.5518 12.9329 18.5518H15.8066C16.673 17.4628 16.7374 14.9732 16.625 13.5956C16.5498 12.873 16.2513 12.3003 15.8858 11.8659H12.9329C10.7608 11.8659 9 10.105 9 7.93293Z"
          fill="url(#paint0_linear_230_2586)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_230_2586"
            x1="13.1124"
            y1="11.5393"
            x2="33.6742"
            y2="41.0113"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E23C96"></stop>
            <stop offset="1" stop-color="#FFE870"></stop>
          </linearGradient>
        </defs>
      </svg>
      <Title>EveryGSM</Title>
    </Container>
  );
}
