import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';
import AlsoLikeContent from './alsoLikeContent';

const Section = styled.section`
  background: #E0E5EB;
  height: 90vh;

  @media (max-width: 1280px) {
    height: 105vh;
  }

  @media (max-width: 768px) {
    height: 170vh;
  }

  @media (max-width: 540px) {
    height: 248vh;
  }

  h3 {
    font-size: 3rem;
    text-align: center;
    padding-top: 30px;
    letter-spacing: 3.5px;
  }
`;

const AlsoLikeRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  padding: 50px 0;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 6px 10px 14px rgba(255, 255, 255, 0.9);
  transition: all 0.5s;
  cursor: pointer;

  :hover {
    transform: scale(1.08);
  }
  img {
    width: 100%;
    height: 550px;
  }

  h4 {
    margin: 30px 0;
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
`;

const AlsoLike = () => {
  return (
    <Section>
      <Container>
        <h3>You Might Also Like</h3>
        <AlsoLikeRow>
          {AlsoLikeContent.map( (content, index) => {
            return (
              <Column key={index}>
                <img src={content.image} alt='' />
                <h4>{content.subtitle}</h4>
              </Column>             
            )
          })}
        </AlsoLikeRow>
      </Container>
    </Section>
  )
}

export default AlsoLike;