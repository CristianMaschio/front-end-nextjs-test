import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export const Wrapper = styled.div`
  position: relative;
  margin: 3rem 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.5rem 1rem;

  @media only screen and ${breakpoints.device.sm} {
    gap: 4rem 2rem;
  }
`;

export const ProfileCard = styled.div`
  min-width: 120px;
  width: 40%;
  max-width: 250px;
  p {
    font-size: 0.8rem;
    margin: 0.4rem 0;
  }
  button {
    margin-top: 0.8rem;
    width: 100%;
    height: 2.5rem;
  }
  button,
  button:focus,
  button:active {
    border: none;
  }
  button:active {
    background-color: lightgray;
  }

  @media only screen and ${breakpoints.device.sm} {
    max-width: 200px;
    p {
      font-size: 0.9rem;
      margin: 0.45rem 0;
    }
    button {
      margin-top: 0.9rem;
      font-size: 1rem;
    }
  }
`;
