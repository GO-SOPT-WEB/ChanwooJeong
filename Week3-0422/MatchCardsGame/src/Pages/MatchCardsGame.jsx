import styled from "styled-components";
import Header from "./layout/Header";
import DifficultySection from "./layout/DifficultySection";
import CardsSection from "./layout/CardsSection";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(252, 233, 233);
`;

const MatchCardsGame = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <DifficultySection />
        <CardsSection />
      </Wrapper>
    </>
  );
};

export default MatchCardsGame;
