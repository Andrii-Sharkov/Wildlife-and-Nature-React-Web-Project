import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';
import image from '../../images/tiger.jpg';
import image2 from '../../images/lion.jpg';
import WildlifeExtraImages from './wildlifeExtraImages';

const Section = styled.section`
  background: white;
  height: 110vh;

  @media (max-width: 1280px) {
    height: 135vh;
  }

  @media (max-width: 1024px) {
    height: 110vh;
  }

  @media (max-width: 768px) {
    height: 245vh;
  }

  @media (max-width: 540px) {
    height: 272vh;
  }

  @media (max-width: 414px) {
    height: 250vh;
  }

  @media (max-width: 375px) {
    height: 230vh;
  }

  @media (max-width: 360px) {
    height: 222vh;
  }
`;

const WildlifeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 20px;
  padding: 50px 0;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.07);
    }
  }

  h5 {
    font-size: 8rem;
    font-weight: bold;
    letter-spacing: 7px;
    margin: 60px 0;
    text-shadow: 5px 10px 15px black;

    @media (max-width: 1024px) {
      font-size: 7rem;
    }

    @media (max-width: 414px) {
      font-size: 5rem;
    }

    @media (max-width: 360px) {
      font-size: 4rem;
    }
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  overflow: hidden;

  h5 {
    font-size: 2.6rem;

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  button {
    font-size: 1.4rem;
    background: none;
    border: none;
    border-bottom: 1px solid #40BCDF;
    color: #40BCDF;
    text-transform: uppercase;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      letter-spacing: 3px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.07);
    }
  }
`;

const ImagesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  transform: translate(750px, -70px);
  width: 200px;

  @media (max-width: 1024px) {
    transform: translate(550px, -70px);
  }

  @media (max-width: 768px) {
    transform: translate(280px, -70px);
  }

  @media (max-width: 540px) {
    flex-direction: column;
    row-gap: 20px;
    transform: translate(100px, 0px);
    width: 350px;
  }

  @media (max-width: 414px) {
    transform: translate(30px, 0px);  
  }

  @media (max-width: 375px) {
    width: 300px;
    transform: translate(35px, 0);
  }

  @media (max-width: 360px) {
    transform: translate(30px, 0);
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.08);
    }
  }
`;

const Wildlife = () => {
  return (
    <Section>
      <Container>
        <WildlifeContent>
          <ColumnLeft>
            <img src={image} alt='tiger' />
            <h5>Wildlife</h5>
          </ColumnLeft>
          <ColumnRight>
            <h5>Africa is home to many of the world's most famous fauna</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem asperiores dolores ut, perferendis soluta commodi, sequi omnis cupiditate aperiam vitae quo ullam natus. Labore cupiditate impedit rerum officia qui!
            </p>
            <button>Learn More</button>
            <img src={image2} alt='lion' />
          </ColumnRight>
        </WildlifeContent>
        <ImagesRow>
          {WildlifeExtraImages.map( (image, index) => {
            return (           
              <img key={index} src={image.image} alt='animals' />            
            )
          })}
        </ImagesRow>
      </Container>  
    </Section>
  )
}

export default Wildlife;