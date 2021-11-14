import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';

const FooterContainer = styled.footer`
  background: black;
  height: 8vh;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px) {
    margin: 0 20px;
    text-align: center;
  }

  p {
    color: white;
    font-size: 1.3rem;

    span {
      color: #40BCDF;
      letter-spacing: 1.5px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <p>The Website is made with ❤️ by <span>Andrew Sharkov</span> in 2021</p>
        </FooterContent>
      </Container>
    </FooterContainer>
  )
}

export default Footer;