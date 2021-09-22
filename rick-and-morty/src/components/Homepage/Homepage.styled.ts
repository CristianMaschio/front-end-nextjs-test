import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export const Header = styled.header`
  background-color: antiquewhite;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and ${breakpoints.device.sm} {
    height: 25rem;
    padding-bottom: 10rem;
    margin-bottom: -10rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const Footer = styled.footer`
  background-color: antiquewhite;
  height: 15rem;
`;
