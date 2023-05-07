import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 10rem;
  padding: 2.5rem 2.5rem 5rem 2.5rem;

  font-size: 5rem;

  background: linear-gradient(to bottom, #87ceeb, #ffffff);
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>찬우의 SearchWeather WEB ☀️🌤️🌦️⛈️☔🌈☃️</h1>
    </Wrapper>
  );
};

export default Header;
