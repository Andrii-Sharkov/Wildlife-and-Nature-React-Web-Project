import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';
import { ShowcaseOneData } from './showcaseOne-data';

const Section = styled.section`
  background: white;
  height: 45vh;

  @media (max-width: 1024px) {
    height: 30vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 540px) {
      height: 105vh;
  }

  @media (max-width: 375px) {
    height: 90vh;
  }
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-around;
  grid-gap: 30px;
  transform: translateY(-40px);

  @media (max-width: 1024px) {
    grid-gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const StyledData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    letter-spacing: 3px;
    font-size: 1.7rem;

    @media (max-width: 1280px) {
      font-size: 1.5rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;

const ImageContainer = styled.div`
  width: 450px;
  height: auto;
  padding: 15px;
  background: white;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 390px;
  }

  @media (max-width: 1024px) {
    width: 315px;
  } 

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 540px) {
      width: 400px;
  }

  @media (max-width: 375px) {
    width: 340px;
  }

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.07);
    }
  }
`;

const ShowcaseOne = () => {
  return (
    <Section>
      <Container>
        <SectionWrapper>
          {ShowcaseOneData.map( (data, index) => {
            return (
              <StyledData key={index}>
                <ImageContainer>
                  <img src={data.image} alt='nature'/> 
                </ImageContainer>               
                <h2>{data.title}</h2>
              </StyledData>
            )
          })}
        </SectionWrapper>
      </Container>     
    </Section>
  )
}

export default ShowcaseOne;