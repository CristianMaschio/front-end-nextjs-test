import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export const Header = styled.header`
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;

  h2 {
    font-size: 2rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    align-items: flex-start;
    padding: 3rem 3rem 0 3rem;
    h1,
    h2 {
      font-size: 3rem;
      margin: 0;
      margin-bottom: 1.5rem;
    }
  }
`;

export const HeaderCharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  img {
    border-radius: 50%;
    margin: 3rem 0 2rem 0;
    max-width: 280px;
  }
  p {
    font-size: 1.2rem;
    margin: 0.3rem 0;
  }

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    margin-top: 2rem;
    margin-bottom: -5rem;
    p {
      font-size: 1.3rem;
      margin: 0.4rem 0;
    }
  }
`;

export const HeaderCharacterInformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and ${breakpoints.device.sm} {
    flex: 1;
    align-items: flex-start;
    margin-left: 3rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -3rem;

  h3 {
    margin-top: 3rem;
    text-align: center;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.8rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    margin-top: 0;
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      text-align: left;
    }
  }
`;

export const Footer = styled.footer`
  background-color: antiquewhite;
  height: 10rem;
`;
