import React from 'react';
import styled from 'styled-components';
import Image from '../../images/background-1.jpg';

const BackgroundImage = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2) ), url('${Image}') no-repeat center center/cover;
  height: 90vh;
  position: relative;
`;

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  row-gap: 20px;
  width: 400px;
  height: auto;
  position: absolute;
  top: 10rem;
  right: 22rem;
  text-align: end;

  @media (max-width: 540px) {
    right: 5rem;
  }

  @media (max-width: 414px) {
    right: 1rem;
    width: 350px;
  }

  @media (max-width: 360px) {
    width: 330px;
  }

  h1 {
    font-size: 2.5rem;
    color: white;

    span {
      font-weight: bold;
      letter-spacing: 3px;
      color: #333;
    }

    @media (max-width: 414px) {
      font-size: 2.3rem;
    }

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;
    color: #fff;

    @media (max-width: 414px) {
      font-size: 1.1rem;
    }

    @media (max-width: 360px) {
      font-size: 1rem;
    }
  }
`;

const LearnMore = styled.a`
  text-decoration: none;
  color: white;
  width: 150px;
  height: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  border-bottom: 1px solid white;
  transition: all 0.3s ease-out; 

  &:hover { 
    letter-spacing: 3px;
    color: black;
    text-shadow: 4px 8px 12px black;
  }
`;

const Background = () => {
  return (
    <>
      <BackgroundImage>
          <MainTitle>
            <h1>Look <span>Deep</span> Into <span>The Nature</span></h1>
            <p>
              NATURE WILL BEAR THE CLOSEST INSPECTION. SHE INVITES US TO LAY OUR EYE LEVEL WITH HER SMALLEST LEAF, AND TAKE AN INSECT VIEW OF ITS PLAIN.
            </p>
            <LearnMore>Learn More</LearnMore>
          </MainTitle>
      </BackgroundImage>
    </>
  )
}

export default Background;