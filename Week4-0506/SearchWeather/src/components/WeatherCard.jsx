import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 25rem;

  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    background-color: #1a73e8;
    color: #fff;
  }
  p {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 16px;

    font-size: 16px;

    span {
      margin-right: 8px;
    }
  }
`;

const WeatherInfoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1.5rem;
    }
  }
`;

const WeatherCard = () => {
  return (
    <Wrapper>
      <header>날씨</header>
      <img></img>
      <WeatherInfoDetailBox>
        <div>
          <span>온도</span>
          <span>12.29</span>
        </div>
        <div>
          <span>체감 온도</span>
          <span>11.09</span>
        </div>
        <div>
          <span>최저 / 최고</span>
          <span>10.66 / 14.69</span>
        </div>
        <div>
          <span>구름</span>
          <span>0%</span>
        </div>
      </WeatherInfoDetailBox>
    </Wrapper>
  );
};

export default WeatherCard;
