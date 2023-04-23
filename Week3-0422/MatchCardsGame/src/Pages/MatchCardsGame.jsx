import styled from "styled-components";
import Header from "./layout/Header";
import DifficultySection from "./layout/DifficultySection";
import CardsSection from "./layout/CardsSection";
import { useState } from "react";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(252, 233, 233);
`;

const MatchCardsGame = () => {
  //첫 난이도 설정
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <>
      <Wrapper>
        <Header />
        <DifficultySection
          currentDifficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <CardsSection currentDifficulty={difficulty} />
      </Wrapper>
    </>
  );
};

export default MatchCardsGame;
