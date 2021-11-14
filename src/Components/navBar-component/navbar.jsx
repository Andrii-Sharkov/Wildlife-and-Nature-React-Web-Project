import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { FaBars as MobileMenu } from 'react-icons/fa'

const Menu = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const Navbar = () => {
  return (
    <Menu>
      <MobileMenu />
    </Menu>
  )
}

export default Navbar;