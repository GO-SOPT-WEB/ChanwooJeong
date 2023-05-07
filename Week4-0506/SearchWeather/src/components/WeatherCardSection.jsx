import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      setIsLoading(true);
      setIsError(false);
      let url;
      if (period === "week")
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`;
      if (period === "day")
        url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`;
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    getWeatherData();
  }, [period, area]);

  console.log(data, isLoading, isError);

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
