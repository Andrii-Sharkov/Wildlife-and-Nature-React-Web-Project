import React from 'react';
import styled from 'styled-components';
import { Container } from '../styledComponents/container';
import { FaLocationArrow } from 'react-icons/fa';
import { BsPhoneVibrate } from 'react-icons/bs';
import image1 from '../../images/image-left.jpg';
import image2 from '../../images/image-right.jpg';

const Section = styled.section`
  background: black;
  height: 95vh;

  @media (max-width: 1280px) {
    height: 110vh;
  }

  @media (max-width: 1024px) {
      height: 100vh;
  }

  @media (max-width: 768px) {
    height: 160vh;
  }

  @media (max-width: 540px) {
    height: 225vh;
  }

  @media (max-width: 414px) {
    height: 235vh; 
  }

  @media (max-width: 360px) {
    height: 237vh;
  }
`;

const ContactForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  padding: 50px 0;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 25px;

  h5 {
    color: white;
    font-size: 2.5rem;
  }

  p {
    color: white;
    font-size: 1.2rem;
  }
`;

const IconLocation = styled(FaLocationArrow)`
  font-size: 2.5rem;
  color: white;
`;

const IconPhone = styled(BsPhoneVibrate)`
  font-size: 2.5rem;
  color: white;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 15px;

  @media (max-width: 540px) {
    margin-top: 20px;
  }

  input {
    background: white;
    width: 100%;
    padding: 10px 0 10px 10px;
    color: black;
    font-size: 1.3rem;
    border: none;
  }

  textarea {
    background: white;
    width: 100%;
    padding: 10px 0px 0px 10px;
    color: black;
    font-size: 1.3rem;
    border: none;
  }

  button {
    font-size: 1.5rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1.5px;
    padding: 5px 10px;
    width: 150px;
    border: none;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      width: 180px;
      background: black;
      color: white;
      border: 1px solid white;
      border-radius: 10px;
    }
  }
`;

const ExtraContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0 20px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    /* margin-bottom: 20px; */
  }

  img {
    width: 400px;
    height: 420px;
    transition: all 0.5s;
    cursor: pointer;

    @media (max-width: 1024px) {
      height: 400px;
    }

    @media (max-width: 768px) {
      height: 450px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  h6 {
    color: white;
    font-size: 2rem;

    @media (max-width: 540px) {
      margin: 25px 0;
    }
  }
`;

const ContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0 20px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }

  p {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 20px;
    line-height: 1.4;
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
    width: 400px;
    height: 420px;
    transition: all 0.5s;
    cursor: pointer;

    @media (max-width: 1024px) {
      height: 400px;
    }

    @media (max-width: 768px) {
      height: 450px;
    }

    @media (max-width: 540px) {
      margin-top: 30px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <ContactForm>
          <ContactDetails>
            <h5>Contact Us</h5>
            <IconLocation />
            <p>123 Amazing Street, 66 Avenue, State, Australia</p>
            <IconPhone />
            <p>123 456 789</p>
            <p>987 654 321</p>
          </ContactDetails>
          <Form>
            <input type='text' placeholder='Enter your Name'/>
            <input type='email' placeholder='Enter a valid email address' />
            <textarea placeholder='Enter your message' rows="4" cols="50" />
            <button type='submit'>Submit</button>
          </Form>
        </ContactForm>
        <ExtraContent>
          <ContentLeft>
            <img src={image1} alt='image' />
            <h6>We are looking forward to start a project with you!</h6>
          </ContentLeft>
          
          <ContentRight>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptates culpa. Similique, labore molestias minima praesentium eos inventore ullam adipisci unde nam laborum, fuga officia deleniti tenetur fugit dolor fugiat?
              </p>
              <button>Learn More</button>
            </div>
            <img src={image2} alt='image' />
          </ContentRight>
          
        </ExtraContent>
      </Container>
    </Section>
  )
}

export default Contact;