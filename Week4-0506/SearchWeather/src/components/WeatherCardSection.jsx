import React from "react";
import WeatherCard from "./WeatherCard";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 1rem;

  border: 2px solid blue;
`;

const WeatherCardSection = () => {
  return (
    <Wrapper>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </Wrapper>
  );
};

export default WeatherCardSection;
