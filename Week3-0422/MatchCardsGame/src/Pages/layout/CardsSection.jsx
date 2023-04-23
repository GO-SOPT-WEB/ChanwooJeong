import styled from "styled-components";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 1.5rem;
  height: calc(100% - 30rem);
`
const CardsSection = () => {

  return (
    <Wrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
};

export default CardsSection;
