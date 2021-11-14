import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';

const Section = styled.section`
  background: black;
  height: 40vh;

  @media (max-width: 1280px) {
    height: 45vh;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 540px) {
    height: 65vh;
  }

  @media (max-width: 414px) {
    height: 75vh;
  }

  @media (max-width: 375px) {
    height: 65vh;
  }
`;

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  color: white;
  padding: 50px 0;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  h4 {
    font-size: 2.5rem;

    @media (max-width: 375px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.5;

    @media (max-width: 375px) {
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }

  button {
    font-size: 1.3rem;
    border: none;
    text-transform: uppercase;
    background: none;
    color: white;
    border-bottom: 1px solid white;
    padding-bottom: 3px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      border-bottom: 1px solid #40BCDF;
      letter-spacing: 3px;
    }
  }
`;

const Mission = () => {
  return (
    <Section>
      <Container>
        <MissionContent>
          <h4>Our Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempore velit repellendus facere fugit consectetur labore eveniet beatae sunt adipisci autem! Ipsum quibusdam ratione accusamus explicabo, reiciendis, quo natus possimus non aperiam ullam cum vero nam a sit labore atque dolorum exercitationem fugiat, libero vel consequuntur reprehenderit alias asperiores deleniti! Dolore omnis nemo porro eaque placeat fugit, distinctio debitis voluptatum.
          </p>
          <button>Learn More</button>
        </MissionContent>
      </Container>
    </Section>
  )
}

export default Mission;