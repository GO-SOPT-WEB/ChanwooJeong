import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { WEATER_TYPE } from "../assets/weatherImg";

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

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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

    axios
      .get(url)
      .then((Response) => {
        console.log(Response.data);
        setData(Response.data);
        setIsLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
      });

    return () => {};
  }, [period, area]);

  console.log(data);
  return (
    <Wrapper>
      {isError
        ? "데이터를 불러오는 도중 에러발생"
        : isLoading
        ? "데이터를 불러오는 중입니다"
        : data.main ? (
            <WeatherCard
              feelsLike={data.main.feels_like}
              cityName={data.name}
              temp={data.main.temp}
              maxTemp={data.main.temp_max}
              minTemp={data.main.temp_min}
              weatherImg={data.weather[0].description}
            />
          ) : data.list && <WeatherCard
        //   feelsLike={data.main.feels_like}
        //   cityName={data.name}
        //   temp={data.main.temp}
        //   maxTemp={data.main.temp_max}
        //   minTemp={data.main.temp_min}
        //   weatherImg={data.weather[0].description}
        />}
    </Wrapper>
  );
};

export default WeatherCardSection;
