import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import BlankPanel from "./BlankPanel";
import WeatherHook from "../Hooks/WeatherHook";
import SkeletonCard from "./SkeletonCard";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  width: 70%;
  height: 63rem;
  margin: 0 auto;
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

  const { data, isLoading, isError } = WeatherHook(period, area);

  const weekArr = [0, 8, 16, 23, 31];
  return (
    <Wrapper>
      {isError ? (
        <BlankPanel />
      ) : isLoading ? (
        period === "day" ? (
          <SkeletonCard />
        ) : (
          weekArr.map((el) => <SkeletonCard key={el} />)
        )
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
