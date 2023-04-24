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

  const [matchingArr, setMatchingArr] = useState([]);
  const [matchedArr , setMatchedArr] = useState([]);


  const reSet = () => {
    setMatchingArr([])
    setMatchedArr([])
  }


  const matchCards = (data) => {
    if (!matchingArr.length) {
      const newMatchCardArr = [...matchingArr]
      newMatchCardArr.push(data);
      setMatchingArr(newMatchCardArr)
      console.log("첫번째 카드를 골랐습니다.");
      return;
    }
    if (matchingArr.length) {
      if (matchingArr[0].pokemonName === data.pokemonName) {
        const newMatchedArr = [...matchedArr]
        newMatchedArr.push({ first: matchingArr[0], second: data });
        setMatchedArr(newMatchedArr)
        setMatchingArr([]);
        console.log(matchedArr)
        console.log("두카드가 일치 합니다.");
      } else {
        setMatchingArr([]);
        console.log(matchingArr, "두카드가 일치 하지 않습니다.");
      }
    }
  };
  return (
    <>
      <Wrapper>
        <Header currentDifficulty={difficulty} matchedArr={matchedArr} reSet={reSet} />
        <DifficultySection
          currentDifficulty={difficulty}
          setDifficulty={setDifficulty}
          reset={reSet}
        />
        <CardsSection currentDifficulty={difficulty} matchCards={matchCards} matchCardArr={{matchingArr , matchedArr}} />
      </Wrapper>
    </>
  );
};

export default MatchCardsGame;
