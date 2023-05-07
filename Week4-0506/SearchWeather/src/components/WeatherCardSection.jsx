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
  height: 63rem;
  margin-top: 3rem;
  padding: 1rem;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
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
        setIsError(true);
      });

    return () => {};
  }, [period, area]);

  console.log(data);

  const weekArr = [0, 8, 16, 23, 31];
  return (
    <Wrapper>
      {isError ? (
        "데이터를 불러오는 도중 에러발생"
      ) : isLoading ? (
        "데이터를 불러오는 중입니다"
      ) : data.main ? (
        <WeatherCard
          key={data.name}
          cityName={data.name}
          temp={data.main.temp}
          feelsLike={data.main.feels_like}
          maxTemp={data.main.temp_max}
          minTemp={data.main.temp_min}
          clouds={data.clouds.all}
          weatherImg={data.weather[0].description}
        />
      ) : (
        data.list &&
        weekArr.map((item) => {
          return (
            <WeatherCard
              key={item}
              cityName={data.city.name}
              castDate={data.list[item].dt_txt}
              temp={data.list[item].main.temp}
              feelsLike={data.list[item].main.feels_like}
              maxTemp={data.list[item].main.temp_max}
              minTemp={data.list[item].main.temp_min}
              clouds={data.list[item].clouds.all}
              weatherImg={data.list[item].weather[0].description}
            />
          );
        })
      )}
    </Wrapper>
  );
};

export default WeatherCardSection;
