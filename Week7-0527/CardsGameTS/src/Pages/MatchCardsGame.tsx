import styled from "styled-components";
import Header from "./layout/Header";
import DifficultySection from "./layout/DifficultySection";
import CardsSection from "./layout/CardsSection";
import { Dispatch, SetStateAction, useState } from "react";
import ModalPortal from "./utils/modalPortal";
import Modal from "../components/Modal";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  difficultyAtom,
  matchedCardsAtom,
  matchingCardsAtom,
  modalOpenAtom,
} from "../atoms/atom";

const MatchCardsGame = () => {
  //첫 난이도 설정
  const [difficulty, setDifficulty] = useState("Easy");

  const setDifficultyFn = useSetRecoilState(difficultyAtom);

  /** 전체 리셋 + 난이도 Easy로 변경하는 리셋함수 */
  const allReset = () => {
    reSet();
    setDifficultyFn("Easy");
  };

  /** 단순 카드만 리셋하는 함수 */
  const reSet = () => {
    setMatchingArr([]);
    setMatchedArr([]);
  };

  // /** 카드매칭 관련 함수 */
  const [matchingArr, setMatchingArr] = useRecoilState(matchingCardsAtom);
  const [matchedArr, setMatchedArr] = useRecoilState(matchedCardsAtom);

  // const matchCards = (data) => {
  //   if (matchingArr.length < 2) {
  //     const newMatchCardArr = [...matchingArr];
  //     newMatchCardArr.push(data);
  //     setMatchingArr(newMatchCardArr);
  //     console.log("첫카드를 골랐습니다");

  //     if (matchingArr.length === 1) {
  //       if (matchingArr[0].pokemonName === data.pokemonName) {
  //         const newMatchedArr = [...matchedArr];
  //         newMatchedArr.push({ first: matchingArr[0], second: data });
  //         setMatchedArr(newMatchedArr);
  //         console.log("두카드가 일치 합니다");
  //       } else {
  //         console.log("두카드가 일치 하지 않습니다");
  //       }
  //     }
  //   }
  // };

  /** 모달 열고 닫는 Recoil atom value */
  const isModalOpen = useRecoilValue(modalOpenAtom);

  return (
    <>
      <Wrapper>
        <Header />
        <DifficultySection />
        <CardsSection />
        {isModalOpen && (
          <ModalPortal>
            <Modal allReset={allReset}>Game Clear🎉</Modal>
          </ModalPortal>
        )}
      </Wrapper>
    </>
  );
};

export default MatchCardsGame;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  overflow: scroll;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.bgColor};
`;
