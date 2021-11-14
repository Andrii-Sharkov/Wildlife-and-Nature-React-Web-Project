import React from 'react';
import styled from 'styled-components';
import image from '../../images/beach.jpg';
import { Container } from '../styledComponents/container';
import { ImQuotesLeft } from 'react-icons/im';

const Section = styled.section`
  background: black;
  height: 95vh;

  @media (max-width: 1280px) {
    height: 115vh;
  }

  @media (max-width: 768px) {
    height: 160vh;
  }

  @media (max-width: 375px) {
    height: 135vh;
  }
`;

const NatureRow = styled.div`
  display: grid;
  grid-template-columns: 400px 500px;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  padding: 70px 0;

  @media (max-width: 375px) {
    padding: 40px 0;
  }

  @media (max-width: 1024px) {
    justify-content: end;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-content: center;
    row-gap: 20px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  position: relative;
  width: 400px;

  @media (max-width: 414px) {
    width: 350px;
    margin: auto;
  }

  @media (max-width: 375px) {
    width: 340px;
  }

  img {
    width: 100%;
    height: auto;
  }

  h4 {
    font-size: 7rem;
    color: white;
    letter-spacing: 5px;
    position: absolute;
    top: 25%;
    left: -7rem;

    @media (max-width: 1024px) {
      margin-left: 20px;
    }

    @media (max-width: 540px) {
      font-size: 5rem;
      left: -5rem;
    }

    @media (max-width: 414px) {
      font-size: 4rem;
      left: 0;
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 1.3;
    color: white;
    text-align: start;

    @media (max-width: 375px) {
      font-size: 1.1rem;
      line-height: 1.2;
    }
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 25px;
  background: white;
  width: 400px;
  height: 500px;
  row-gap: 20px;

  @media (max-width: 414px) {
    width: 360px;
  }

  @media (max-width: 375px) {
    width: 340px;
    padding: 20px 15px;
    height: 430px;
  }

  p {
    font-size: 1.7rem;
    line-height: 1.5;

    @media (max-width: 375px) {
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }

  h5 {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 15px 0;
  }

  button {
    width: 200px;
    font-size: 1.3rem;
    letter-spacing: 2.5px;
    color: white;
    padding: 10px 15px;
    background: #40BCDF;
    border: none;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      width: 220px;
      letter-spacing: 3.5px;
    }
  }
`;  

const Nature = () => {
  return (
    <Section>
      <Container>
        <NatureRow>
          <ColumnLeft>
            <img src={image} alt='beach' />
            <h4>Nature</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dicta laudantium quisquam eum maxime dolorum! Voluptatem sit dolore molestias, obcaecati voluptates quae totam? Asperiores, quaerat. Alias nostrum perferendis reiciendis tenetur maxime quod in, vel placeat?
            </p>
          </ColumnLeft>
          <ColumnRight>
            <ImQuotesLeft color='black' size='5rem'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim eaque quia veniam assumenda eius.
            </p>
            <h5>
              - Royal Garden Mission
            </h5>
            <button>Learn More</button>
          </ColumnRight>
        </NatureRow>
      </Container>
    </Section>
  )
}

export default Nature;