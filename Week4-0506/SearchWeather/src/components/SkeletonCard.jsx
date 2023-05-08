import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 25rem;
  height: fit-content;
  z-index: 2;

  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(250px);
    }
  }
  header {
    height: 3.8rem;
    padding: 1rem;
    background-color: #ddd;

    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      width: 30px;
      height: 4.8rem;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: loading 2s infinite linear;
    }
  }
  p {
    display: flex;
    justify-content: center;
    width: 250px;
    height: 240px;
    padding: 2rem 3rem;

    div {
      width: 13rem;
      height: 13rem;
      position: absolute;
      overflow: hidden;
      background-color: #ddd;
      margin: 0 auto;

      &::before {
        content: "";
        position: absolute;

        width: 30px;
        height: 14rem;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
      }
    }

    span {
      position: absolute;
      bottom: 1rem;
      width: 22rem;
      height: 6rem;
      background-color: #ddd;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 6rem;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
      }
    }
  }
`;

const SkeletonCard = () => {
  return (
    <Wrapper>
      <header></header>

      <p>
        <div></div>
        <span></span>
      </p>
    </Wrapper>
  );
};

export default SkeletonCard;
