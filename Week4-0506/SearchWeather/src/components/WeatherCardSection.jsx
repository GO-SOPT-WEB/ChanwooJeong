import React, { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

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
  const { period, area } = useParams();

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  // 주간 날씨 조회
  // https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric

  // 오늘 날씨 조회
  // https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric

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
