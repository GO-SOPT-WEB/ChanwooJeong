import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 1rem;
 
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  div {
    font-size: 2.5rem;
  }
`;

const BlankPanel = () => {
  return (
    <Wrapper>
      <div>날씨를 불러올 수 없습니다 😭</div>
      <div>지역(영어) 를 다시 확인해보세요!</div>
      <div>혹은 새로고침 F5를 시도해보세요!</div>
    </Wrapper>
  );
};

export default BlankPanel;
