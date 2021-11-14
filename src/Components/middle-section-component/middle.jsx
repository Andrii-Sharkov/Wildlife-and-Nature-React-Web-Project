import React from 'react';
import styled from 'styled-components';
import image from '../../images/evening.jpg';
import { Container } from '../styledComponents/container';

const Section = styled.section`
  background: white;
  height: 55vh;

  @media (max-width: 1280px) {
    height: 65vh;
  }

  @media (max-width: 768px) {
    height: 105vh;
  }

  @media (max-width: 375px) {
    height: 95vh;
  }
`;

const SectionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  column-gap: 15px;
  padding: 70px 0;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }

  @media (max-width: 375px) {
    padding: 30px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h3 {
    font-size: 3rem;
    letter-spacing: 3px;
  }

  button {
    font-size: 1.4rem;
    text-align: center;
    padding: 10px 15px;
    width: 150px;
    border: none;
    border-radius: 15px;
    background: #0087D7;
    color: white;
    margin-top: 50px; 
    cursor: pointer;
    transition: all 0.5s;

    @media (max-width: 768px) {
      margin: 20px 0;
    }

    &:hover {
      border: 1px solid black;
      background: white;
      color: black;
      letter-spacing: 3px;
      width: 180px;
    }
  }

  p {
    font-size: 1.3rem;
    padding: 10px;

    @media (max-width: 768px) {
      margin: 5px 0 10px 0;
    }
  }
  
  img {
    width: 100%;
    height: auto;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Middle = () => {
  return (
    <Section>
      <Container>
        <SectionRow>
          <Column>
            <h3>This place is special...</h3>
            <button>Learn more</button>
          </Column>
          <Column>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae repellat quod harum dolores, rerum sit vel voluptate eaque in, animi obcaecati labore ea ipsum beatae cupiditate perferendis quaerat fuga alias, ipsam illo incidunt culpa tempora quam! At adipisci architecto maiores laboriosam placeat quaerat, laborum temporibus libero rerum iure iste.
            </p>
          </Column>
          <Column>
            <img src={image} alt='evening' />
          </Column>
        </SectionRow>
      </Container>
    </Section>
  )
}

export default Middle;