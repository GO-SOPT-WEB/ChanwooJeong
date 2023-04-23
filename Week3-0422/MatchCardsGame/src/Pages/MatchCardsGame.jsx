import styled from "styled-components";
import Header from "./layout/Header";

const Wrapper = styled.div`
  border: 5px solid black;
  width: 100%;
  height: 100vh;
  background-color: rgb(252, 233, 233);
`;

const MatchCardsGame = () => {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
};

export default MatchCardsGame;
