import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 2rem;

  font-size: 5rem;

  background-color: #1a73e8;;;
  
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>찬우의 SearchWeather WEB ☀️🌤️🌦️⛈️☔🌈☃️</h1>
    </Wrapper>
  );
};

export default Header;
