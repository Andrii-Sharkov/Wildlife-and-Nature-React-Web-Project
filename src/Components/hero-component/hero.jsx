import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';
import image from '../../images/image-1.jpg';
import image2 from '../../images/image-2.jpg';
import image3 from '../../images/image-3.jpg';

const Section = styled.section`
  background: black;
  height: 140vh;

  @media (max-width: 1280px) {
    height: 155vh;
  }

  @media (max-width: 540px) {
      height: 290vh;
  }

  @media (max-width: 375px) {
    height: 255vh;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 30px;
  padding-top: 70px;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  h3 {
    font-size: 2.8rem;
    color: white;
    letter-spacing: 3px;

    @media (max-width: 375px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: white;
    line-height: 1.8;

    @media (max-width: 375px) {
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }

  button {
    width: 200px;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    padding: 15px;
    margin-top: 10px;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    letter-spacing: 2.5px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      width: 230px;
    }
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    column-gap: 5px;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

const ColumnOneImage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 350px;
  height: auto;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 300px;
  }

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    width: 280px;
  }

  @media (max-width: 540px) {
    width: 400px;
  }

  @media (max-width: 414px) {
      width: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 700px;
  height: auto;

  @media (max-width: 1280px) {
    width: 550px;
  }

  @media (max-width: 1024px) {
    width: 650px;
  }

  @media (max-width: 768px) {
    width: 430px;
  }

  @media (max-width: 540px) {
    width: 450px;
    margin: 70px auto 0px;
  }

  @media (max-width: 414px) {
    width: 380px;
  }

  @media (max-width: 375px) {
    width: 350px;
  }

  img {
    width: 100%;
    height: auto;
    transform: translateY(-50px);
  }

  p {
    font-size: 1.2rem;
    color: white;
    line-height: 2;

    @media (max-width: 375px) {
      font-size: 1rem;
      line-height: 1.4;
    }
  }

  button {
    background: #0087D7;
    width: 150px;
    padding: 10px 15px;
    font-size: 1.2rem;
    color: white;
    border: none;
    letter-spacing: 1.8px;
    margin-top: 40px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      background: none;
      border: 1px solid white;
      width: 180px;
      letter-spacing: 2px;
    }
  }
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  height: 250px;
  background: white;
  padding: 30px 20px;
  transform: translate(-50px, -150px);

  @media (max-width: 1280px) {  
    width: 320px;
    height: 210px;
    transform: translate(-40px, -170px);
  }

  @media (max-width: 1024px) {
    transform: translate(650px, -170px);
  }

  @media (max-width: 768px) {
    width: 270px;
    height: 200px;
    transform: translate(483px, -140px);
  }

  @media (max-width: 540px) {
    width: 300px;
    height: 200px;
    transform: translate(80px, 30px);
  }

  @media (max-width: 414px) {
      transform: translate(45px, 50px);
  }

  h3 {
    font-size: 2.2rem;
    letter-spacing: 2.2px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;



const Hero = () => {
  return (
    <Section>
      <Container>
        <HeroWrapper>
          <HeroTitle>
            <h3>Getting back to nature</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque praesentium recusandae, suscipit natus eos voluptate non in, exercitationem illum minima maiores, autem voluptatem accusamus aut? Quod corporis excepturi consectetur consequuntur ullam sit eaque quaerat voluptates, eligendi modi labore quidem facere!
            </p>
            <button>Learn More</button>
          </HeroTitle>
          <HeroGrid>
            <ColumnOneImage>
              <img src={image} alt='Diving' />
              <img src={image2} alt='Dolphins' />
            </ColumnOneImage>
            <ColumnTwo>
              <img src={image3} alt='Beach' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil aut veritatis dolorem voluptate distinctio voluptates voluptas tenetur excepturi saepe veniam dicta laborum, necessitatibus aspernatur illum minima ipsa corrupti quisquam?
              </p>
              <button>Learn More</button>
            </ColumnTwo>
            <ColumnThree>
              <h3>Amazing Places</h3> 
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi consequuntur. Esse, quidem a iste.
              </p>
            </ColumnThree>
          </HeroGrid>
        </HeroWrapper>
      </Container>
    </Section>
  )
}

export default Hero;