import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutSection>
      <h1>About Chefs Kiss</h1>
      <p>
        Welcome to Chefs Kiss, a platform created for reducing food waste and removing the pain of not knowing what to cook. 
        Our mission is to bring together the best recipes, kitchen tips, and food inspiration to help you create magical meals with what you have.
      </p>
      <p>
        Whether you are a home cook, a professional chef, or simply enjoy the art of food, we offer a wide range of resources 
        designed to make your cooking experience enjoyable, exciting, and waste free. We believe that good food brings people together, 
        and we're here to help you explore new flavors and techniques while helping save the world!
      </p>
    </AboutSection>
  );
}

const AboutSection = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    color: #555;
  }
`;

export default About;
