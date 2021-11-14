import React from 'react';
import styled from 'styled-components';
import { GiTigerHead as TigerLogo } from 'react-icons/gi';
import { Container } from '../styledComponents/container';
import Navbar from '../navBar-component/navbar';

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  width: 100%;
`;

const Logo = styled.a`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Heading>
        <Logo>
          <TigerLogo />
        </Logo>
        <Navbar />
      </Heading>
    </Container>
  )
}

export default Header;