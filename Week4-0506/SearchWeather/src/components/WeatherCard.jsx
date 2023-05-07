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

const WeatherCard = () => {
  return (
    <Wrapper>
      <header>날씨</header>
      <p>
        <span>이게내용</span>
        <span>이게 온도</span>
      </p>
    </Wrapper>
  );
};

export default WeatherCard;
